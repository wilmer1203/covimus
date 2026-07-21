import React, { useState, useEffect, useMemo } from 'react';
import { projects } from '../../../data/projectsData';

const GridCell = ({ allImages }) => {
  const [currentImage, setCurrentImage] = useState(null);
  const [nextImage, setNextImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!allImages || allImages.length === 0) return;

    // Set initial image
    setCurrentImage(allImages[Math.floor(Math.random() * allImages.length)]);

    // Random interval (between 2s and 4s)
    const intervalTime = Math.random() * 4000 + 2000;
    
    const interval = setInterval(() => {
        // Skip the swap entirely while the tab isn't visible — no point
        // re-rendering/decoding images nobody can see, and it avoids ~40
        // background timers competing for the main thread when the user
        // comes back (they'd otherwise all fire their pending setTimeout
        // around the same time).
        if (document.hidden) return;

        if (allImages.length > 0) {
            const newImg = allImages[Math.floor(Math.random() * allImages.length)];
            setNextImage(newImg);
            setIsTransitioning(true);

            // After fade out/in (1000ms), swap references
            setTimeout(() => {
                setCurrentImage(newImg);
                setNextImage(null);
                setIsTransitioning(false);
            }, 1000);
        }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [allImages]);

  if (!allImages || allImages.length === 0) return <div className="bg-slate-950/50 w-full h-full border-[0.5px] border-white/5" />;

  return (
    <div className="relative w-full h-full overflow-hidden border-[0.5px] border-white/5">
        {/* Current Image */}
        {currentImage && (
            <img
                src={currentImage}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover mix-blend-luminosity transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-40'}`}
            />
        )}
        
        {/* Next Image (Preload/Fade In) */}
        {nextImage && (
            <img
                src={nextImage}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover mix-blend-luminosity transition-opacity duration-1000 ${isTransitioning ? 'opacity-40' : 'opacity-0'}`}
            />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/20" />
    </div>
  );
};

const DynamicBackground = () => {
  const allImages = useMemo(() => {
    try {
        if (!projects) return [];
        const images = [];
        projects.forEach(project => {
            if (Array.isArray(project.images)) {
                images.push(...project.images);
            } else if (project.image) {
                images.push(project.image);
            }
        });
        return images;
    } catch (e) {
        console.error("Error loading images:", e);
        return [];
    }
  }, []);

  // Grid Configuration: reduced from 40 to 20 cells — each one runs its own
  // setInterval + full-res image cross-fade, and this background sits behind
  // the contact form where INP matters most (the user is typing).
  const CELLS = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 grid-rows-4 h-full w-full">
            {CELLS.map((_, index) => (
                <GridCell key={index} allImages={allImages} />
            ))}
        </div>
    </div>
  );
};

export default DynamicBackground;
