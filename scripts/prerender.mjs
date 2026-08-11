// Post-build prerender: serves the fresh dist/ build locally, visits each
// known route with a real browser, waits for React to render + settle, and
// writes the final HTML back into dist/<route>/index.html.
//
// Why: this is a client-only Vite SPA (no SSR/SSG). Without this step every
// route serves the same empty shell to anything that doesn't execute JS
// (search crawlers with limited render budgets, AI crawlers, social link
// unfurlers like WhatsApp/Facebook/Telegram). Vercel's `{ handle: "filesystem" }`
// rule in vercel.json already serves a matching dist/<route>/index.html over
// the SPA catch-all when one exists, so no routing changes are needed here.
//
// The entry point stays on ReactDOM.createRoot (not hydrateRoot) on purpose:
// createRoot replaces the DOM instead of reconciling it, so there is no
// hydration-mismatch risk from framer-motion elements starting this prerendered
// HTML in their animated-in state while React's first client render starts
// from each element's `initial` state. Humans get the exact same CSR mount
// as before; they just get a real first paint before the JS bundle runs.
import { preview } from 'vite';
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Vercel's build image doesn't have the shared libraries (libnspr4,
// libnss3, ...) Playwright's own downloaded Chromium needs, and has no
// apt-get to install them with (it isn't a standard Debian/Ubuntu image).
// @sparticuz/chromium ships a statically-linked Chromium built for exactly
// this kind of constrained serverless/build environment. Only load it when
// actually running on Vercel — locally (Windows/macOS/regular Linux) the
// normal Playwright-managed browser installed via `playwright install`
// works fine and @sparticuz/chromium's binary is Linux-only anyway.
async function getLaunchOptions() {
  if (!process.env.VERCEL) return {};
  const { default: sparticuzChromium } = await import('@sparticuz/chromium');
  return {
    executablePath: await sparticuzChromium.executablePath(),
    args: sparticuzChromium.args,
    headless: true,
  };
}

const ROUTES = ['/', '/about-us', '/projects', '/contrataciones', '/contact'];
const DIST_DIR = path.resolve('dist');

async function waitForStableDom(page, { timeoutMs = 5000, intervalMs = 250 } = {}) {
  const deadline = Date.now() + timeoutMs;
  let previous = null;
  while (Date.now() < deadline) {
    const snapshot = await page.evaluate(() => ({
      textLength: document.body.innerText.length,
      nodeCount: document.querySelectorAll('*').length,
    }));
    if (previous && previous.textLength === snapshot.textLength && previous.nodeCount === snapshot.nodeCount) {
      return;
    }
    previous = snapshot;
    await page.waitForTimeout(intervalMs);
  }
  // Not fully settled within the budget (e.g. a still-running background
  // animation) — proceed anyway with whatever is currently in the DOM
  // rather than blocking the build indefinitely.
}

async function main() {
  const server = await preview({
    root: process.cwd(),
    preview: { port: 0, host: '127.0.0.1' },
  });
  const url = server.resolvedUrls.local[0].replace(/\/$/, '');

  const browser = await chromium.launch(await getLaunchOptions());
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();

  try {
    for (const route of ROUTES) {
      const target = `${url}${route}`;
      // 'networkidle' timed out in practice: the two static.rocket.new
      // builder scripts and About Us's autoplaying videos keep some network
      // activity going indefinitely, so "no connections for 500ms" never
      // happens. 'load' (all initial resources loaded) is enough to get
      // React mounted; waitForStableDom below is the real signal that the
      // actual render (including framer-motion/CountUp) has settled.
      await page.goto(target, { waitUntil: 'load', timeout: 45000 });
      await waitForStableDom(page);

      const html = await page.content();
      const outDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route.slice(1));
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, 'index.html'), html, 'utf8');
      console.log(`prerendered ${route} -> ${path.relative(process.cwd(), path.join(outDir, 'index.html'))}`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.httpServer.close((err) => (err ? reject(err) : resolve()));
    });
  }
}

main().catch((err) => {
  console.error('prerender failed:', err);
  process.exit(1);
});
