import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, ZoomOut, X, Maximize2 } from 'lucide-react';
import Group14 from '../imports/Group14';

export const PersonasDisplay = React.memo(function PersonasDisplay() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(0.5);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showHint, setShowHint] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Content dimensions
  const CONTENT_WIDTH = 3500;
  const CONTENT_HEIGHT = 800;

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.2));
  };

  const handleReset = () => {
    setScale(0.5);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isFullscreen && e.ctrlKey) {
      e.preventDefault();
      const delta = -e.deltaY * 0.001;
      setScale(prev => Math.max(0.2, Math.min(3, prev + delta)));
    }
  };

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowHint(true);
    }, 2000);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setShowHint(false);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Keyboard navigation for fullscreen mode
  useEffect(() => {
    if (!isFullscreen) return;

    const PAN_STEP = 50; // pixels to move per key press

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          setIsFullscreen(false);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setPosition(prev => {
            const newPos = constrainPosition(prev.x + PAN_STEP, prev.y, scale);
            return newPos;
          });
          break;
        case 'ArrowRight':
          e.preventDefault();
          setPosition(prev => {
            const newPos = constrainPosition(prev.x - PAN_STEP, prev.y, scale);
            return newPos;
          });
          break;
        case 'ArrowUp':
          e.preventDefault();
          setPosition(prev => {
            const newPos = constrainPosition(prev.x, prev.y + PAN_STEP, scale);
            return newPos;
          });
          break;
        case 'ArrowDown':
          e.preventDefault();
          setPosition(prev => {
            const newPos = constrainPosition(prev.x, prev.y - PAN_STEP, scale);
            return newPos;
          });
          break;
        case '+':
        case '=':
          e.preventDefault();
          handleZoomIn();
          break;
        case '-':
        case '_':
          e.preventDefault();
          handleZoomOut();
          break;
        case '0':
          e.preventDefault();
          handleReset();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, scale, position]);

  // Calculate bounds to keep content visible
  const constrainPosition = (x: number, y: number, currentScale: number) => {
    if (!containerRef.current) return { x, y };

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    const scaledWidth = CONTENT_WIDTH * currentScale;
    const scaledHeight = CONTENT_HEIGHT * currentScale;

    // Calculate how much we can move from center
    let maxX = 0;
    let maxY = 0;

    if (scaledWidth > containerWidth) {
      // Content is wider - allow panning but keep some visible
      maxX = (scaledWidth - containerWidth) / 2 + scaledWidth * 0.1;
    }

    if (scaledHeight > containerHeight) {
      // Content is taller - allow panning but keep some visible
      maxY = (scaledHeight - containerHeight) / 2 + scaledHeight * 0.1;
    }

    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y)),
    };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isFullscreen) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && isFullscreen) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      const constrained = constrainPosition(newX, newY, scale);
      setPosition(constrained);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Re-constrain when scale changes
  useEffect(() => {
    if (isFullscreen) {
      const constrained = constrainPosition(position.x, position.y, scale);
      if (constrained.x !== position.x || constrained.y !== position.y) {
        setPosition(constrained);
      }
    }
  }, [scale, isFullscreen]);

  return (
    <>
      {/* Thumbnail Preview */}
      {!isFullscreen && (
        <div className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-transparent dark:border-white/10 rounded-lg overflow-hidden shadow-lg">
          {/* Preview Container */}
          <div className="relative w-full overflow-x-auto min-h-[300px] sm:h-[500px]">
            <div className="absolute inset-0 flex items-center justify-start p-4 sm:p-8">
              <div 
                className="relative rounded-lg shadow-2xl overflow-hidden"
                style={{ 
                  minWidth: '100%',
                  height: 'min(420px, 70vh)',
                }}
              >
                <div className="w-full h-full overflow-x-auto overflow-y-hidden flex items-center px-4 sm:px-8">
                  <div 
                    className="relative"
                    style={{ 
                      width: '3500px',
                      height: '800px',
                      transform: 'scale(0.5)',
                      transformOrigin: 'left center',
                    }}
                  >
                    <Group14 />
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay with "Click to View Full Size" */}
            <div 
              className="absolute inset-0 bg-black/0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 flex items-center justify-center cursor-pointer focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-950"
              onClick={() => setIsFullscreen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsFullscreen(true);
                }
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tabIndex={0}
              role="button"
              aria-label="View personas in fullscreen mode"
            >
              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
                  >
                    <Maximize2 className="w-5 h-5" />
                    <span>Click to View Full Size</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Preview Label */}
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md">
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">5 User Personas</p>
          </div>
        </div>
      )}

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Controls */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1 sm:gap-2 z-10">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-1 sm:p-2 flex items-center gap-0.5 sm:gap-1">
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  title="Zoom Out (-)"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
                </button>
                <div className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300 min-w-[50px] sm:min-w-[60px] text-center">
                  {Math.round(scale * 100)}%
                </div>
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  title="Zoom In (+)"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={handleReset}
                  className="px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors text-xs sm:text-sm text-gray-700 dark:text-gray-300 hidden sm:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  title="Reset View (0)"
                  aria-label="Reset view"
                >
                  Reset
                </button>
              </div>
              <button
                onClick={() => {
                  setIsFullscreen(false);
                  handleReset();
                }}
                className="p-1.5 sm:p-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                title="Close (ESC)"
                aria-label="Close fullscreen view"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            {/* Hint with Keyboard Instructions */}
            <div className="hidden sm:block absolute top-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg text-sm text-gray-700 dark:text-gray-300 text-center">
              <div>Drag to pan • Arrow keys to navigate • +/- to zoom • 0 to reset</div>
              <div className="text-xs opacity-70 mt-1">Ctrl + Scroll to zoom • ESC to close</div>
            </div>

            {/* Personas Container */}
            <div 
              ref={containerRef}
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
              onMouseDown={handleMouseDown}
              onWheel={handleWheel}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              <div
                ref={contentRef}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  width: `${CONTENT_WIDTH}px`,
                  height: `${CONTENT_HEIGHT}px`,
                  transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                  willChange: 'transform',
                }}
              >
                <Group14 />
              </div>
            </div>

            {/* Instructions */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white text-xs sm:text-sm">
              5 User Personas • {Math.round(scale * 100)}% zoom
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
