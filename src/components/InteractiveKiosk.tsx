import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Task1Screen1 from '../imports/Task1';
import Flow21Screen14 from '../imports/Flow21-127-6749';
import Flow21Screen15 from '../imports/Flow21-127-6795';

// Import all the frames we need
const screens = [
  { id: 1, component: Task1Screen1, label: 'Welcome' },
  { id: 14, component: Flow21Screen14, label: 'Bags Returned' },
  { id: 15, component: Flow21Screen15, label: 'Return Complete' },
];

const FRAME_WIDTH = 1180;
const FRAME_HEIGHT = 820;

export const InteractiveKiosk: React.FC = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scaleX = rect.width / FRAME_WIDTH;
        const scaleY = rect.height / FRAME_HEIGHT;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const goToNext = () => {
    if (currentScreenIndex < screens.length - 1) {
      setCurrentScreenIndex(currentScreenIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentScreenIndex > 0) {
      setCurrentScreenIndex(currentScreenIndex - 1);
    }
  };

  const goToScreen = (index: number) => {
    setCurrentScreenIndex(index);
  };

  const CurrentScreen = screens[currentScreenIndex].component;

  return (
    <div className="relative w-full">
      {/* Tablet Frame Container */}
      <div className="relative bg-gray-800 rounded-2xl p-4 shadow-2xl pb-20">
        {/* Screen Bezel - Fixed aspect ratio container */}
        <div 
          ref={containerRef}
          className="relative bg-white rounded-xl overflow-hidden w-full"
          style={{ 
            aspectRatio: '1180 / 820',
          }}
        >
          {/* Screen Content with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreenIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Scaled Figma frame */}
              <div 
                style={{ 
                  width: FRAME_WIDTH,
                  height: FRAME_HEIGHT,
                  transform: `scale(${scale})`,
                  transformOrigin: 'center center',
                }}
              >
                <CurrentScreen />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            disabled={currentScreenIndex === 0}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous screen"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </button>

          {/* Progress Dots */}
          <div className="flex gap-1.5">
            {screens.map((screen, index) => (
              <button
                key={screen.id}
                onClick={() => goToScreen(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentScreenIndex
                    ? 'w-6 bg-blue-600'
                    : 'w-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to ${screen.label}`}
                title={screen.label}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={currentScreenIndex === screens.length - 1}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next screen"
          >
            <ChevronRight className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </button>
        </div>
      </div>

      {/* Screen Label - hidden to reduce height */}
      <div className="sr-only">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          {currentScreenIndex + 1}/{screens.length}: {screens[currentScreenIndex].label}
        </p>
      </div>
    </div>
  );
};