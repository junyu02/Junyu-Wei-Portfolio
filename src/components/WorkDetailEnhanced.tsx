import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { LazyImage } from './LazyImage';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageGallery } from './ImageGallery';
import { Tabs } from './ui/tabs';
import { ResearchSection } from './ResearchSection';
import { Footer } from './Footer';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  role?: string;
  year?: string;
  reports?: Array<{
    title: string;
    url: string;
  }>;
  poster?: string;
  overview?: {
    objective: string;
    challenge: string;
    solution: string;
  };
  process?: {
    research: string;
    design: string;
    development: string;
    testing: string;
  };
  designProcess?: Array<{
    title: string;
    description: string;
    images?: string[];
    component?: React.ComponentType;
  }>;
  results?: {
    metrics: Array<{ label: string; value: string }>;
    impact: string;
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
  evaluationOutput?: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  gallery?: string[];
}

interface WorkDetailEnhancedProps {
  project: Project;
  onBack: () => void;
  relatedProjects: Project[];
  onProjectClick: (project: Project) => void;
}

export function WorkDetailEnhanced({ project, onBack, relatedProjects, onProjectClick }: WorkDetailEnhancedProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isTabBarScrolled, setIsTabBarScrolled] = useState(false);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);

  // Reset to overview tab when project changes
  useEffect(() => {
    setActiveTab('overview');
    // Smooth scroll to top when project changes, with delay for animation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }, [project.id]);

  // Detect scroll for tab bar shadow effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsTabBarScrolled(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle tab change and scroll to tab content only if not visible
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    
    // Only scroll if tab content is not currently visible
    setTimeout(() => {
      if (tabContentRef.current) {
        const isMobile = window.innerWidth < 640;
        const navHeight = isMobile ? 56 : 78;
        const tabBarHeight = 57;
        
        // Check if tab content is currently visible in viewport
        const contentRect = tabContentRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isContentVisible = contentRect.top >= (navHeight + tabBarHeight) && 
                                  contentRect.top < viewportHeight * 0.5;
        
        // Only scroll if content is not visible or mostly out of view
        if (!isContentVisible) {
          const contentTop = tabContentRef.current.getBoundingClientRect().top + window.scrollY;
          
          window.scrollTo({
            top: contentTop - navHeight - tabBarHeight,
            behavior: 'smooth'
          });
        }
      }
    }, 50);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Process' },
    // Only show Design Process for Sturdy project (id: 3)
    ...(project.id === 3 && project.designProcess ? [{ id: 'designProcess', label: 'Design Process' }] : []),
    // Only show Evaluation Output for Weee project (id: 1)
    ...(project.id === 1 && project.evaluationOutput ? [{ id: 'evaluation', label: 'Evaluation Output' }] : []),
    { id: 'results', label: 'Results' },
    ...(project.gallery ? [{ id: 'gallery', label: 'Gallery' }] : []),
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-24"
    >
      {/* Back Button */}
      <div className="px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Work</span>
          </motion.button>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="px-6 lg:px-12 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="w-full h-full"
            >
              <LazyImage
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Project Header */}
      <div className="px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mb-4" style={{ fontWeight: 300 }}>
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400">
                {project.category}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 sm:space-y-8"
            >
              {project.role && (
                <div>
                  <h4 className="text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">Role</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {project.role}
                  </p>
                </div>
              )}

              {project.year && (
                <div>
                  <h4 className="text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">Year</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {project.year}
                  </p>
                </div>
              )}

              <div>
                <h4 className="text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm transition-transform"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {project.poster && (
                <div>
                  <h4 className="text-gray-900 dark:text-gray-100 mb-3">Poster</h4>
                  <motion.a
                    href={project.poster}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>View Poster</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
              )}

              {project.reports && project.reports.length > 0 && (
                <div>
                  <h4 className="text-gray-900 dark:text-gray-100 mb-3">Reports</h4>
                  <div className="space-y-3">
                    {project.reports.map((report, index) => (
                      <motion.a
                        key={index}
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <span>{report.title}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tabbed Content */}
      <div className="pb-24">
        {/* Tab Navigation - Sticky */}
        <div 
          ref={tabBarRef}
          className={`sticky top-[56px] sm:top-[78px] z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-shadow duration-300 ${
            isTabBarScrolled ? 'shadow-md' : 'shadow-sm'
          }`}
        >
          <div className="px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="overflow-x-auto"
              >
                <div className="flex gap-4 sm:gap-8 min-w-max">
                  {tabs.map((tab, index) => (
                    <motion.button
                      key={tab.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      onClick={() => handleTabChange(tab.id)}
                      className={`py-4 transition-colors duration-300 relative whitespace-nowrap text-sm sm:text-base ${
                        activeTab === tab.id
                          ? 'text-gray-900 dark:text-gray-100'
                          : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div ref={tabContentRef} className="px-6 lg:px-12 mt-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl text-gray-900 dark:text-gray-100 mb-4" style={{ fontWeight: 300 }}>
                      Project Objective
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.overview?.objective || project.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl text-gray-900 dark:text-gray-100 mb-4" style={{ fontWeight: 300 }}>
                      The Challenge
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.overview?.challenge || 
                        'The primary challenge was to create a solution that balanced user needs with business objectives, while maintaining technical excellence and design integrity.'}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl text-gray-900 dark:text-gray-100 mb-4" style={{ fontWeight: 300 }}>
                    Our Solution
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {project.overview?.solution || 
                      'Through careful research and iterative design, we developed a comprehensive solution that addresses core user needs while exceeding business expectations. The approach focused on simplicity, usability, and scalability.'}
                  </p>

                  <div className="space-y-4">
                    {['User-centered design approach', 'Iterative testing and refinement', 'Scalable architecture', 'Accessible and inclusive'].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-16">
                {/* Show ResearchSection for Digital Bridges project (id: 2) at the top of Process */}
                {project.id === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                  >
                    <ResearchSection />
                  </motion.div>
                )}

                {[
                  {
                    title: 'Research & Discovery',
                    content: project.process?.research,
                    fallback: 'We began with comprehensive user research, conducting interviews and analyzing competitor solutions. This phase helped us understand user pain points and identify opportunities for innovation.',
                  },
                  {
                    title: 'Design & Prototyping',
                    content: project.process?.design,
                    fallback: 'Based on research insights, we created wireframes and high-fidelity prototypes. Multiple iterations ensured the design met user needs while maintaining visual coherence and brand consistency.',
                  },
                  {
                    title: 'Development',
                    content: project.process?.development,
                    fallback: 'The development phase focused on building a robust, scalable solution. We employed modern technologies and best practices to ensure performance, accessibility, and maintainability.',
                  },
                  {
                    title: 'Testing & Launch',
                    content: project.process?.testing,
                    fallback: 'Rigorous testing across devices and user scenarios helped us identify and resolve issues before launch. Post-launch monitoring enabled continuous improvement based on real-world usage data.',
                  },
                ].map((phase, index) => {
                  const phaseContent = phase.content || phase.fallback;
                  const hasImage = typeof phaseContent === 'object' && phaseContent.image;
                  const text = typeof phaseContent === 'object' ? phaseContent.text : phaseContent;
                  const image = typeof phaseContent === 'object' ? phaseContent.image : undefined;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                      {hasImage ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                          <div className="border-l-2 border-blue-600 pl-8">
                            <h3 className="text-2xl text-gray-900 dark:text-gray-100 mb-4" style={{ fontWeight: 300 }}>
                              {phase.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {text}
                            </p>
                          </div>
                          <div className="flex items-center justify-center lg:justify-end">
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full max-w-sm">
                              <ImageWithFallback
                                src={image}
                                alt={`${phase.title} illustration`}
                                className="w-full h-auto object-contain max-h-80"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="border-l-2 border-blue-600 pl-8">
                          <h3 className="text-2xl text-gray-900 dark:text-gray-100 mb-4" style={{ fontWeight: 300 }}>
                            {phase.title}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {text}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-12">
                {/* Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-2xl text-gray-900 dark:text-gray-100 mb-8" style={{ fontWeight: 300 }}>
                    Key Metrics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {(project.results?.metrics || [
                      { label: 'User Engagement', value: '+45%' },
                      { label: 'Task Completion', value: '92%' },
                      { label: 'User Satisfaction', value: '4.8/5' },
                    ]).map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        className="bg-gray-50 dark:bg-gray-800 p-8 text-center"
                      >
                        <div className="text-4xl text-blue-600 mb-2" style={{ fontWeight: 300 }}>
                          {metric.value}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Impact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {project.results?.impactImage ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <h3 className="text-2xl text-gray-900 dark:text-gray-100 mb-4" style={{ fontWeight: 300 }}>
                          Project Impact
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {project.results.impact || 
                            'The project successfully achieved its objectives, delivering measurable improvements in user satisfaction and business metrics. The solution has been well-received by users and stakeholders, demonstrating the value of a thoughtful, user-centered approach to design and development.'}
                        </p>
                      </div>
                      <div className="flex items-start justify-center lg:justify-end">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full max-w-sm">
                          <ImageWithFallback
                            src={project.results.impactImage}
                            alt="Project impact visualization"
                            className="w-full h-auto object-contain max-h-80"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl text-gray-900 dark:text-gray-100 mb-4" style={{ fontWeight: 300 }}>
                        Project Impact
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.results?.impact || 
                          'The project successfully achieved its objectives, delivering measurable improvements in user satisfaction and business metrics. The solution has been well-received by users and stakeholders, demonstrating the value of a thoughtful, user-centered approach to design and development.'}
                      </p>
                    </>
                  )}
                </motion.div>

                {/* Testimonial */}
                {project.results?.testimonial && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-blue-50 dark:bg-blue-900/20 p-8 lg:p-12"
                  >
                    <div className="max-w-3xl">
                      <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6 italic">
                        "{project.results.testimonial.quote}"
                      </p>
                      <div>
                        <div className="text-gray-900 dark:text-gray-100">
                          {project.results.testimonial.author}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">
                          {project.results.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {activeTab === 'designProcess' && project.designProcess && (
              <div className="space-y-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl text-gray-900 dark:text-gray-100 mb-8" style={{ fontWeight: 300 }}>
                    Design Journey
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                    Our design process was iterative and user-centered, evolving through multiple phases of research, synthesis, ideation, and testing. Each stage built upon insights from the previous, ensuring our final solution truly addressed user needs.
                  </p>
                </motion.div>

                {project.designProcess.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="space-y-8"
                  >
                    <div className="border-l-2 border-blue-600 pl-8">
                      <h4 className="text-xl text-gray-900 dark:text-gray-100 mb-4" style={{ fontWeight: 500 }}>
                        {phase.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>

                    {/* Render Component or Images Grid */}
                    {phase.component ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                      >
                        <phase.component />
                      </motion.div>
                    ) : phase.images ? (
                      <div className={`grid gap-6 ${
                        phase.images.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' :
                        phase.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                      }`}>
                        {phase.images.map((image, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 + imgIndex * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 overflow-hidden flex items-center justify-center"
                            whileHover={{ scale: 1.02 }}
                          >
                            <ImageWithFallback
                              src={image}
                              alt={`${phase.title} - Image ${imgIndex + 1}`}
                              className="w-full h-auto object-contain max-h-96"
                            />
                          </motion.div>
                        ))}
                      </div>
                    ) : null}

                    {index < project.designProcess.length - 1 && (
                      <div className="mt-12 border-b border-gray-200 dark:border-gray-800" />
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'evaluation' && project.evaluationOutput && (
              <div className="space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl text-gray-900 dark:text-gray-100 mb-8" style={{ fontWeight: 300 }}>
                    Key Accessibility Findings
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                    Through comprehensive WCAG 2.1 AA evaluation using automated tools and manual testing, we identified three critical accessibility issues that significantly impact user experience for people with disabilities.
                  </p>
                </motion.div>

                {project.evaluationOutput.map((finding, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div className="space-y-4">
                        <h4 className="text-xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                          {finding.title}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {finding.description}
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={finding.image}
                          alt={`${finding.title} evaluation screenshot`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                    {index < project.evaluationOutput.length - 1 && (
                      <div className="mt-12 border-b border-gray-200 dark:border-gray-800" />
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'gallery' && project.gallery && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ImageGallery images={project.gallery} title={project.title} />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 300 }}>
                More Projects
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTimeout(() => onProjectClick(relatedProject), 300);
                  }}
                  className="group cursor-pointer"
                >
                  <motion.div 
                    className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 mb-4 overflow-hidden relative shadow-md group-hover:shadow-2xl transition-shadow duration-300"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <motion.div
                      className="w-full h-full relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <LazyImage
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </motion.div>
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300 pointer-events-none"
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {relatedProject.title}
                  </motion.h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    {relatedProject.category}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </motion.div>
  );
}
