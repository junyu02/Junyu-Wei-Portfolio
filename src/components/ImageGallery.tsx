import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageSkeleton } from './LoadingSpinner';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const openImage = (index: number) => {
    setSelectedIndex(index);
    setIsFullscreen(true);
  };

  const closeImage = () => {
    setIsFullscreen(false);
    setTimeout(() => setSelectedIndex(null), 300);
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  // Keyboard navigation for fullscreen mode
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closeImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, selectedIndex]);

  // Focus trap and initial focus management
  useEffect(() => {
    if (!isFullscreen) return;

    // Focus close button when modal opens
    closeButtonRef.current?.focus();

    // Trap focus within modal
    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleFocusTrap);
    return () => window.removeEventListener('keydown', handleFocusTrap);
  }, [isFullscreen]);

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left - next image
        nextImage();
      } else {
        // Swiped right - previous image
        prevImage();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 overflow-hidden cursor-pointer group focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-950 rounded-sm"
            onClick={() => openImage(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openImage(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View ${title} image ${index + 1} in fullscreen`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="w-full h-full relative"
            >
              {!loadedImages.has(index) && (
                <ImageSkeleton className="absolute inset-0" />
              )}
              <ImageWithFallback
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad(index)}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center pointer-events-none group-focus:opacity-100"
            >
              <div className="bg-white/90 dark:bg-gray-900/90 p-3 rounded-full">
                <Maximize2 className="w-5 h-5 text-gray-900 dark:text-gray-100" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && selectedIndex !== null && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeImage}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery fullscreen view"
          >
            {/* Close Button */}
            <motion.button
              ref={closeButtonRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={closeImage}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white hover:text-gray-300 transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
              aria-label="Close fullscreen view"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 sm:left-6 text-white hover:text-gray-300 transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 sm:right-6 text-white hover:text-gray-300 transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
                </motion.button>
              </>
            )}

            {/* Image Counter & Keyboard Hints */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-center z-10"
            >
              <div className="text-white text-sm mb-1">
                {selectedIndex + 1} / {images.length}
              </div>
              <div className="text-white/60 text-xs hidden sm:block">
                Use ← → arrow keys or swipe to navigate • ESC to close
              </div>
            </motion.div>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center px-4 sm:px-0"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <ImageWithFallback
                  src={images[selectedIndex]}
                  alt={`${title} - Image ${selectedIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
