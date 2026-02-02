import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import Frame427318909 from '../imports/Frame427318909';

export const UserFlowDisplay = React.memo(function UserFlowDisplay() {
  const [scale, setScale] = useState(0.1);
  // Offset to center the "user flow" starting point (move left and up)
  const [position, setPosition] = useState({ x: -150, y: -300 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 1));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.05, 0.05));
  };

  const handleReset = () => {
    setScale(0.1);
    setPosition({ x: -150, y: -300 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const PAN_STEP = 50;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          setPosition(prev => ({ ...prev, x: prev.x + PAN_STEP }));
          break;
        case 'ArrowRight':
          e.preventDefault();
          setPosition(prev => ({ ...prev, x: prev.x - PAN_STEP }));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setPosition(prev => ({ ...prev, y: prev.y + PAN_STEP }));
          break;
        case 'ArrowDown':
          e.preventDefault();
          setPosition(prev => ({ ...prev, y: prev.y - PAN_STEP }));
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
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = -e.deltaY * 0.001;
      setScale(prev => Math.max(0.05, Math.min(1, prev + delta)));
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg overflow-hidden shadow-lg">
      {/* Controls */}
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-1 sm:p-2 flex items-center gap-0.5 sm:gap-1">
        <button
          onClick={handleZoomOut}
          className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          title="Zoom Out (-)"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 dark:text-gray-300" />
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
          <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 dark:text-gray-300" />
        </button>
        <button
          onClick={handleReset}
          className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
          title="Reset View"
        >
          <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {/* Label */}
      <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-8 z-10">
        <p className="text-sm sm:text-base text-gray-900 dark:text-gray-100">User flow</p>
      </div>

      {/* Hint - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-md z-10">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Drag to pan • Use controls to zoom • Ctrl + Scroll
        </p>
      </div>

      {/* Diagram Container */}
      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden min-h-[350px] sm:h-[500px]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'transform 0.2s ease-out',
              willChange: 'transform',
            }}
          >
            <Frame427318909 />
          </div>
        </div>
      </div>
    </div>
  );
});
