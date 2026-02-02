import imgRectangle from "figma:asset/948c69b9ad0cd504148ae7b3379e3bf7e6f03cd4.png";
import imgRectangle1 from "figma:asset/d4234d1d13b0623c65e5777cdc1d69c7afb6e4ef.png";
import imgRectangle2 from "figma:asset/8637adc5ecc5890b4e983ca27d1713f9e12efbd1.png";
import imgRectangle3 from "figma:asset/7dc7107420f5bd9c1405d175e191a43c6225a0f9.png";
import imgRectangle4 from "figma:asset/f06b438e8da3c7ba6ff08eb2a0da9e0c74a907b4.png";
import imgRectangle5 from "figma:asset/0d56bcf41ac7d6e979ff2dc41f04f66bfd676098.png";

export function GetMobileContent() {
  return (
    <div className="relative w-full bg-section-beige dark:bg-section-beige-dark -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-[1400px] mx-auto space-y-24">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[56px] leading-tight sm:leading-[73px] font-['Caudex'] text-black dark:text-gray-100">
              Get Mobile<br />User Research
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-black dark:text-gray-300">
              Identify current page design issues and functional flaws, thereby expanding the user base and applicability, and also improving the user experience.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-[180px] sm:w-[243px] h-[310px] sm:h-[418px] rounded-lg overflow-hidden shadow-lg">
              <img
                src={imgRectangle}
                alt="Get Mobile App Screenshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* What is Get Mobile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="flex justify-center lg:justify-start">
            <div className="w-[240px] sm:w-[313px] h-[240px] sm:h-[313px] rounded-lg overflow-hidden shadow-lg">
              <img
                src={imgRectangle1}
                alt="Get Mobile Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl font-['Caudex'] text-black dark:text-gray-100">
              What is Get Mobile?
            </h2>
            <div className="space-y-3 sm:space-y-4 text-black dark:text-gray-300">
              <p className="text-sm sm:text-base leading-relaxed">
                Get Mobile is concentrated on university use to check account balances and few online ordering for pick up.
              </p>
              <p className="text-[16.819px] leading-[32px]">
                For example, in UT Austin, the accounts include Bevo Bucks and Dine-In Dollars, where this money is grouped with school meal plans. And currently, the app only works with a few stores on campus.
              </p>
            </div>
          </div>
        </div>

        {/* Research Goals & Methods Section */}
        <div className="space-y-12">
          <h2 className="text-[20px] leading-[27px] font-['Caudex'] text-black dark:text-gray-100">
            Research Goals & Methods
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {/* Research Goals */}
              <div className="space-y-4">
                <h3 className="text-[17.725px] leading-[32px] text-black dark:text-gray-100">
                  Research Goals
                </h3>
                <div className="space-y-4 pl-6">
                  <p className="text-[16.613px] leading-[32px] text-black dark:text-gray-300">
                    I ​identify current page design issues and functional flaws, expanding the user base and applicability and improving the user experience.
                  </p>
                  <p className="text-[16.677px] leading-[32px] text-black dark:text-gray-300">
                    Identify which aspects of the order process, if any, users have struggled with
                  </p>
                  <p className="text-[17.157px] leading-[32px] text-black dark:text-gray-300">
                    Provide suggestions to improve the order process.
                  </p>
                </div>
              </div>

              {/* Research Method */}
              <div className="space-y-4">
                <h3 className="text-[17.27px] leading-[32px] text-black dark:text-gray-100">
                  Mixed-Methods Recruitment Funnel
                </h3>
                <p className="text-[16.64px] leading-[32px] text-black dark:text-gray-300">
                  To maximize research efficiency and ensuring data relevance, I employed a quantitative-to-qualitative recruitment funnel rather than random sampling.
                </p>
                <div className="space-y-6 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="space-y-1">
                    <p className="font-semibold text-[16.816px] leading-[24px] text-black dark:text-gray-100">
                      1. Quantitative Survey (N=50)
                    </p>
                    <p className="text-[15.5px] leading-[26px] text-gray-600 dark:text-gray-400">
                      Broad behavioral mapping & pain point identification across the student body.
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="font-semibold text-[16.816px] leading-[24px] text-black dark:text-gray-100">
                      2. Screening Criteria (Filter)
                    </p>
                    <p className="text-[15.5px] leading-[26px] text-gray-600 dark:text-gray-400">
                      Selection based on behavioral filters: High frequency usage (3+ weekly) & Competitor familiarity.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="font-semibold text-[16.816px] leading-[24px] text-black dark:text-gray-100">
                      3. Usability Testing (N=5)
                    </p>
                    <p className="text-[15.5px] leading-[26px] text-gray-600 dark:text-gray-400">
                      Deep dives via 60-min Zoom sessions w/ Think-Aloud Protocol focusing on power users.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-[223px] h-[482px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={imgRectangle2}
                  alt="Research Methods Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overall Findings Section */}
        <div className="space-y-12">
          <h2 className="text-[20px] leading-[27px] font-['Caudex'] text-black dark:text-gray-100">
            Overall Findings
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center lg:justify-start">
              <div className="w-[240px] h-[509px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={imgRectangle3}
                  alt="Overall Findings Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[16.954px] leading-[32px] text-black dark:text-gray-300">
                Participants tried to follow the logic they used with other food order apps when using Get Mobile for the first time
              </p>
              <p className="text-[16.831px] leading-[32px] text-black dark:text-gray-300">
                Participants report that they CANNOT access the home screen after entering their password
              </p>
              <p className="text-[16.841px] leading-[32px] text-black dark:text-gray-300">
                Problems with user interaction (login, access to secondary pages)
              </p>
              <p className="text-[17.07px] leading-[32px] text-black dark:text-gray-300">
                Participants CAN NOT select on-campus buildings
              </p>
              <p className="text-[16.85px] leading-[32px] text-black dark:text-gray-300">
                APP malfunctioned while in use
              </p>
              <p className="text-[16.991px] leading-[32px] text-black dark:text-gray-300">
                Participants said that NOT being able to see pictures of food made them more hesitant to place orders.
              </p>
              <p className="text-[17.211px] leading-[32px] text-black dark:text-gray-300">
                Missing picture information
              </p>
              <p className="text-[16.878px] leading-[32px] text-black dark:text-gray-300">
                When browsing the restaurant list, participants responded that they could not see the opening hours from the restaurant list.
              </p>
              <p className="text-[16.94px] leading-[32px] text-black dark:text-gray-300">
                When using the app, users are confused by multiple password recreation and DUO authentication.
              </p>
              <p className="text-[16.554px] leading-[32px] font-extrabold text-[#ff9900]">
                Since the entire study of Overall Findings was too long, I consolidated it into a Google Doc. Click to learn more to get a detailed introduction.
              </p>
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-block bg-[#3bac2f] hover:bg-[#32991f] text-white px-6 py-2 rounded-[5px] text-[16px] font-['Fraunces'] border-[3px] border-[#323232] transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="space-y-12">
          <h2 className="text-[20px] leading-[27px] font-['Caudex'] text-black dark:text-gray-100">
            Summary
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {/* First Part */}
              <div className="space-y-4">
                <p className="text-[16.862px] leading-[32px] text-black dark:text-gray-300">
                  The evaluation of Get Mobile's order process included interviews and usability testing. During this time, we learned the following:
                </p>
                <div className="space-y-4 pl-6">
                  <p className="text-[17.072px] leading-[32px] text-black dark:text-gray-300">
                    When using Get Mobile, users will compare Get Mobile with other apps
                  </p>
                  <p className="text-[16.713px] leading-[32px] text-black dark:text-gray-300">
                    In the usability study, participants familiar with and unfamiliar with the Get Mobile process could eventually place orders.
                  </p>
                </div>
              </div>

              {/* Users like */}
              <div className="space-y-4">
                <h3 className="text-[16.8px] leading-[32px] text-black dark:text-gray-100">
                  Users like certain aspects of the app:
                </h3>
                <div className="space-y-4 pl-6">
                  <p className="text-[16.55px] leading-[32px] text-black dark:text-gray-300">
                    All participants can easily view their account balances and transaction history, and they find the presentation of this information very clear.
                  </p>
                  <p className="text-[16.654px] leading-[32px] text-black dark:text-gray-300">
                    All participants were very satisfied with the font, color, and other UI layouts, which should be maintained in future versions.
                  </p>
                </div>
              </div>

              {/* Users dislike */}
              <div className="space-y-4">
                <h3 className="text-[16.832px] leading-[32px] text-black dark:text-gray-100">
                  Users dislike certain aspects of the app:
                </h3>
                <div className="space-y-4 pl-6">
                  <p className="text-[16.761px] leading-[32px] text-black dark:text-gray-300">
                    Participants were confused with the login screen and multiple password settings
                  </p>
                  <p className="text-[16.657px] leading-[32px] text-black dark:text-gray-300">
                    Participants felt the interface was missing key information such as restaurant hours, food pictures, etc.
                  </p>
                  <p className="text-[16.626px] leading-[32px] text-black dark:text-gray-300">
                    Participants experience difficulties in changing their addresses.
                  </p>
                  <p className="text-[16.859px] leading-[32px] text-black dark:text-gray-300">
                    Participants felt that were not enough restaurants.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-[268px] h-[528px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={imgRectangle4}
                  alt="Summary Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Improvements Section */}
        <div className="space-y-12">
          <h2 className="text-[21px] leading-[28px] font-['Caudex'] text-black dark:text-gray-100">
            With users' suggestions, following improvements should be made
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center lg:justify-start">
              <div className="w-[497px] max-w-full h-[301px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={imgRectangle5}
                  alt="Improvements Diagram"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[16.847px] leading-[31px] text-[#ff9900]">
                (5/5) More restaurants must be added, and all on-campus restaurants should be integrated into this App.
              </p>
              <p className="text-[16.803px] leading-[31px] text-[#ff9900]">
                (5/5) The application should only require a single password and keep it on the server instead of a new one each time the user logs in.
              </p>
              <p className="text-[16.585px] leading-[31px] text-[#ff9900]">
                (5/5) Add the on-campus residence halls correctly to the address list
              </p>
              <p className="text-[16.778px] leading-[31px] text-[#ac2f64]">
                (3/5) Fix system log-in bugs so that the user can be correctly directed to the main page after entering the pin
              </p>
              <p className="text-[16.962px] leading-[31px] text-[#ac2f64]">
                (3/5) Add restaurants' opening hours
              </p>
              <p className="text-[16.896px] leading-[31px] text-[#ac2f64]">
                (3/5) Add a booking function when restaurants are closed
              </p>
              <p className="text-[17.12px] leading-[31px] text-black dark:text-gray-300">
                (2/5) Images should be added to the menu page
              </p>

              <div className="pt-8 space-y-4 border-t border-black/20 dark:border-white/20 mt-8">
                <p className="text-[16.659px] leading-[31px] text-black dark:text-gray-300">
                  With a maximum score of 5, 14 participants gave a score of 2, 19 gave a score of 3, 10 gave a score of 4, and no one gave a score of 5, which means that the software was below average with a score of 2.5.
                </p>
                <p className="text-[16.722px] leading-[31px] text-black dark:text-gray-300">
                  All participants (50 out of 50) mentioned a preference for other software (Uber Eats, Yelp, DoorDash, etc.), and it is clear that the competitors are excellent and could take over our market anytime.
                </p>
                <p className="text-[17.408px] leading-[31px] text-black dark:text-gray-300">
                  We should seize the market advantage of Get Mobile on campus and make improvements！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
