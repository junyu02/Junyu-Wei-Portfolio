import React from 'react';
import { motion } from 'motion/react';
import { WorkCard } from './WorkCard';
import { Footer } from './Footer';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
}

interface AllProjectsPageProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  onBack: () => void;
}

export const AllProjectsPage = React.memo(function AllProjectsPage({ projects, onProjectClick, onBack }: AllProjectsPageProps) {
  // Return early if no projects
  if (!projects || projects.length === 0) {
    return (
      <div className="min-h-screen pt-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center py-20">
          <p className="text-gray-500 dark:text-gray-400">No projects available at the moment.</p>
          <button 
            onClick={onBack}
            className="mt-6 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <button 
              onClick={onBack}
              className="group inline-flex items-center gap-2 mb-8 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              <span className="text-lg">←</span>
              <span className="font-medium">Back to Home</span>
            </button>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-gray-100 mb-6 leading-tight uppercase"
              style={{ fontWeight: 800 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              All Projects
            </motion.h1>
            
            <div className="w-16 h-1 bg-blue-600 mb-12"></div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <WorkCard
                key={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                index={index}
                onClick={() => onProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
});
