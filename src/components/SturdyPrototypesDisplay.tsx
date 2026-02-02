import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Page1 from '../imports/Page1';
import Page2 from '../imports/Page2';

const prototypes = [
  { 
    id: 1, 
    component: Page1,
    label: 'Home - Featured Workouts',
  },
  { 
    id: 2, 
    component: Page2,
    label: 'New Post - Photo Selection',
  },
];

const HapticCompletionDemo = () => {
  const [isCompleted, setIsCompleted] = React.useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#121212] rounded-xl border border-gray-800">
      <div className="relative">
        <motion.button
          onClick={() => setIsCompleted(!isCompleted)}
          whileTap={{ scale: 0.9 }}
          className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
            isCompleted 
              ? 'bg-blue-500 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]' 
              : 'border-gray-600 hover:border-blue-400'
          }`}
          aria-label={isCompleted ? "Mark set as incomplete" : "Mark set as complete"}
        >
          <motion.div
            initial={false}
            animate={{ 
              scale: isCompleted ? 1 : 0,
              opacity: isCompleted ? 1 : 0 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Check className="w-8 h-8 text-white stroke-[3]" />
          </motion.div>
        </motion.button>
      </div>
      <p className="mt-6 text-gray-400 text-sm font-medium">Tap to simulate set completion</p>
    </div>
  );
};

export const SturdyPrototypesDisplay = React.memo(function SturdyPrototypesDisplay() {
  return (
    <div className="w-full space-y-16">
      
      {/* Design System Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Color Palette */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700/50"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Context-Aware Dark Mode</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Designed specifically for the gym environment—often characterized by dim lighting and high-contrast downlights—the interface utilizes a "Deep Charcoal" (#121212) background rather than pure black to reduce eye strain and OLED smearing. The primary action color, "Electric Blue," was calibrated to meet <span className="font-semibold text-blue-600 dark:text-blue-400">WCAG AA Compliance (4.5:1 ratio)</span> against the dark surface.
          </p>
          <div className="flex gap-4">
            <div className="flex-1 h-24 rounded-lg bg-[#121212] shadow-inner flex items-center justify-center border border-gray-700">
              <span className="text-gray-500 text-xs">#121212</span>
            </div>
            <div className="flex-1 h-24 rounded-lg bg-blue-500 shadow-lg shadow-blue-500/20 flex items-center justify-center">
              <span className="text-white text-xs">Electric Blue</span>
            </div>
          </div>
        </motion.div>

        {/* Typography Scale */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700/50"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">At-a-Glance Readability</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Fitness apps require "0-click information" while the user is physically exerted. I established a Type Scale that prioritizes numerals and status indicators over decorative headers. By using <strong>Inter</strong> with variable weights, I created a hierarchy where "Active Set" data uses a 32px Bold weight for immediate legibility at arm's length.
          </p>
          <div className="space-y-4 font-sans bg-white dark:bg-[#121212] p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-baseline justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">12</span>
              <span className="text-sm text-gray-500">Reps (Bold 32px)</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Bench Press</span>
              <span className="text-sm text-gray-500">Header (SemiBold 20px)</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-base text-gray-600 dark:text-gray-400">Previous: 100lbs</span>
              <span className="text-sm text-gray-500">Meta (Regular 16px)</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Micro-interaction Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <div className="bg-gray-900 rounded-2xl p-1 shadow-2xl overflow-hidden max-w-sm mx-auto">
            <HapticCompletionDemo />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Micro-interaction: The Haptic Set Completion</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">System Status Visibility:</strong> In a fitness app, the most frequent action is logging a set. This micro-interaction provides immediate, satisfying visual confirmation (gamification) that the data was recorded.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">Error Prevention:</strong> The distinct "bounce" animation confirms the touch target was hit successfully, which is crucial when users have shaky hands from lifting weights. It bridges the gap between the physical effort and digital tracking.
          </p>
        </motion.div>
      </div>

      {/* Prototype Display */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">High-Fidelity Prototypes</h3>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          {prototypes.map((prototype, index) => {
            const Component = prototype.component;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-4 flex flex-col items-center"
              >
                {/* Fixed-size container for Figma component (390x844 phone, scaled responsively) */}
                <div className="w-[156px] sm:w-[195px] h-[338px] sm:h-[422px] overflow-hidden rounded-lg mb-3 shadow-lg">
                  {/* Optimized: merged nested transforms (0.4 * 1.25 = 0.5) for better performance */}
                  <div className="w-[390px] h-[844px] origin-top-left" style={{ 
                    transform: 'scale(0.4)',
                    willChange: 'transform'
                  }}>
                    <div className="hidden sm:block" style={{ transform: 'scale(1.25)' }}>
                      <Component />
                    </div>
                    <div className="block sm:hidden">
                      <Component />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-sm sm:text-base text-gray-900 dark:text-gray-100">
                    {prototype.label}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
