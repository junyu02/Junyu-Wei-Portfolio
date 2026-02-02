import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { WorkDetailEnhanced } from './components/WorkDetailEnhanced';
import { PersonasDisplay } from './components/PersonasDisplay';
import { UserFlowDisplay } from './components/UserFlowDisplay';
import { GetMobileContent } from './components/GetMobileContent';
import { SturdyPrototypesDisplay } from './components/SturdyPrototypesDisplay';
import { GanttChart } from './components/GanttChart';
import { ScrollToTop } from './components/ScrollToTop';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AllProjectsPage } from './components/AllProjectsPage';
import { CarryOnCaseStudy } from './components/CarryOnCaseStudy';
import imgEvaluation1 from 'figma:asset/fa6c66ab676b155ad57170d27c2edea547b255eb.png';
import imgEvaluation2 from 'figma:asset/d7c8892f4b77ddaf8be57d69069a2d600e74d540.png';
import imgEvaluation3 from 'figma:asset/bfaffe303515884306335ac0b75b12c4fd3a3d41.png';
import imgDBHero from 'figma:asset/65f629a227ef53f74416f8b4aca2904c5bb61c29.png';
import imgDBLogo from 'figma:asset/e2987f836c1b17809d057b6e2df02c0a3cc7997f.png';
import imgDBResearch1 from 'figma:asset/ce62a033fdf8a77a051da891963036e3498b2965.png';
import imgDBResearch2 from 'figma:asset/df829bc4e8ddc1077ad895c9e7ef270260f7f227.png';
import imgDBResearch3 from 'figma:asset/b1fec428418485f9235799bdf2a1301c9499dac3.png';
import imgDBImplementation from 'figma:asset/a4ff194aa303dbd58cea2d794a481b9535c1942c.png';
import imgDBConnection from 'figma:asset/956bdbee41749b5d1346e888c0570ed8f733160c.png';

// Get Mobile images
import imgGetMobile1 from 'figma:asset/948c69b9ad0cd504148ae7b3379e3bf7e6f03cd4.png';
import imgGetMobile2 from 'figma:asset/d4234d1d13b0623c65e5777cdc1d69c7afb6e4ef.png';
import imgGetMobile3 from 'figma:asset/8637adc5ecc5890b4e983ca27d1713f9e12efbd1.png';
import imgGetMobile4 from 'figma:asset/7dc7107420f5bd9c1405d175e191a43c6225a0f9.png';
import imgGetMobile5 from 'figma:asset/f06b438e8da3c7ba6ff08eb2a0da9e0c74a907b4.png';
import imgGetMobile6 from 'figma:asset/0d56bcf41ac7d6e979ff2dc41f04f66bfd676098.png';

// Sturdy (FitTrack) images
import imgSturdyHero from 'figma:asset/0f4bd2903b31ce983bd9993a627d2bcfc0be7ba6.png';
import imgSturdy1 from 'figma:asset/47d2bfa874d0ac43b5b4226c97a1b51bf1a0c91e.png';
// Replaced with clearer Unsplash image for better quality
// import imgSturdy2 from 'figma:asset/5554cfadbdefa3cd9cae09f80ca523cf7bb7385f.png';
import imgSturdy3 from 'figma:asset/d0f848d3c7279df34407440572ebcf7b94852ab4.png';
import imgSturdy4 from 'figma:asset/e395f698dbf55edb0a68a6007258558ee0d7702b.png';
import imgSturdy5 from 'figma:asset/aed938dce494d0d39c7c476422f82ab1b7f1d6a1.png';
import imgSturdy6 from 'figma:asset/d8f0dcd14753eafa17b9986e402c5f1f1ae334a6.png';
import imgSturdy7 from 'figma:asset/2a96a001f7a3028884187dc8b3cd8d22bc96c89e.png';
import imgSturdy8 from 'figma:asset/99be61c3e5f51da2b52597272eca07a5d04513e9.png';
import imgSturdy9 from 'figma:asset/aab2c643d38acbc397f1f20768b4d2f21268a3ca.png';
import imgSturdy10 from 'figma:asset/93d62f6fd7e756fdc961b1ed7389f387e7ef6912.png';
import imgSturdyPrototype from 'figma:asset/f2766758538d9d288a2d9861d595edb7b60cadb9.png';

// CarryOn images
import imgCarryOnHero from 'figma:asset/8ae7f2d4d02137ba623ac691e53d9db9e5d89526.png';

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
    research: string | { text: string; image?: string };
    design: string | { text: string; image?: string };
    development: string | { text: string; image?: string };
    testing: string | { text: string; image?: string };
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
    impactImage?: string;
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

// Enhanced portfolio projects with comprehensive details
const projects: Project[] = [
  {
    id: 1,
    title: 'Weee! Asian Groceries Accessibility Evaluation',
    category: 'Accessibility Evaluation',
    image: 'https://images.unsplash.com/photo-1714386819907-ce134e3bb0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzYwNzk3NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Test WCAG 2.1 AA compliance of Weee! Asian Groceries e-commerce platform using web-automated tools and manual testing to ensure ethical accessibility for users with disabilities',
    tech: ['Accessibility', 'WCAG 2.1', 'A11Y Testing', 'WAVE Tool'],
    link: 'https://example.com',
    role: 'Accessibility led',
    year: '2023',
    reports: [
      {
        title: 'Accessibility Evaluation Report',
        url: 'https://docs.google.com/document/d/1bB5PtzxC1lPsXaYeXVvNhPcasg63FjWITCSjT6uaW50/edit?usp=sharing',
      },
      {
        title: 'EM Report',
        url: 'https://drive.google.com/file/d/16XH0Ugz2buvDxFUnH5TU2C-1yDbS9JAC/view?usp=sharing',
      },
    ],
    overview: {
      objective: 'Conduct comprehensive accessibility evaluation of the Weee! Asian Groceries website to ensure WCAG 2.1 AA compliance and improve usability for all users, particularly those with disabilities.',
      challenge: 'The Weee! website needed to be evaluated for accessibility compliance to ensure all users, including those with disabilities, can effectively use the platform. The site needed to meet WCAG 2.1 AA standards while maintaining its core functionality and user experience.',
      solution: 'Performed detailed accessibility audit using automated tools (WAVE, browser extensions) and manual testing with assistive technologies. Evaluated three key reasons for choosing A11Y: changing the accessibility means keeping the vision single of real users, users are humans we are all human and we should not judge accessibility choices as it is more valuable adding it.',
    },
    process: {
      research: 'Analyzed the Weee! website comprehensively using multiple accessibility testing tools including WAVE. Conducted manual testing with keyboard navigation and screen readers to identify barriers faced by users with disabilities.',
      design: 'Documented findings with detailed screenshots showing specific WCAG violations. Created a comprehensive evaluation output including heatmaps and annotated images showing accessibility issues across key pages.',
      development: 'Provided specific recommendations for each identified issue, including code examples and implementation guidelines. Focused on keyboard navigation improvements, semantic HTML structure, ARIA labels, and color contrast fixes.',
      testing: 'Validated recommendations through A/B testing and user feedback. Measured improvements through metrics tracking keyboard navigation efficiency and user satisfaction scores.',
    },
    results: {
      metrics: [
        { label: 'Issue Resolution', value: '40%' },
        { label: 'Keyboard Navigation', value: '30%' },
        { label: 'User Satisfaction', value: '31%' },
      ],
      impact: 'The evaluation resulted in a 40% reduction in accessibility-related user feedback through successful issue identification and resolution. Keyboard navigation efficiency improved by 30%, and user satisfaction with accessibility features increased by 31% based on A/B testing data. The comprehensive report enabled Weee! to prioritize accessibility improvements and work toward full WCAG 2.1 AA compliance.',
    },
    evaluationOutput: [
      {
        title: 'Keyboard Control',
        description: 'Identified critical keyboard navigation issues affecting users who rely on keyboard-only interaction. Issues included missing focus indicators, improper tab order, and inaccessible interactive elements.',
        image: imgEvaluation1,
      },
      {
        title: 'Image Alternative Text',
        description: 'Discovered multiple images lacking proper alternative text, preventing screen reader users from understanding visual content. This affected product images, promotional banners, and navigation icons.',
        image: imgEvaluation2,
      },
      {
        title: 'Very Low Contrast',
        description: 'Found significant color contrast issues that made text difficult to read for users with visual impairments. Several text elements failed to meet WCAG 2.1 AA contrast ratio requirements of 4.5:1.',
        image: imgEvaluation3,
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1714386819907-ce134e3bb0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzYwNzk3NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      imgEvaluation1,
      imgEvaluation2,
      imgEvaluation3,
    ],
  },
  {
    id: 2,
    title: 'Digital Bridges: iSchool Engagement Platform Assessment',
    category: 'UX Research & Strategy',
    image: imgDBConnection,
    description: 'Strategic platform evaluation determining whether to build a new student-alumni engagement platform or enhance LinkedIn. Based on stakeholder research with 8 key stakeholders and 420 graduate students, recommended LinkedIn enhancement strategy achieving 368% higher engagement than alternatives.',
    tech: ['UX Research', 'Strategic Planning', 'LinkedIn Integration', 'Stakeholder Research', 'Platform Evaluation'],
    link: 'https://example.com',
    role: 'UX Researcher & Strategist',
    year: '2024',
    poster: 'https://drive.google.com/file/d/13sXho01jV989galGQjvpcRKvcGeohdys/view?usp=sharing',
    overview: {
      objective: 'Assess whether to build a new engagement platform (HookedIn) or enhance existing tools like LinkedIn to better serve student-alumni connections at the iSchool, with focus on alumni-led career events, mentorship programs, and professional development opportunities.',
      challenge: 'Convincing busy alumni and students to adopt another networking platform proved challenging. Early interviews with 8 key stakeholders and surveys of 420 graduate students revealed that while they saw potential in HookedIn, most were perfectly happy sticking with LinkedIn and dreaded managing one more profile. The iSchool faced platform fatigue, fragmented communities, and needed a strategic decision on resource allocation.',
      solution: 'Based on comprehensive stakeholder research and platform evaluation results, recommended enhancing LinkedIn with alumni-led career events rather than building HookedIn from scratch. This strategic approach leverages LinkedIn\'s existing network effects where 87% of students already actively use it, and 368% more students are already connected with alumni compared to any proposed new platform.',
    },
    process: {
      research: 'Conducted comprehensive stakeholder interviews with students, alumni, and faculty, plus surveys of 420 graduate students. Analyzed existing engagement patterns discovering critical insights: 87% used LinkedIn while less than 34% saw need for HookedIn; users wanted enhanced LinkedIn features—not a new platform; alumni show strong preference for mentorship roles with over 80% expressing interest in formal mentorship programs.',
      design: 'Created detailed three-phase implementation roadmap with measurable milestones. Short-term goals (0-6 months): Set up specialized LinkedIn groups and initiate pilot mentorship program linking students with alumni. Medium-term goals (6-12 months): Evaluate effectiveness through user engagement statistics, expand mentorship program based on pilot success. Long-term goals (1-3 years): Position LinkedIn as central hub for professional development with regular content updates and sustained engagement programs.',
      development: 'Developed strategic recommendations showing 43% of students would engage if improved platform existed, validating need for enhanced engagement tools. Identified common pain points: platform fatigue (users juggle multiple platforms, adding HookedIn felt like digital chore), fragmented communities (forcing users to switch between LinkedIn for professional and HookedIn for informal risked fragmenting conversations), and alumni engagement preferences for structured mentorship over casual networking.',
      testing: 'Validated recommendations through stakeholder workshops, data analysis, and comparative platform evaluation. Measured potential impact through engagement statistics showing 368% increase in connected alumni-student pairs on LinkedIn compared to proposed alternatives. Research confirmed that enhancing existing LinkedIn presence would achieve higher ROI and faster implementation than building new platform from scratch.',
    },
    designProcess: [
      {
        title: 'Project Roadmap',
        description: 'A comprehensive 13-week timeline outlining the project phases from initiation to final delivery. Scroll down to explore the timeline.',
        component: GanttChart,
      },
    ],
    results: {
      metrics: [
        { label: 'LinkedIn Advantage', value: '368%' },
        { label: 'Student Interest', value: '43%' },
        { label: 'LinkedIn Usage', value: '87%' },
      ],
      impact: 'The strategic recommendation to enhance LinkedIn rather than build HookedIn provided a clear, cost-effective path forward that addressed real user needs. Research revealed 368% more students already connected with alumni on LinkedIn, making it the natural platform to build upon. With 87% of students already using LinkedIn actively and 43% indicating they would engage with improved platform features, the LinkedIn enhancement strategy offers maximum engagement potential with minimum resource investment, enabling faster implementation and sustainable long-term growth while avoiding platform fatigue and community fragmentation.',
      testimonial: {
        quote: 'Connection is everything. This research helped us understand where our students and alumni are already connecting, making our investment decision clear and strategic.',
        author: 'iSchool Leadership',
        role: 'Strategic Planning Team',
      },
    },
    evaluationOutput: [
      {
        title: 'Problem: Platform Adoption Barriers',
        description: 'Early stakeholder interviews revealed three critical barriers: Platform Fatigue (users already juggle multiple platforms, adding HookedIn felt like a digital chore risking low adoption); Fragmented Communities (forcing users to switch between LinkedIn for professional and HookedIn for informal interactions risked fragmenting conversations and reducing network density); Alumni Engagement Preferences (alumni show strong preference for mentorship roles with over 80% expressing interest in participating in formal mentorship programs).',
        image: imgDBImplementation,
      },
      {
        title: 'Goal: Strategic Platform Decision',
        description: 'Determine the most effective and resource-efficient approach to improve student-alumni engagement. Key objectives included assessing whether to build HookedIn from scratch or enhance existing LinkedIn presence, understanding where students and alumni are already connecting, identifying specific features and programs that would drive engagement, and creating an implementation roadmap that maximizes ROI while minimizing development costs and user friction.',
        image: imgDBConnection,
      },
      {
        title: 'Research: Data-Driven Insights',
        description: 'Comprehensive research with 8 key stakeholders and 420 graduate student surveys revealed critical insights: 87% used LinkedIn while less than 34% saw need for HookedIn; users wanted enhanced LinkedIn features—not a new platform; alumni show strong preference for structured mentorship over casual networking. These findings, combined with engagement data showing 368% more alumni-student connections on LinkedIn, clearly indicated that LinkedIn enhancement would achieve better outcomes than building a new platform.',
        image: imgDBResearch1,
      },
    ],
    gallery: [
      imgDBConnection,
      imgDBLogo,
      imgDBImplementation,
      imgDBResearch1,
      imgDBResearch2,
      imgDBResearch3,
    ],
  },
  {
    id: 3,
    title: 'Sturdy 🏋️ - Social Fitness Platform',
    category: 'Mobile App Design & Prototyping',
    image: 'https://images.unsplash.com/photo-1628935072378-59fcb9a83aaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMG1vYmlsZXxlbnwxfHx8fDE3NjA4MDE3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A comprehensive mobile fitness platform that motivates users through social accountability, personalized workout tracking, and gamified challenges. Designed to transform individual fitness goals into shared community achievements.',
    tech: ['Figma', 'Mobile Design', 'User Research', 'Prototyping', 'UI/UX Design'],
    link: 'https://example.com',
    role: 'Lead Product Designer',
    year: '2024',
    overview: {
      objective: 'Design a mobile fitness application that seamlessly blends individual workout tracking with social accountability features, creating a motivating and supportive environment where users can achieve their fitness goals together.',
      challenge: 'Traditional fitness apps either focus purely on individual tracking (boring and lonely) or pure social features (overwhelming and competitive). Users struggle to maintain workout consistency due to lack of motivation and accountability. The challenge was to create a balanced experience that motivates without intimidating, and connects without overwhelming.',
      solution: 'Sturdy combines personalized workout plans with community-driven motivation through smart design. Features include: daily habit tracking with visual progress, group workout challenges with friends, achievement badges and streaks, supportive community feed (no judgment zones), and flexible privacy controls. The design emphasizes progress over perfection, making fitness accessible and enjoyable for all fitness levels.',
    },
    process: {
      research: 'Conducted comprehensive user research with 30+ fitness enthusiasts ranging from beginners to advanced athletes. Through interviews and surveys, discovered key insights: 73% of users abandon fitness apps within 3 months due to lack of motivation; users wanted accountability partners but feared judgment; visual progress tracking significantly increased engagement; gamification elements (badges, streaks) motivated consistent use but needed to feel achievable, not intimidating.',
      design: 'Created complete user flows from onboarding through daily usage patterns. Designed intuitive screens for: personalized onboarding (fitness level, goals, preferences), daily habit tracker with satisfying check-off interactions, group challenge creation and participation, achievement showcase and milestone celebrations, supportive community feed with encouragement focus, and comprehensive profile with progress history. Used warm, encouraging color palette with energetic accent colors. Emphasized clear visual hierarchy and thumb-friendly mobile interactions.',
      development: 'Built high-fidelity interactive prototypes in Figma showcasing all key user journeys. Special attention to micro-interactions: satisfying animation when completing workouts, celebratory confetti for milestone achievements, smooth transitions between screens, haptic feedback indicators for important actions. Created comprehensive design system with reusable components, ensuring consistency across all screens. Documented interaction patterns and design specifications for development handoff.',
      testing: 'Conducted three rounds of usability testing with 18 participants across different fitness levels. Testing revealed: users loved the habit tracker\'s visual satisfaction; group challenges needed clearer join/leave flows; achievement celebrations needed to feel earned, not participation trophies; privacy controls needed to be more accessible. Iterated designs based on feedback, improving task completion rates from 76% to 94% and user satisfaction scores from 3.8/5 to 4.6/5.',
    },
    designProcess: [
      {
        title: 'Affinity Diagram',
        description: 'After conducting 30+ user interviews with fitness enthusiasts ranging from beginners to advanced athletes, we organized insights using affinity diagramming. Affinity diagramming involves organizing 500 post-it notes into themes using four levels of labels to reveal insights from participant data. This method structures qualitative observations into a visual hierarchy, from specific comments to overarching issues, guiding design decisions with user-centric patterns. Key themes emerged: motivation gaps in solo workouts, fear of judgment in social fitness apps, desire for flexible accountability, and importance of celebrating small wins.',
        images: ['https://images.unsplash.com/photo-1735639013995-086e648eaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGlja3klMjBub3RlcyUyMHJlc2VhcmNoJTIwd29ya3Nob3B8ZW58MXx8fHwxNzYwODA4NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'],
      },
      {
        title: 'Personas',
        description: 'A persona is an archetype of a user that helps designers and developers empathize by understanding their users\' business and personal contexts. According to our Affinity Diagram, we set up 5 different personas, each of which corresponds to a different target group, allowing us to better design through the mind of the user. Each persona card below includes demographic information, skill levels, motivations, preferences, and detailed bios that informed our design decisions.',
        component: PersonasDisplay,
      },
      {
        title: 'User Flow',
        description: 'User flow meticulously charts a user\'s journey through a social fitness application, starting with initial engagement features such as group formation, search, and membership functionalities. It expands into personalized workout scheduling, tracking, and analysis, integrating community interaction features like posting, direct messaging, and event scheduling. This flow underscores the application\'s dual focus on individual fitness goals and community building, highlighting the seamless integration of social networking with health and wellness tracking to foster a supportive user environment.',
        component: UserFlowDisplay,
      },
      {
        title: 'Lo-Fi to Hi-Fi Prototype Evolution',
        description: 'Prior to advancing to the high-fidelity prototype, a low-fidelity version was executed to engage our target users in the design process. This approach allowed for direct feedback and necessary modifications, ensuring the prototype\'s evolution was closely aligned with user preferences and requirements. The high-fidelity prototype involves meticulous design and integration of user feedback from earlier stages, offering a realistic user interaction experience with detailed visuals, complete user interface, and interactive elements. Explore the interactive prototypes below showcasing the complete workout app experience from home feed to post creation.',
        component: SturdyPrototypesDisplay,
      },
    ],
    results: {
      metrics: [
        { label: 'Usability Score', value: '4.6/5' },
        { label: 'Task Completion', value: '94%' },
        { label: 'User Engagement', value: '+58%' },
      ],
      impact: 'The Sturdy design successfully addresses fitness motivation challenges through thoughtful social features and visual design. Usability testing showed 94% task completion rate and 4.6/5 user satisfaction score. The habit tracking feature received universal praise, with users describing it as "satisfyingly simple" and "actually motivating." The balanced approach to social features—encouraging without pressureresonated with users across all fitness levels. The design prototype was used to secure seed funding and is currently in development with a targeted launch for Q3 2024.',
      testimonial: {
        quote: 'This is the first fitness app design that actually makes me want to work out. The social features don\'t feel intimidating—they feel supportive.',
        author: 'Beta Tester',
        role: 'Fitness Enthusiast',
      },
    },
    gallery: [
      imgSturdyHero,
      imgSturdy1,
      'https://images.unsplash.com/photo-1735639013995-086e648eaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGlja3klMjBub3RlcyUyMHJlc2VhcmNoJTIwd29ya3Nob3B8ZW58MXx8fHwxNzYwODA4NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      imgSturdy3,
      imgSturdy4,
      imgSturdy5,
      imgSturdy6,
      imgSturdy7,
      imgSturdy8,
      imgSturdy9,
      imgSturdy10,
      imgSturdyPrototype,
    ],
  },
  {
    id: 4,
    title: 'Get Mobile - User Research',
    category: 'UX Research & Usability Testing',
    image: 'https://images.unsplash.com/photo-1758445043309-ce680c326a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBtb2JpbGV8ZW58MXx8fHwxNzYwODAxNzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Comprehensive usability research of UT Austin\'s on-campus food ordering app. Through testing with 50 students, identified critical UX issues and provided prioritized recommendations to compete with Uber Eats and DoorDash.',
    tech: ['User Research', 'Usability Testing', 'Zoom', 'Qualtrics', 'UX Analysis'],
    link: 'https://example.com',
    role: 'UX Researcher',
    year: '2022',
    overview: {
      objective: 'Identify current page design issues and functional flaws in the Get Mobile app, thereby expanding the user base and applicability while improving the user experience. Determine which aspects of the order process users struggle with and provide actionable suggestions for improvement.',
      challenge: 'Get Mobile is concentrated on university use to check account balances (Bevo Bucks and Dine-In Dollars from meal plans) and limited online ordering for pick-up on UT Austin campus. The app currently only works with a few stores on campus. Users experienced confusion with login screens, multiple password settings, missing key information (restaurant hours, food pictures), difficulties changing addresses, and insufficient restaurant options. With an average satisfaction score of 2.5/5, all 50 participants preferred competitors (Uber Eats, Yelp, DoorDash), risking complete market loss despite campus-exclusive advantages.',
      solution: 'Conducted comprehensive usability research with 50 participants through screener surveys and remote Zoom testing with screen sharing. Documented all pain points through real-time observation of Get Mobile usage scenarios. Prioritized findings into three severity tiers (Critical 5/5, Important 3/5, Nice-to-have 2/5) based on user impact and adoption barriers. Provided actionable recommendations to improve order process, fix interaction bugs, and enhance competitive positioning against major food delivery platforms.',
    },
    process: {
      research: {
        text: 'Recruited 50 participants via Qualtrics screener survey targeting UT Austin students who use campus dining accounts. Conducted remote usability testing via Zoom with participants sharing their screens to observe real-time Get Mobile usage. Research goals included: identifying design issues and functional flaws, understanding which order process aspects users struggle with, and comparing user expectations from other food delivery apps. Key findings: When using Get Mobile, users compare it to familiar apps like Uber Eats; participants tried to follow logic from other food ordering apps; in usability study, even unfamiliar users could eventually place orders, but faced significant friction.',
        image: imgGetMobile1,
      },
      design: {
        text: 'Research Method: Screener (50 participants selected via Qualtrics); Usability Test (conducted via Zoom); Shared Screen (participants shared screens for real-time observation of GET mobile usage scenarios). Documented critical interaction problems: participants report they CANNOT access home screen after entering password; problems with user interaction (login, access to secondary pages); participants CANNOT select on-campus buildings; APP malfunctioned during use; participants felt interface was missing key information (restaurant hours, food pictures); when browsing restaurant list, participants could not see opening hours; users confused by multi-step ordering logic.',
        image: imgGetMobile2,
      },
      development: {
        text: 'Analyzed all 50 sessions to identify recurring patterns and severity. Created detailed bug reports for functional issues (app crashing, login failures). Developed UX improvement recommendations: simplify login flow (SSO integration), add visual menus with food photos (critical for conversion), display real-time hours on list view, fix address selection logic, and improve error messaging. Validated these recommendations against competitor analysis to ensure they would bring Get Mobile to industry standards.',
        image: imgGetMobile3,
      },
      testing: {
        text: 'Synthesized findings into a comprehensive research report presented to stakeholders. Key metrics revealed: 42% of users failed first login attempt; 68% struggled to find restaurant hours; average time to place order was 3x longer than competitors. Proposed solutions were estimated to improve satisfaction scores from 2.5 to 4.0+ and reduce order abandonment by 60%.',
        image: imgGetMobile4,
      },
    },
    designProcess: [
      {
        title: 'Usability Issues Analysis',
        description: 'Detailed breakdown of the most critical usability issues identified during testing, categorized by severity and impact on user experience.',
        images: [imgGetMobile5, imgGetMobile6],
      },
      {
        title: 'Design Recommendations',
        description: 'Proposed design solutions and interface improvements to address identified pain points and align the app with modern food delivery standards.',
        component: GetMobileContent,
      }
    ],
    results: {
      metrics: [
        { label: 'Participants', value: '50' },
        { label: 'Pain Points', value: '15+' },
        { label: 'Satisfaction', value: '2.5/5' },
      ],
      impact: 'The comprehensive usability study revealed critical design flaws causing user churn. The research report provided UT Austin dining services with a prioritized roadmap for app improvements. By identifying that 100% of participants preferred competitors due to basic usability issues rather than food quality, the study shifted stakeholder focus from adding more restaurants to fixing core app functionality. The recommendations formed the basis for the subsequent app redesign, targeting a 60% reduction in order abandonment.',
    },
    gallery: [
      imgGetMobile1,
      imgGetMobile2,
      imgGetMobile3,
      imgGetMobile4,
      imgGetMobile5,
      imgGetMobile6,
    ],
  },
  {
    id: 5,
    title: 'CarryOn: Circular Carrier System',
    category: 'Service Design & Hardware Prototyping',
    image: imgCarryOnHero,
    description: 'Reducing plastic waste through a connected rental ecosystem for urban grocers. A "Phygital" solution combining smart hardware with a seamless rental app.',
    tech: ['Service Design', 'Physical Prototyping', 'IoT Concept', 'React', 'Framer Motion'],
    link: '#',
    role: 'Product Designer (Led Physical Prototyping)',
    year: '2023',
    overview: {
      objective: 'Reduce single-use plastic waste in urban grocery environments by shifting from an ownership model to an access model.',
      challenge: 'Despite bag charges, households accumulate average 54 reusable bags. Shoppers forget bags and buy new ones out of guilt/necessity.',
      solution: 'A connected "Rent-a-Bike" system for bags. Tap to rent, shop, and return for sanitization.',
    },
    // Minimal mock data for other required fields as the custom component handles the display
    process: {
      research: 'Auto-ethnography',
      design: 'Wizard of Oz Prototyping',
      development: 'React Frontend',
      testing: 'In-context user testing',
    },
  },
];

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'detail' | 'all-projects'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [targetSection, setTargetSection] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const prevViewRef = useRef<'home' | 'detail' | 'all-projects'>('home');

  // Handle dark mode
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleDark = useCallback(() => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  }, []);

  // Scroll to target section or top on view change
  useEffect(() => {
    const prevView = prevViewRef.current;
    
    if (currentView === 'home' && targetSection) {
      // Scrolling to a specific section - mark as handled immediately
      prevViewRef.current = 'home'; // Prevent scroll-to-top when clearing targetSection
      
      const timer = setTimeout(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const element = document.getElementById(targetSection);
            if (element) {
              element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
              });
            }
            setTargetSection(null);
          });
        });
      }, 600);
      return () => clearTimeout(timer);
    } else if (currentView === 'home' && prevView === 'detail' && !targetSection) {
      // Only scroll to top when returning from detail to home WITHOUT target section
      window.scrollTo({ top: 0, behavior: 'smooth' });
      prevViewRef.current = 'home';
    } else if (currentView === 'all-projects') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      prevViewRef.current = currentView;
    } else {
      // Update previous view for other cases
      prevViewRef.current = currentView;
    }
  }, [currentView, targetSection]);

  // Memoize event handlers to prevent unnecessary re-renders
  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
    setCurrentView('detail');
  }, []);

  const handleNavigateHome = useCallback(() => {
    setCurrentView('home');
    setSelectedProject(null);
  }, []);

  const handleNavigateToAllProjects = useCallback(() => {
    setCurrentView('all-projects');
    setSelectedProject(null);
  }, []);

  // Navigate to a specific section (work or gallery)
  const handleNavigateToSection = useCallback((sectionId: string) => {
    if (currentView === 'detail' || currentView === 'all-projects') {
      // If on detail or all-projects page, navigate home first and mark target section
      setTargetSection(sectionId);
      setCurrentView('home');
      setSelectedProject(null);
    } else {
      // If already on home, just scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentView]);

  // Get related projects (all projects except current one)
  const getRelatedProjects = (currentId: number) => {
    return projects.filter(p => p.id !== currentId).slice(0, 3);
  };

  return (
    <ErrorBoundary>
      <div className="size-full min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Navigation 
          onNavigateHome={handleNavigateHome}
          onNavigateToSection={handleNavigateToSection}
          currentView={currentView}
          isDark={isDark}
          onToggleDark={handleToggleDark}
        />

        <ErrorBoundary>
          <AnimatePresence mode="wait">
            {currentView === 'home' ? (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <HomePage 
                  projects={projects}
                  onProjectClick={handleProjectClick}
                  onViewAllClick={handleNavigateToAllProjects}
                />
              </motion.div>
            ) : currentView === 'all-projects' ? (
              <motion.div
                key="all-projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <AllProjectsPage
                  projects={projects}
                  onProjectClick={handleProjectClick}
                  onBack={handleNavigateHome}
                />
              </motion.div>
            ) : selectedProject ? (
              selectedProject.id === 5 ? (
                <CarryOnCaseStudy 
                  onBack={handleNavigateHome}
                  allProjects={projects}
                  onProjectClick={handleProjectClick}
                />
              ) : (
                <motion.div
                  key={`detail-${selectedProject.id}`}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <WorkDetailEnhanced
                    project={selectedProject}
                    onBack={handleNavigateHome}
                    relatedProjects={getRelatedProjects(selectedProject.id)}
                    onProjectClick={handleProjectClick}
                  />
                </motion.div>
              )
            ) : null}
          </AnimatePresence>
        </ErrorBoundary>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}