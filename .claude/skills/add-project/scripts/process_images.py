#!/usr/bin/env python3
"""Standardize raw project photos into the COVIMUS site's WEBP convention.

Reads a folder of raw photos and writes resized/compressed WEBP files into
public/assets/images/ima_projects/<year>/<dest-folder>/<slug>-NN.webp,
matching the naming convention already used across src/data/projectsData.js.

Never touches src/data/projectsData.js -- prints a JSON summary to stdout so
the calling conversation can build a preview before anything is written there.
"""

import argparse
import json
import sys
from pathlib import Path

from PIL import Image, ImageOps

DEFAULT_MAX_DIM = 1600
DEFAULT_QUALITY = 80
DEFAULT_SIZE_CEILING_KB = 300
DEFAULT_MIN_QUALITY = 50
QUALITY_STEP = 5
LARGE_SOURCE_WARN_MB = 15

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tif", ".tiff"}

# scripts/ -> add-project/ -> skills/ -> .claude/ -> repo root
REPO_ROOT = Path(__file__).resolve().parents[4]


def parse_args():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--source", required=True, help="Folder with raw source photos")
    p.add_argument("--slug", required=True, help="kebab-case file-name prefix, e.g. av-municipal-cristina-suite")
    p.add_argument("--dest-folder", required=True, help="Project folder name, e.g. Cristina_Suite")
    p.add_argument("--year", required=True, help="Year the work was executed, e.g. 2026")
    p.add_argument("--max-dim", type=int, default=DEFAULT_MAX_DIM)
    p.add_argument("--quality", type=int, default=DEFAULT_QUALITY)
    p.add_argument("--size-ceiling-kb", type=int, default=DEFAULT_SIZE_CEILING_KB)
    p.add_argument("--min-quality", type=int, default=DEFAULT_MIN_QUALITY)
    p.add_argument("--force", action="store_true", help="Allow writing into a non-empty destination folder")
    return p.parse_args()


def fail(message, **extra):
    print(json.dumps({"error": message, **extra}, indent=2, ensure_ascii=False))
    sys.exit(1)


def load_and_normalize(path):
    im = Image.open(path)
    im = ImageOps.exif_transpose(im)  # bake in camera rotation before dropping EXIF
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.split()[-1])
        im = bg
    elif im.mode != "RGB":
        im = im.convert("RGB")
    return im


def resize_if_needed(im, max_dim):
    w, h = im.size
    longest = max(w, h)
    if longest <= max_dim:
        return im
    scale = max_dim / float(longest)
    new_size = (max(1, round(w * scale)), max(1, round(h * scale)))
    return im.resize(new_size, Image.LANCZOS)


def save_within_ceiling(im, dest_path, quality, ceiling_kb, min_quality):
    q = quality
    while True:
        im.save(dest_path, format="WEBP", quality=q, method=6)
        size_kb = dest_path.stat().st_size / 1024
        if size_kb <= ceiling_kb or q <= min_quality:
            return size_kb, q, size_kb > ceiling_kb
        q -= QUALITY_STEP


def main():
    args = parse_args()

    source_dir = Path(args.source)
    if not source_dir.is_dir():
        fail(f"Source folder not found: {source_dir}")

    dest_dir = REPO_ROOT / "public" / "assets" / "images" / "ima_projects" / str(args.year) / args.dest_folder
    if dest_dir.exists() and any(dest_dir.iterdir()) and not args.force:
        fail(
            f"Destination folder already exists and is not empty: {dest_dir}. "
            "Pass --force to write into it anyway.",
            destFolder=str(dest_dir),
        )
    dest_dir.mkdir(parents=True, exist_ok=True)

    source_files = sorted(
        f for f in source_dir.iterdir()
        if f.is_file() and f.suffix.lower() in IMAGE_EXTENSIONS
    )
    if not source_files:
        fail(f"No image files found in {source_dir}")

    images = []
    errors = []
    counter = 0

    for src in source_files:
        orig_size_kb = src.stat().st_size / 1024
        warning = None
        if orig_size_kb > LARGE_SOURCE_WARN_MB * 1024:
            warning = f"Source file is {orig_size_kb / 1024:.1f}MB -- worth a visual sanity check."

        try:
            im = load_and_normalize(src)
        except Exception as exc:
            errors.append({"file": src.name, "error": str(exc)})
            continue

        counter += 1
        out_name = f"{args.slug}-{counter:02d}.webp"
        out_path = dest_dir / out_name

        im = resize_if_needed(im, args.max_dim)
        final_size_kb, quality_used, oversize = save_within_ceiling(
            im, out_path, args.quality, args.size_ceiling_kb, args.min_quality
        )

        public_path = "/" + str(out_path.relative_to(REPO_ROOT / "public")).replace("\\", "/")

        entry = {
            "file": out_name,
            "path": public_path,
            "srcOriginal": src.name,
            "origSizeKB": round(orig_size_kb, 1),
            "finalSizeKB": round(final_size_kb, 1),
            "width": im.width,
            "height": im.height,
            "qualityUsed": quality_used,
            "oversize": oversize,
        }
        if warning:
            entry["warning"] = warning
        images.append(entry)

    summary = {
        "destFolder": str(dest_dir.relative_to(REPO_ROOT)).replace("\\", "/"),
        "images": images,
        "coverImage": images[0]["path"] if images else None,
        "errors": errors,
    }
    print(json.dumps(summary, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
