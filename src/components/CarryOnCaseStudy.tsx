import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingBag, RefreshCw, Smartphone, CreditCard, ChevronRight } from 'lucide-react';
import { LazyImage } from './LazyImage';
import { Footer } from './Footer';
import { InteractiveKiosk } from './InteractiveKiosk';
import UxPersona from '../imports/UxPersona';
import Group from '../imports/Group2';
import imgCarryOnHero from 'figma:asset/8ae7f2d4d02137ba623ac691e53d9db9e5d89526.png';
import imgBagPile from 'figma:asset/b1f3e1ac868b491e022af439b726a41725b2da6d.png';
import imgWizardPrototype1 from 'figma:asset/8a31e8ab7a22d4b3ad22fe02cd115574c4c55714.png';
import imgWizardPrototype2 from 'figma:asset/131268b1d7eddcea337f90827dd4e66c686dad1b.png';
import imgNudgeNotification from 'figma:asset/53506d6051d06d142daa131049078bc03ed3d0ba.png';
import imgDigitalInteraction from 'figma:asset/d7b8c9ea2d982efe7423585894a0a54c69a06d5d.png';
import imgWalletPass from 'figma:asset/7b1a5ce4ffdc3eefd5dafeeebdfb7b13d688d769.png';
import imgReminderNotification from 'figma:asset/22e4797a87ca3629ce5c9868cd5eefd6a8ade2b9.png';
import imgUserPersona from 'figma:asset/fbeaa719e5574c412a711fa6440502f5b49d5835.png';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface CarryOnCaseStudyProps {
  onBack: () => void;
  allProjects?: Project[];
  onProjectClick?: (project: Project) => void;
}

export const CarryOnCaseStudy: React.FC<CarryOnCaseStudyProps> = ({ onBack, allProjects, onProjectClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-950 pt-20"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-32">
        {/* 1. Hero Section */}
        <section className="py-20 md:py-32 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              <RefreshCw className="w-4 h-4" />
              Circular Economy
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 tracking-tight leading-tight mb-6">
              CarryOn: Circular <br />Carrier System
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Reducing plastic waste through a connected rental ecosystem for urban grocers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 dark:border-gray-800 pt-8"
          >
            <div>
              <h3 className="text-sm text-gray-500 mb-2">Role</h3>
              <p className="font-medium text-gray-900 dark:text-gray-100">Product Designer</p>
              <p className="text-sm text-gray-500">Physical Prototyping & Logic</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 mb-2">Timeline</h3>
              <p className="font-medium text-gray-900 dark:text-gray-100">10 Weeks</p>
              <p className="text-sm text-gray-500">Academic Group Project</p>
            </div>
            <div className="col-span-2">
              <h3 className="text-sm text-gray-500 mb-2">Key Tech</h3>
              <div className="flex flex-wrap gap-2">
                {['Physical Prototyping', 'Wizard of Oz Testing', 'iPad/Figma Integration'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="rounded-2xl overflow-hidden aspect-video shadow-2xl mt-12"
          >
            <LazyImage 
              src={imgCarryOnHero} 
              alt="CarryOn concept visualization" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* 2. The Context */}
        <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">The "Bag for Life" Paradox</h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Policies like the 5p bag charge were meant to help, but they backfired. The average UK household now accumulates reusable bags, creating more plastic waste than before.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800/30">
                <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">The User Struggle</h4>
                <p className="text-orange-800 dark:text-orange-300 text-base">
                  Urban shoppers often shop spontaneously. They forget their bags, buy new ones out of necessity, and feel "Environmental Guilt."
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center p-12 rounded-3xl overflow-hidden">
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${imgBagPile}')` }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60" />
            
            {/* Content */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 text-9xl font-bold text-blue-600 tracking-tighter"
            >
              54
            </motion.div>
            <p className="relative z-10 text-xl font-medium text-white mt-4 text-center">
              Reusable bags per<br/>UK household
            </p>
          </div>
        </section>

        {/* 3. Research & Insight */}
        <section className="py-20 border-t border-gray-100 dark:border-gray-800">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Research & Insight</h2>
          </div>
          
          {/* 第一行：Methodology (全宽) */}
          <div className="space-y-8 mb-12">
            <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
              Methodology
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Auto-ethnography</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We tracked our own shopping behaviors to map the emotional journey of "forgetting a bag." This first-person research revealed micro-moments of frustration that quantitative surveys would miss.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Interview</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We conducted semi-structured interviews with 12 participants (5 female, 7 male), ranging in age from 23 to 38 years old. Interviewees are shoppers who conduct in-store grocery shopping in an urban city context.
                </p>
              </div>
            </div>
          </div>

          {/* 第二行：User Persona (全宽) */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">User Persona</h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-4">
              <p>
                Considering our interview findings and predominant pain points, we established user characteristics to further refine our user group:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Working or Studying Professionals:</strong> Shoppers aged 21 to 65 years old, with a regular work or study schedule throughout the week.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Urban Transport Users:</strong> Shoppers either walk, take public transport or cycle within urban spaces; between homes, work/study locations and grocery stores.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Hybrid Shopping Decisions:</strong> Shoppers conduct a mix of planned and more spontaneous grocery shopping throughout the week.</span>
                </li>
              </ul>
              <p className="pt-2">
                We went on to develop a persona of our typical user. Our persona is Alex, a 30-year-old finance professional living in London:
              </p>
            </div>
            
            {/* Persona Image */}
            <div className="mt-6 w-full max-w-2xl mx-auto">
              <img 
                src={imgUserPersona}
                alt="User Persona - Alex, 30-year-old finance professional with shopping habits and pain points"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* 第三行：范式转换（全宽） */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
              Design Principle
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">The Paradigm Shift</h3>
            <div className="flex items-center gap-6 max-w-4xl">
              <div className="flex-1 p-6 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                <p className="text-sm text-red-600 dark:text-red-400 font-semibold mb-2">❌ Current System</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">Ownership</p>
                <p className="text-gray-500 mt-1">Buying bags repeatedly</p>
              </div>
              <ArrowLeft className="rotate-180 w-8 h-8 text-gray-400 flex-shrink-0" />
              <div className="flex-1 p-6 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30">
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold mb-2">✅ Sustainable System</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">Access</p>
                <p className="text-gray-500 mt-1">Renting bags on-demand</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Solution - 三行布局 */}
        <section className="py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">The Connected Ecosystem</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A "Rent-a-Bike" model for grocery bags, seamlessly integrated into the store's existing membership system.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* 第一行：Card 1 (Access) + Card 2 (The Circular Carrier) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Access - Kiosk 入口 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group min-h-[400px]"
              >
                <div className="absolute inset-0">
                  <LazyImage 
                    src="https://images.unsplash.com/photo-1650741564556-951824eced0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncm9jZXJ5JTIwc3RvcmUlMjBlbnRyYW5jZXxlbnwxfHx8fDE3NjY0MTU5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Entrance Kiosk"
                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="relative z-10 text-white mt-auto">
                  <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">01. Access</h3>
                  <p className="text-gray-200 text-sm">Tap your membership card at the entrance kiosk to unlock a rental bag instantly.</p>
                </div>
              </motion.div>

              {/* Card 2: The Circular Carrier */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[400px]"
              >
                <div className="space-y-4 flex-1">
                  <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">02. The Circular Carrier</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Pay a £2 deposit at pickup, reuse for 30 days, return for full refund. RFID auto-syncs with your loyalty card.
                  </p>
                  <ul className="grid grid-cols-1 gap-2 pt-2">
                    {['£2 Deposit → Refund', 'RFID Auto-Sync', '30-Day Rental', 'Sanitized & Reused'].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 rounded-xl overflow-hidden shadow-lg">
                  <LazyImage 
                    src="https://images.unsplash.com/photo-1758210480590-b46dee0a2a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXVzYWJsZSUyMGdyb2NlcnklMjBiYWd8ZW58MXx8fHwxNzY2NDE1OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Smart Bag Design"
                    className="w-full h-32 object-cover" 
                  />
                </div>
              </motion.div>
            </div>

            {/* 第二行：03. Digital Interaction (Reminders + Wallet 在同一个框内) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 relative overflow-hidden min-h-[400px]"
            >
              {/* 大标题 */}
              <div className="mb-8">
                <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">03. Digital Interaction</h3>
              </div>

              {/* 两列内容 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 左列: Reminders */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Reminders</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Friendly reminders 3 days before your rental period ends, so you never miss the return window.
                  </p>
                  {/* Reminder Notification Image */}
                  <div className="mt-6 w-full max-w-md mx-auto">
                    <img 
                      src={imgReminderNotification}
                      alt="Reminder notification showing return deadline"
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                </div>

                {/* 右列: Seamless Wallet Integration */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Seamless Wallet Integration</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Your rental pass syncs directly to Apple Wallet. Track your rental period, view deposit status, and get one-tap access to return locations—all without opening a separate app.
                  </p>
                  {/* Wallet Pass Image */}
                  <div className="mt-6 w-full max-w-md mx-auto">
                    <img 
                      src={imgWalletPass}
                      alt="Apple Wallet Pass showing rental period countdown"
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 第三行：04. Close the Loop (全宽) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900 text-white rounded-2xl p-8 pb-8 flex flex-col relative overflow-hidden group"
            >
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
               <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
                 <div className="space-y-4">
                    <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                      <RefreshCw className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">04. Close the Loop</h3>
                    <p className="text-gray-300 max-w-lg">
                      Return your used bag at any kiosk. The system sanitizes it for the next user and refunds your deposit instantly—completing the circular journey.
                    </p>
                    <p className="text-sm text-gray-400 mt-4">
                      👉 Try the interactive prototype →
                    </p>
                 </div>
                 <div className="w-full">
                    <InteractiveKiosk />
                 </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* 5. Wizard of Oz Prototyping */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-16 my-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                Technical Highlight
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                "Wizard of Oz" Prototyping
              </h2>
              <div className="prose dark:prose-invert">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  We couldn't build a real vending machine, so we built a Low-Fidelity Cardboard Prototype that simulated the physical form factor.
                </p>
                <div className="my-6 pl-4 border-l-4 border-blue-500 space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">The Logic</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    To validate the physical-digital ecosystem without complex sensor integration, I utilized a 'Wizard of Oz' prototyping technique. I embedded an iPad within the cardboard housing to display the high-fidelity Figma wireframes I designed. During testing, I manually orchestrated the screen transitions in real-time to sync with user actions (e.g., triggering a 'Dispensed' state immediately after a bag was pulled), simulating a seamless, sensor-driven experience.
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Why this matters:</strong> This allowed us to test the physical ergonomics and digital feedback simultaneously without writing complex backend code.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <img 
                  src={imgWizardPrototype1} 
                  alt="Wizard of Oz prototyping testing sessions with iPad interface showing dispense and return flows" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <img 
                  src={imgWizardPrototype2} 
                  alt="Physical cardboard kiosk prototype with iPad interface and bag dispenser compartments" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Iteration & Validation */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">Iteration & Validation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
               <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">The Pivot</h3>
               <div className="space-y-6">
                 <div className="flex gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                    <div className="text-red-500 font-bold">Round 1</div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">Checkout Dispenser</div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Result: Failure. Users were too stressed packing goods to rent bags.</p>
                    </div>
                 </div>
                 <div className="flex items-center justify-center">
                   <ArrowLeft className="rotate-180 w-6 h-6 text-gray-400" />
                 </div>
                 <div className="flex gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                    <div className="text-green-600 font-bold">Round 2</div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">Entrance Dispenser</div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Result: Success. It aligned with the mental model of "picking up a basket."</p>
                    </div>
                 </div>
               </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-8 opacity-90">Final Metrics</h3>
              <div className="space-y-8">
                <div>
                   <div className="flex items-end gap-2 mb-2">
                     <span className="text-5xl font-bold text-blue-400">4.5</span>
                     <span className="text-xl text-gray-400 mb-2">/ 5</span>
                   </div>
                   <p className="text-gray-300">User Satisfaction Score (Ease of Use)</p>
                </div>
                <div className="w-full h-px bg-gray-700" />
                <div>
                   <div className="flex items-end gap-2 mb-2">
                     <span className="text-5xl font-bold text-green-400">100%</span>
                   </div>
                   <p className="text-gray-300">Task completion rate on rental flows after layout change.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* More Projects Section */}
      {allProjects && allProjects.length > 0 && onProjectClick && (
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
              {allProjects
                .filter(p => p.id !== 5) // Exclude current project (CarryOn)
                .slice(0, 3) // Show only 3 related projects
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setTimeout(() => onProjectClick(project), 300);
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
                          src={project.image}
                          alt={project.title}
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
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                      {project.category}
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
};