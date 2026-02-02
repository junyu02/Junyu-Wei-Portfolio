import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DarkModeToggle } from './DarkModeToggle';
import { Linkedin, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';

interface NavigationProps {
  onNavigateHome: () => void;
  onNavigateToSection: (sectionId: string) => void;
  currentView: string;
  isDark: boolean;
  onToggleDark: () => void;
}

export function Navigation({ onNavigateHome, onNavigateToSection, currentView, isDark, onToggleDark }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for enhanced nav background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigateToSection(id);
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 border-gray-200 dark:border-gray-800' 
          : 'bg-white/80 dark:bg-gray-900/80 border-gray-100 dark:border-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={onNavigateHome}
          className="transition-opacity duration-300 hover:opacity-60 font-['Sacramento',_cursive] z-10"
        >
          <h3 className="text-gray-900 dark:text-gray-100 text-2xl sm:text-3xl" style={{ fontSize: 'clamp(24px, 5vw, 30px)' }}>Oscar Wei</h3>
        </button>
        
        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#work"
            onClick={(e) => handleNavClick(e, 'work')}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-300"
          >
            Work
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleNavClick(e, 'gallery')}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-300"
          >
            Gallery
          </a>
          <a
            href="https://docs.google.com/document/d/1NGUhXoC6N5Fe7NZrdWj1tAIguMNQz2uJkMkqhst01C8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-300"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-wei-987584223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
        </div>

        {/* Mobile Menu - Visible only on mobile */}
        <div className="flex md:hidden gap-3 items-center">
          <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[160px] bg-white dark:bg-gray-950 border-l border-gray-100 dark:border-gray-800"
            >
              {/* Accessibility requirements */}
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation menu with links to Work, Gallery, Resume, and LinkedIn
              </SheetDescription>

              {/* Menu Items */}
              <div className="flex flex-col gap-6 pt-20 px-6">
                <AnimatePresence mode="wait">
                  {isOpen && (
                    <>
                      <motion.a
                        key="work-link"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2, delay: 0 }}
                        href="#work"
                        onClick={(e) => handleNavClick(e, 'work')}
                        className="py-3 min-h-[44px] flex items-center text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 active:text-blue-600 dark:active:text-blue-400 transition-colors duration-300"
                      >
                        Work
                      </motion.a>
                      <motion.a
                        key="gallery-link"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2, delay: 0.05 }}
                        href="#gallery"
                        onClick={(e) => handleNavClick(e, 'gallery')}
                        className="py-3 min-h-[44px] flex items-center text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 active:text-blue-600 dark:active:text-blue-400 transition-colors duration-300"
                      >
                        Gallery
                      </motion.a>
                      <motion.a
                        key="resume-link"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        href="https://docs.google.com/document/d/1NGUhXoC6N5Fe7NZrdWj1tAIguMNQz2uJkMkqhst01C8/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="py-3 min-h-[44px] flex items-center text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 active:text-blue-600 dark:active:text-blue-400 transition-colors duration-300"
                      >
                        Resume
                      </motion.a>
                      <motion.a
                        key="linkedin-link"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2, delay: 0.15 }}
                        href="https://www.linkedin.com/in/oscar-wei-987584223/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="py-3 min-h-[44px] flex items-center gap-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 active:text-blue-600 dark:active:text-blue-400 transition-colors duration-300"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </motion.a>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
