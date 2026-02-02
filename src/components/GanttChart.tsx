import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FileText, Search, Layout, Code, CheckCircle, BarChart3, PenTool } from 'lucide-react';

// Data Structure
interface TaskGroup {
  title: string;
  icon: React.ElementType;
  items: string[];
}

interface Phase {
  id: string;
  name: string;
  startDate: string;
  duration: string; // Visual width approximation
  color: string;
  tasks: TaskGroup[];
}

export function GanttChart() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll into horizontal movement
  // Adjust the "100%" value based on how much content you have vs the viewport width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Mock Data based on the original 13-week Capstone project
  const phases: Phase[] = [
    {
      id: 'p1',
      name: 'INITIATION',
      startDate: 'Jan 29',
      duration: 'w-[280px]',
      color: 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20',
      tasks: [
        {
          title: 'PROJECT CHARTER',
          icon: FileText,
          items: ['Kickoff meeting', 'Define scope', 'Identify stakeholders', 'Project timeline']
        }
      ]
    },
    {
      id: 'p2',
      name: 'DISCOVERY',
      startDate: 'Feb 05',
      duration: 'w-[320px]',
      color: 'border-violet-600 bg-violet-50 dark:bg-violet-900/20',
      tasks: [
        {
          title: 'RESEARCH DESIGN',
          icon: Search,
          items: ['Assessment survey', 'Interview protocols', 'IRB approval', 'Recruitment']
        }
      ]
    },
    {
      id: 'p3',
      name: 'COLLECTION',
      startDate: 'Feb 15',
      duration: 'w-[380px]',
      color: 'border-blue-600 bg-blue-50 dark:bg-blue-900/20',
      tasks: [
        {
          title: 'DATA GATHERING',
          icon: BarChart3,
          items: ['Distribute surveys', 'Alumni interviews', 'Student interviews', 'Data organization']
        },
        {
          title: 'MARKET ANALYSIS',
          icon: Layout,
          items: ['LinkedIn analysis', 'HookedIn review', 'Competitor audit']
        }
      ]
    },
    {
      id: 'p4',
      name: 'SYNTHESIS',
      startDate: 'Mar 18',
      duration: 'w-[320px]',
      color: 'border-cyan-600 bg-cyan-50 dark:bg-cyan-900/20',
      tasks: [
        {
          title: 'ANALYSIS',
          icon: PenTool,
          items: ['Thematic coding', 'Platform synthesis', 'Gap analysis', 'Security assessment']
        }
      ]
    },
    {
      id: 'p5',
      name: 'DELIVERY',
      startDate: 'Apr 08',
      duration: 'w-[340px]',
      color: 'border-emerald-600 bg-emerald-50 dark:bg-emerald-900/20',
      tasks: [
        {
          title: 'FINAL REPORT',
          icon: Code,
          items: ['Executive summary', 'Platform blueprint', 'Recommendations']
        },
        {
          title: 'PRESENTATION',
          icon: CheckCircle,
          items: ['Team review', 'Final submission', 'Capstone presentation']
        }
      ]
    }
  ];

  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

  return (
    <div ref={targetRef} className="relative h-[200vh] md:h-[300vh] bg-white dark:bg-slate-950 -mx-6 lg:-mx-12 px-6 lg:px-12">
      <div className="sticky top-0 h-screen flex items-start pt-32 overflow-hidden">
        
        {/* Static Year Label - Stays fixed while chart moves */}
        <div className="absolute top-32 left-6 lg:left-12 z-20 pointer-events-none">
          <div className="text-6xl md:text-8xl font-bold text-slate-100 dark:text-slate-900/80 tracking-tighter select-none transition-all duration-300">
            2024
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-0 min-w-max relative z-10 pl-4 md:pl-12">
          
          <div className="relative min-w-[1400px] pb-12 pt-24">
            
            {/* 1. Timeline Header */}
            <div className="relative z-10 mb-12 pl-2 border-b border-indigo-200 dark:border-indigo-800">
              
              {/* Month Line */}
              <div className="flex w-full relative pb-2">
                {months.map((month, index) => (
                  <div key={month} className="flex-1 relative min-w-[200px]">
                    {/* Month Label */}
                    <div className="absolute -top-8 left-0 text-xs font-bold text-indigo-800 dark:text-indigo-400 uppercase tracking-wider">
                      {month}
                    </div>
                    {/* Dot on the line */}
                    <div className="absolute -bottom-[5px] left-0 w-2.5 h-2.5 bg-indigo-600 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-slate-950 z-20"></div>
                    
                    {/* Vertical Dashed Grid Line */}
                    <div className="absolute top-0 left-[4px] w-px h-[80vh] border-l border-dashed border-indigo-200 dark:border-slate-800 -z-10 opacity-50"></div>
                  </div>
                ))}
                
                {/* Extra dashed line for the end */}
                <div className="absolute top-0 right-0 w-px h-[80vh] border-l border-dashed border-indigo-200 dark:border-slate-800 -z-10 opacity-50"></div>
              </div>
            </div>

            {/* 2. Waterfall Phases */}
            <div className="relative pt-0 space-y-0 flex">
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative flex-shrink-0">
                  
                  {/* Spacing to create the waterfall step effect */}
                  <div style={{ marginTop: `${index * 60}px` }} className="transition-all duration-300" />

                  {/* Phase Block */}
                  <div className={`${phase.duration} relative mr-4`}>
                    {/* The colored block */}
                    <div className={`
                      border-t-[3px] ${phase.color} 
                      p-6 min-h-[350px]
                      transition-colors duration-300
                      rounded-sm
                    `}>
                      {/* Phase Name */}
                      <h3 className="text-sm font-bold text-indigo-900 dark:text-indigo-100 uppercase tracking-wide mb-6">
                        {phase.name}
                      </h3>

                      {/* Task Groups */}
                      <div className="space-y-8">
                        {phase.tasks.map((task, tIndex) => (
                          <div key={tIndex} className="group">
                            <div className="flex items-start gap-3 mb-2">
                              <div className="mt-0.5 text-indigo-600 dark:text-indigo-400">
                                <task.icon size={18} strokeWidth={2.5} />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase mb-2">
                                  {task.title}
                                </h4>
                                <ul className="space-y-1.5">
                                  {task.items.map((item, i) => (
                                    <li key={i} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
      {/* Scroll hint for mobile */}
      <div className="absolute bottom-24 right-6 md:hidden z-20 animate-pulse pointer-events-none text-slate-400 text-sm flex items-center gap-2">
        <span>Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </div>
  );
}