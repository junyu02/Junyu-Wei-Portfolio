import React, { useState } from 'react';
import { ImageWithFallback } from './ImageWithFallback';
import { ImageSkeleton } from '../LoadingSpinner';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
}

/**
 * LazyImage component with native browser lazy loading and loading skeleton
 * Provides optimal performance by deferring offscreen images until needed
 */
export const LazyImage = React.memo(function LazyImage({ 
  src, 
  alt, 
  className = '',
  onLoad 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <ImageSkeleton className="absolute inset-0" />
      )}
      <ImageWithFallback
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
      />
    </div>
  );
});
