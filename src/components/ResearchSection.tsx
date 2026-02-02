import svgPaths from "../imports/svg-gzw6103e1q";
import { Linkedin, BarChart3, Video, Star } from "lucide-react";
import { GanttChart } from "./GanttChart";

// Research method images
const imgAlumniInfo = "https://images.unsplash.com/photo-1740479048951-e108521f0004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5rZWRpbiUyMHByb2Zlc3Npb25hbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzYwODA2MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgDataCollection = "https://images.unsplash.com/photo-1680602239834-092e38d8bad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXklMjBkYXRhJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NjA4MDYxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgVideoInterview = "https://images.unsplash.com/photo-1615983276036-8dd65aa005a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbGwlMjBpbnRlcnZpZXd8ZW58MXx8fHwxNzYwNjk2MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16" aria-hidden="true">
      <g>
        <path d={svgPaths.p1deb9100} fill="white" />
        <path d={svgPaths.p1deb9100} fill="#0A66C2" />
        <path d={svgPaths.p19c68740} fill="white" />
      </g>
    </svg>
  );
}

function MentoringIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={svgPaths.p3fc2b680}
        stroke="currentColor"
        className="text-black dark:text-white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ResearchSection() {
  return (
    <div className="bg-white dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Gantt Chart Section */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 text-black dark:text-white tracking-tight">
            Project Timeline
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-3xl leading-relaxed">
            This comprehensive 13-week research project spanned from January 29, 2024 to April 29, 2024. The timeline below illustrates the seven core phases with detailed task breakdowns, showing how stakeholder interviews, platform evaluations, and strategic analysis came together to inform our LinkedIn enhancement recommendation.
          </p>
          <GanttChart />
        </div>

        {/* Research Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-black dark:text-white tracking-tight">
          Research
        </h2>

        {/* Main Content - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Introduction & Research Methods */}
          <div className="space-y-8">
            {/* Introduction Text */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                <span>
                  Convincing busy alumni and students to adopt another networking platform turned out to be tougher than expected. Who would've guessed, right?{" "}
                </span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Our early interviews with 8 key stakeholders and surveys of 420 grad students
                </span>
                <span>
                  {" "}revealed that while they saw some potential in HookedIn, most were perfectly happy sticking with LinkedIn and dreaded the thought of managing one more profile.
                </span>
              </p>
            </div>

            {/* Critical Insights Card */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
              <h3 className="text-sm text-green-500 tracking-wide">Critical insights</h3>
              
              <div className="space-y-4">
                {/* Insight 1 */}
                <div className="flex gap-3 pb-4 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex-shrink-0 mt-1">
                    <MentoringIcon />
                  </div>
                  <p className="text-sm text-black dark:text-white">
                    Alumni show a strong preference for mentorship roles
                  </p>
                </div>

                {/* Insight 2 - LinkedIn only */}
                <div className="flex gap-3 pb-4 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex-shrink-0 mt-1">
                    <LinkedInIcon />
                  </div>
                  <p className="text-sm text-black dark:text-white">
                    87% used LinkedIn; {"<"}34% saw need for HookedIn.
                  </p>
                </div>

                {/* Insight 3 - Star icon */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1" aria-hidden="true">
                    <Star className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <p className="text-sm text-black dark:text-white">
                    Users wanted enhanced LinkedIn features—not a new platform.
                  </p>
                </div>
              </div>
            </div>


          </div>

          {/* Right Column - Pain Points */}
          <div className="space-y-8">
            {/* Common Pain Points Card */}
            <div className="space-y-6">
              <h3 className="text-sm text-green-500 tracking-wide">Common painpoints</h3>

              {/* Pain Point 1 */}
              <div className="pb-6 border-b border-gray-300 dark:border-gray-700">
                <h4 className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                  Platform Fatigue
                </h4>
                <p className="text-sm text-black dark:text-white">
                  Users already juggle multiple platforms. Adding HookedIn felt like a digital chore, risking low adoption
                </p>
              </div>

              {/* Pain Point 2 */}
              <div className="pb-6 border-b border-gray-300 dark:border-gray-700">
                <h4 className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                  Fragmented Communities
                </h4>
                <p className="text-sm text-black dark:text-white">
                  Forcing users to switch between LinkedIn (professional) and HookedIn (informal) risked fragmenting conversations and reducing network density.
                </p>
              </div>

              {/* Pain Point 3 */}
              <div className="pb-6">
                <h4 className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                  Alumni Engagement Preferences
                </h4>
                <p className="text-sm text-black dark:text-white">
                  Alumni show a strong preference for mentorship roles, with over 80% expressing interest in participating in formal mentorship programs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Methods - Unified Responsive */}
        <div className="grid grid-cols-3 gap-4 lg:gap-8 mt-8 lg:mt-16 max-w-2xl">
          {/* Alumni Information */}
          <div className="flex flex-col items-center space-y-3 lg:space-y-4">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden">
                <img
                  src={imgAlumniInfo}
                  alt="Alumni information via LinkedIn"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-blue-600 rounded-full p-1.5 lg:p-2" aria-hidden="true">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-center text-black dark:text-white">
              Alumni Information
            </p>
          </div>

          {/* Data Collection */}
          <div className="flex flex-col items-center space-y-3 lg:space-y-4">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden">
                <img
                  src={imgDataCollection}
                  alt="Data collection tool - Qualtrics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-green-600 rounded-full p-1.5 lg:p-2" aria-hidden="true">
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-center text-black dark:text-white">
              Data collection
            </p>
          </div>

          {/* Video Interview */}
          <div className="flex flex-col items-center space-y-3 lg:space-y-4">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-black dark:border-white">
                <img
                  src={imgVideoInterview}
                  alt="Needs interview via Zoom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-1.5 lg:p-2" aria-hidden="true">
                <Video className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-center text-black dark:text-white">
              Needs interview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}