import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { WorkCard } from './WorkCard';
import { LazyImage } from './LazyImage';
import { Footer } from './Footer';
import imgImg1559 from "figma:asset/d6338aac287111eb64da2029ef56ec64989bb9ec.png";
import imgImg1557 from "figma:asset/bfac1d95ccb57ddb1e98ff24b953062f33decb7d.png";
import imgImg1558 from "figma:asset/6ea9db5f93a3336af480d5f443464a368a924f29.png";
import imgImg2475 from "figma:asset/e6d3e99c4f4915b42c281192cab5fe1466252f3c.png";
import imgImg1556 from "figma:asset/169fb9e7533361c1d00ce34629f0039c89d5f4ed.png";
import imgImg0412 from "figma:asset/db48c31112027759586cae04f236a19e1ba80801.png";
import img908815E77Ac54235B0Dc6Dcc0778C96E from "figma:asset/0e2a16ad32f9f3fba0d619314502b384e7bbc778.png";
import imgImg0873 from "figma:asset/d69ce3134c29bf3144ca3a43464f241864efb6d7.png";
import imgImg0905 from "figma:asset/4abcdd36e88da37e92e91d3b33b63ee93abb0672.png";
import imgImg2990 from "figma:asset/849e2c29f1995de7b13e23831c2018207752f219.png";
import imgImg6953 from "figma:asset/32e734a5d5b5238905db5b84794e3614d9082804.png";
import imgImg1553 from "figma:asset/c9bc8c44b3070d01d6d3e134291dad7f4bebf679.png";
import imgImg1554 from "figma:asset/f59b61d1d2a5887204a5d2790ad933802be2ea9f.png";
import imgImg1555 from "figma:asset/d0fa00148a38e6dd185a361f2a40ca9a23c3d1d2.png";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
}

interface HomePageProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  onViewAllClick: () => void;
}

const GALLERY_IMAGES = [
  imgImg0412,
  imgImg6953,
  imgImg0873,
  imgImg1555,
  imgImg1553,
  imgImg1554,
  imgImg0905,
  imgImg2990,
  img908815E77Ac54235B0Dc6Dcc0778C96E,
  imgImg1558,
  imgImg2475,
  imgImg1556,
  imgImg1557,
  imgImg1559,
];

export const HomePage = React.memo(function HomePage({ projects, onProjectClick, onViewAllClick }: HomePageProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Double the images for seamless loop
  const displayImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  useEffect(() => {
    const scrollContainer = galleryRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let lastTime = 0;
    // 0.5 pixels per frame at 60fps = 30px per second (gentle scroll)
    const speed = 0.5; 

    const scroll = (currentTime: number) => {
      // Throttle to maintain consistent 60fps
      if (currentTime - lastTime >= 16) { // ~60fps
        if (!isPaused && scrollContainer) {
          // If we've scrolled past the first set of images, reset to 0
          // We use half of scrollWidth because we duplicated the content
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += speed;
          }
        }
        lastTime = currentTime;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Return early if no projects
  if (!projects || projects.length === 0) {
    return (
      <div className="min-h-screen pt-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center py-20">
          <p className="text-gray-500 dark:text-gray-400">No projects available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 sm:pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl"
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-sm text-amber-600 dark:text-amber-400 tracking-widest uppercase mb-2 font-medium">
                Hello there! my name is
              </p>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl text-gray-900 dark:text-gray-100 mb-8 leading-tight uppercase"
              style={{ fontWeight: 800 }}
            >
              Oscar Wei
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg sm:text-xl text-gray-900 dark:text-gray-100 leading-relaxed max-w-2xl mb-6"
              style={{ fontWeight: 500 }}
            >
              I'm a UX/UI designer, researcher & product creator.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              I'm passionate about creating designs that communicate with people and generate meaningful feedback. My design process focuses on solving real problems and creating value by deeply understanding user contexts and needs in each unique situation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Work Grid Section */}
      <section id="work" className="py-12 sm:py-24 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-16 flex flex-wrap items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-4xl text-gray-900 dark:text-gray-100 mb-4 uppercase" style={{ fontWeight: 800 }}>
                Project & Work
              </h2>
              <div className="w-16 h-1 bg-blue-600"></div>
            </div>
            
            <button
              onClick={onViewAllClick}
              className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="font-medium text-sm tracking-wide uppercase">View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {/* Custom Grid Layout: Digital Bridges (Featured), Weee!, CarryOn */}
            {(() => {
              const digitalBridges = projects.find(p => p.id === 2);
              const weee = projects.find(p => p.id === 1);
              const carryon = projects.find(p => p.id === 5);
              const displayProjects = [digitalBridges, weee, carryon].filter((p): p is Project => !!p);

              return displayProjects.map((project, index) => (
                <div key={project.id} className={index === 0 ? "md:col-span-2" : "md:col-span-1"}>
                  <WorkCard
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    index={index}
                    onClick={() => onProjectClick(project)}
                  />
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mb-6 uppercase" style={{ fontWeight: 800 }}>
              Gallery
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              While studying for self-improvement, I didn't leave behind my hobby - photography, I'm a landscape hobby photographer and I travel around the world to take photos when I have the time!
            </p>
          </motion.div>

          {/* Gallery Grid - Horizontal Scrollable */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group/gallery"
          >
            {/* Scroll hint gradient - right side */}
            <div className="absolute right-0 top-0 bottom-4 w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none z-10 opacity-100 group-hover/gallery:opacity-0 transition-opacity duration-300" />
            
            {/* Scroll hint text */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm pointer-events-none z-20 opacity-100 group-hover/gallery:opacity-0 transition-opacity duration-300 flex items-center gap-2"
            >
              {/* Note: Updated text to reflect interaction */}
              <span className="animate-pulse">Hold to Pause</span>
            </motion.div>

            {/* Scrollable Container */}
            <div 
              ref={galleryRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide min-w-full cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {displayImages.map((image, index) => (
                <motion.div
                  key={`${index}-${image}`} // Use index combined with image src for unique key in duplicate array
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 0.5, delay: (index % GALLERY_IMAGES.length) * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-[280px] sm:h-[400px] w-[200px] sm:w-[300px] flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800 transition-transform duration-300"
                >
                  <LazyImage
                    src={image}
                    alt={`Gallery image - Landscape photography by Oscar Wei`}
                    className="h-full w-full"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
});