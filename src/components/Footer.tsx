import React from 'react';

export const Footer = React.memo(function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-6 lg:px-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-500 dark:text-gray-400">
            © Oscar Wei 2025
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Oscarwei223@gmail.com
          </p>
        </div>
        
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/oscar-wei-987584223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:text-blue-600 dark:focus-visible:text-blue-400 transition-colors duration-300"
            aria-label="Visit Oscar Wei's LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="https://docs.google.com/document/d/1NGUhXoC6N5Fe7NZrdWj1tAIguMNQz2uJkMkqhst01C8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:text-blue-600 dark:focus-visible:text-blue-400 transition-colors duration-300"
            aria-label="View Oscar Wei's resume (opens in Google Docs)"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
});
