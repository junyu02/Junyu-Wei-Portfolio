import React from 'react';
import { motion } from 'motion/react';
import { LazyImage } from './figma/LazyImage';

interface WorkCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
  onClick: () => void;
}

export const WorkCard = React.memo(function WorkCard({ title, category, image, index, onClick }: WorkCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px", amount: 0.3 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] 
      }}
      className="group cursor-pointer"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${title} project details`}
    >
      <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-800 border border-transparent dark:border-white/10 aspect-[4/3] mb-4 focus-within:ring-4 focus-within:ring-blue-600 focus-within:ring-offset-4 dark:focus-within:ring-offset-gray-950 rounded-sm transition-all duration-300">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full"
        >
          <LazyImage
            src={image}
            alt={title}
            className="w-full h-full object-cover object-left scale-105"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-blue-600/10 backdrop-blur-[2px] flex items-center justify-center pointer-events-none group-focus:opacity-100"
        >
          <span className="text-gray-900 dark:text-gray-100 px-6 py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
            View Project
          </span>
        </motion.div>
      </div>
      
      <div className="space-y-3 mt-5">
        <h3 className="text-xl md:text-2xl text-gray-900 dark:text-gray-100 font-medium group-hover:text-blue-600 group-focus:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          {category}
        </p>
      </div>
    </motion.article>
  );
});