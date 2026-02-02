import imgRectangle from "figma:asset/948c69b9ad0cd504148ae7b3379e3bf7e6f03cd4.png";
import imgRectangle1 from "figma:asset/d4234d1d13b0623c65e5777cdc1d69c7afb6e4ef.png";
import imgRectangle2 from "figma:asset/8637adc5ecc5890b4e983ca27d1713f9e12efbd1.png";
import imgRectangle3 from "figma:asset/7dc7107420f5bd9c1405d175e191a43c6225a0f9.png";
import imgRectangle4 from "figma:asset/f06b438e8da3c7ba6ff08eb2a0da9e0c74a907b4.png";
import imgRectangle5 from "figma:asset/0d56bcf41ac7d6e979ff2dc41f04f66bfd676098.png";
import imgRectangle6 from "figma:asset/65f629a227ef53f74416f8b4aca2904c5bb61c29.png";

function ContainerBackgroundColor() {
  return <div className="absolute bg-[#f3e8d8] h-[4191px] left-0 top-0 w-[1920px]" data-name="Container /+BackgroundColor" />;
}

function MainSectionBackgroundColor() {
  return <div className="absolute bg-[#f3e8d8] h-[3913px] left-0 top-[128px] w-[1920px]" data-name="Main / Section /+BackgroundColor" />;
}

function Container() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[306px] left-[470px] not-italic text-black top-[22px] w-[396px]" data-name="Container">
      <div className="absolute font-['Caudex:Regular',_sans-serif] h-[146px] leading-[73px] left-0 text-[56px] top-0 w-[394px]">
        <p className="mb-0">Get Mobile</p>
        <p>User Research</p>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[129.562px] leading-[32px] left-[2px] text-[16.709px] top-[176px] w-[394px]">Identify current page design issues and functional flaws, thereby expanding the user base and applicability, and also improving the user experience.</p>
    </div>
  );
}

function ContainerImage() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[418px] left-[574px] overflow-clip top-[395.56px] w-[243px]" data-name="Container / Image">
      <div className="absolute h-[418px] left-0 top-0 w-[243px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
    </div>
  );
}

function ContainerImage1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[1003px] overflow-clip size-[313px] top-[51px]" data-name="Container / Image">
      <div className="absolute left-0 size-[313px] top-0" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function ContainerUnorderedList() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',_sans-serif] font-normal h-[194px] leading-[32px] left-[913px] not-italic text-black top-[488.56px] w-[528px]" data-name="Container / Unordered List">
      <p className="absolute h-[64.781px] left-[23.39px] text-[17.057px] top-0 w-[505px]">Get Mobile is concentrated on university use to check account balances and few online ordering for pick up.</p>
      <p className="absolute h-[129.562px] left-[23.39px] text-[16.819px] top-[64.78px] w-[505px]">For example, in UT Austin, the accounts include Bevo Bucks and Dine-In Dollars, where this money is grouped with school meal plans. And currently, the app only works with a few stores on campus.</p>
    </div>
  );
}

function UnorderedList() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',_sans-serif] font-normal h-[194px] leading-[32px] left-[9px] not-italic text-black top-[32.39px] w-[499px]" data-name="Unordered List">
      <p className="absolute h-[97.172px] left-[23.39px] text-[16.613px] top-0 w-[475px]">I ​ identify current page design issues and functional flaws, expanding the user base and applicability and improving the user experience.</p>
      <p className="absolute h-[64.781px] left-[23.39px] text-[16.677px] top-[97.17px] w-[475px]">Identify which aspects of the order process, if any, users have struggled with</p>
      <p className="absolute h-[32.391px] left-[23.39px] text-[17.157px] top-[161.95px] w-[475px]">Provide suggestions to improve the order process.</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[227px] left-[23.39px] top-0 w-[508px]" data-name="ListItem">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[32.391px] leading-[32px] left-0 not-italic text-[17.725px] text-black top-0 w-[508px]">Research Goals</p>
      <UnorderedList />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',_sans-serif] font-normal h-[65px] leading-[32px] left-[23.39px] not-italic text-black top-0 w-[475px]" data-name="ListItem">
      <p className="absolute h-[32.391px] left-0 text-[16.816px] top-0 w-[475px]">Screener</p>
      <p className="absolute h-[32.391px] left-[32.39px] text-[16.64px] top-[32.39px] w-[443px]">​50 participants selected by the screener​</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',_sans-serif] font-normal h-[65px] leading-[32px] left-[23.39px] not-italic text-black top-[64.78px] w-[475px]" data-name="ListItem">
      <p className="absolute h-[32.391px] left-0 text-[16.263px] top-0 w-[475px]">Usability Test</p>
      <p className="absolute h-[32.391px] left-[32.39px] text-[17.017px] top-[32.39px] w-[443px]">​Conduct usability testing via Zoom ​</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',_sans-serif] font-normal h-[130px] leading-[32px] left-[23.39px] not-italic text-black top-[129.56px] w-[475px]" data-name="ListItem">
      <p className="absolute h-[32.391px] left-0 text-[16.976px] top-0 w-[475px]">Shared Screen</p>
      <p className="absolute h-[97.172px] left-[32.39px] text-[16.674px] top-[32.39px] w-[443px]">​Participants shared their screens so that we can conduct usability testing scenarios through GET mobile usage scenarios.</p>
    </div>
  );
}

function UnorderedList1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[259px] left-[9px] top-[32.4px] w-[499px]" data-name="Unordered List">
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[292px] left-[23.39px] top-[226.73px] w-[508px]" data-name="ListItem">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[32.391px] leading-[32px] left-0 not-italic text-[17.27px] text-black top-0 w-[508px]">Research Method</p>
      <UnorderedList1 />
    </div>
  );
}

function ContainerUnorderedList1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[518px] left-[479px] top-[988.5px] w-[531px]" data-name="Container / Unordered List">
      <ListItem />
      <ListItem4 />
    </div>
  );
}

function ContainerImage2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[482px] left-[1175px] overflow-clip top-[946px] w-[223px]" data-name="Container / Image">
      <div className="absolute h-[482px] left-0 top-0 w-[223px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle2} />
      </div>
    </div>
  );
}

function ContainerButtonWixVideoImage() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[509px] left-[524px] overflow-clip top-[1630.5px] w-[240px]" data-name="Container / Button / Wix-video / Image">
      <div className="absolute h-[509px] left-0 top-0 w-[240px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle3} />
      </div>
    </div>
  );
}

function ContainerUnorderedList2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[518px] leading-[32px] left-[827px] not-italic top-[1645.5px] w-[601px]" data-name="Container / Unordered List">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[64.781px] left-[23.39px] text-[16.954px] text-black top-0 w-[578px]">Participants tried to follow the logic they used with other food order apps when using Get Mobile for the first time</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[64.781px] left-[23.39px] text-[16.831px] text-black top-[64.78px] w-[578px]">Participants report that they CANNOT access the home screen after entering their password</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[32.391px] left-[23.39px] text-[16.841px] text-black top-[129.56px] w-[578px]">Problems with user interaction (login, access to secondary pages)</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[32.391px] left-[23.39px] text-[17.07px] text-black top-[161.95px] w-[578px]">Participants CAN NOT select on-campus buildings</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[32.391px] left-[23.39px] text-[16.85px] text-black top-[194.34px] w-[578px]">APP malfunctioned while in use</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[64.781px] left-[23.39px] text-[16.991px] text-black top-[226.73px] w-[578px]">Participants said that NOT being able to see pictures of food made them more hesitant to place orders.</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[32.391px] left-[23.39px] text-[17.211px] text-black top-[291.52px] w-[578px]">Missing picture information</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[64.781px] left-[23.39px] text-[16.878px] text-black top-[323.91px] w-[578px]">When browsing the restaurant list, participants responded that they could not see the opening hours from the restaurant list.</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[64.781px] left-[23.39px] text-[16.94px] text-black top-[388.69px] w-[578px]">When using the app, users are confused by multiple password recreation and DUO authentication.</p>
      <p className="absolute font-['Inter:Extra_Bold',_sans-serif] font-extrabold h-[64.781px] left-[23.39px] text-[#ff9900] text-[16.554px] top-[453.47px] w-[578px]">Since the entire study of Overall Findings was too long, I consolidated it into a Google Doc. Click to learn more to get a detailed introduction.</p>
    </div>
  );
}

function ContainerLinkBackgroundColor() {
  return (
    <div className="absolute bg-[#3bac2f] h-[30px] left-[1312px] rounded-[5px] top-[2186.75px] w-[107px]" data-name="Container / Link+BackgroundColor">
      <div aria-hidden="true" className="absolute border-[#323232] border-[3px] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="absolute font-['Fraunces:Regular',_sans-serif] font-normal h-[19.188px] leading-[19.188px] left-[8px] text-[16px] text-white top-[5.41px] w-[91px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Learn More
      </p>
    </div>
  );
}

function UnorderedList2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',_sans-serif] font-normal h-[162px] leading-[32px] left-[9px] not-italic text-black top-[97.17px] w-[499px]" data-name="Unordered List">
      <p className="absolute h-[64.781px] left-[23.39px] text-[17.072px] top-0 w-[475px]">When using Get Mobile, users will compare Get Mobile with other apps</p>
      <p className="absolute h-[97.172px] left-[23.39px] text-[16.713px] top-[64.78px] w-[475px]">In the usability study, participants familiar with and unfamiliar with the Get Mobile process could eventually place orders.</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[259px] left-[23.39px] top-0 w-[508px]" data-name="ListItem">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[97.172px] leading-[32px] left-0 not-italic text-[16.862px] text-black top-0 w-[508px]">The evaluation of Get Mobile’s order process included interviews and usability testing. During this time, we learned the following:</p>
      <UnorderedList2 />
    </div>
  );
}

function UnorderedList3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',_sans-serif] font-normal h-[194px] leading-[32px] left-[9px] not-italic text-black top-[32.39px] w-[499px]" data-name="Unordered List">
      <p className="absolute h-[97.172px] left-[23.39px] text-[16.55px] top-0 w-[475px]">All participants can easily view their account balances and transaction history, and they find the presentation of this information very clear.</p>
      <p className="absolute h-[97.172px] left-[23.39px] text-[16.654px] top-[97.17px] w-[475px]">All participants were very satisfied with the font, color, and other UI layouts, which should be maintained in future versions.</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[227px] left-[23.39px] top-[259.13px] w-[508px]" data-name="ListItem">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[32.391px] leading-[32px] left-0 not-italic text-[16.8px] text-black top-0 w-[508px]">Users like certain aspects of the app:</p>
      <UnorderedList3 />
    </div>
  );
}

function UnorderedList4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',_sans-serif] font-normal h-[227px] leading-[32px] left-[9px] not-italic text-black top-[32.39px] w-[499px]" data-name="Unordered List">
      <p className="absolute h-[64.781px] left-[23.39px] text-[16.761px] top-0 w-[475px]">Participants were confused with the login screen and multiple password settings</p>
      <p className="absolute h-[64.781px] left-[23.39px] text-[16.657px] top-[64.78px] w-[475px]">Participants felt the interface was missing key information such as restaurant hours, food pictures, etc.</p>
      <p className="absolute h-[64.781px] left-[23.39px] text-[16.626px] top-[129.56px] w-[475px]">Participants experience difficulties in changing their addresses.</p>
      <p className="absolute h-[32.391px] left-[23.39px] text-[16.859px] top-[194.34px] w-[475px]">Participants felt that were not enough restaurants.</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[259px] left-[23.39px] top-[485.86px] w-[508px]" data-name="ListItem">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[32.391px] leading-[32px] left-0 not-italic text-[16.832px] text-black top-0 w-[508px]">Users dislike certain aspects of the app:</p>
      <UnorderedList4 />
    </div>
  );
}

function ContainerUnorderedList3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[745px] left-[486px] top-[2282.25px] w-[531px]" data-name="Container / Unordered List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function ContainerImage3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[528px] left-[1097px] overflow-clip top-[2361.25px] w-[268px]" data-name="Container / Image">
      <div className="absolute h-[528px] left-0 top-0 w-[268px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle4} />
      </div>
    </div>
  );
}

function ContainerImage4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[301px] left-[401px] overflow-clip top-[3214.98px] w-[497px]" data-name="Container / Image">
      <div className="absolute h-[301px] left-0 top-0 w-[497px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle5} />
      </div>
    </div>
  );
}

function UnorderedList5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',_sans-serif] font-normal h-[378px] leading-[31px] left-[9px] not-italic top-0 w-[531px]" data-name="Unordered List">
      <p className="absolute h-[63px] left-[23.39px] text-[#ff9900] text-[16.847px] top-0 w-[508px]">(5/5) More restaurants must be added, and all on-campus restaurants should be integrated into this App.</p>
      <p className="absolute h-[94.5px] left-[23.39px] text-[#ff9900] text-[16.803px] top-[63px] w-[508px]">(5/5) The application should only require a single password and keep it on the server instead of a new one each time the user logs in.</p>
      <p className="absolute h-[63px] left-[23.39px] text-[#ff9900] text-[16.585px] top-[157.5px] w-[508px]">(5/5) Add the on-campus residence halls correctly to the address list</p>
      <p className="absolute h-[63px] left-[23.39px] text-[#ac2f64] text-[16.778px] top-[220.5px] w-[508px]">(3/5) Fix system log-in bugs so that the user can be correctly directed to the main page after entering the pin</p>
      <p className="absolute h-[31.5px] left-[23.39px] text-[#ac2f64] text-[16.962px] top-[283.5px] w-[508px]">(3/5) Add restaurants’ opening hours</p>
      <p className="absolute h-[31.5px] left-[23.39px] text-[#ac2f64] text-[16.896px] top-[315px] w-[508px]">(3/5) Add a booking function when restaurants are closed</p>
      <p className="absolute h-[31.5px] left-[23.39px] text-[17.12px] text-black top-[346.5px] w-[508px]">(2/5) Images should be added to the menu page</p>
    </div>
  );
}

function UnorderedList6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-normal h-[315px] leading-[31px] left-[9px] not-italic text-black top-[409.5px] w-[531px]" data-name="Unordered List">
      <p className="absolute font-['Inter:Regular',_sans-serif] h-[126px] left-[23.39px] text-[16.659px] top-0 w-[508px]">With a maximum score of 5, 14 participants gave a score of 2, 19 gave a score of 3, 10 gave a score of 4, and no one gave a score of 5, which means that the software was below average with a score of 2.5.</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] h-[126px] left-[23.39px] text-[16.722px] top-[126px] w-[508px]">All participants (50 out of 50) mentioned a preference for other software (Uber Eats, Yelp, DoorDash, etc.), and it is clear that the competitors are excellent and could take over our market anytime.</p>
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_JP:Regular',_sans-serif] h-[63px] left-[23.39px] text-[17.408px] top-[252px] w-[508px]">We should seize the market advantage of Get Mobile on campus and make improvements！</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[725px] left-[903px] top-[3141.98px] w-[540px]" data-name="Container">
      <UnorderedList5 />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[31.5px] leading-[31px] left-0 not-italic text-[18px] text-black top-[378px] w-[540px]">​</p>
      <UnorderedList6 />
    </div>
  );
}

function MainSection() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[3913px] left-0 top-[128px] w-[1920px]" data-name="Main / Section">
      <Container />
      <ContainerImage />
      <ContainerImage1 />
      <p className="absolute font-['Caudex:Regular',_sans-serif] h-[26px] leading-[26px] left-[1441px] not-italic text-[20px] text-black text-right top-[450.56px] translate-x-[-100%] w-[537px]">What is Get Mobile?</p>
      <ContainerUnorderedList />
      <p className="absolute font-['Caudex:Regular',_sans-serif] h-[27.5px] leading-[27px] left-[497px] not-italic text-[20px] text-black top-[939px] w-[537px]">{`Research Goals & Methods`}</p>
      <ContainerUnorderedList1 />
      <ContainerImage2 />
      <p className="absolute font-['Caudex:Regular',_sans-serif] h-[27.5px] leading-[27px] left-[1218px] not-italic text-[20px] text-black top-[1597px] w-[191px]">Overall Findings</p>
      <ContainerButtonWixVideoImage />
      <ContainerUnorderedList2 />
      <ContainerLinkBackgroundColor />
      <p className="absolute font-['Caudex:Regular',_sans-serif] h-[27.5px] leading-[27px] left-[503px] not-italic text-[20px] text-black top-[2242.75px] w-[537px]">Summary</p>
      <ContainerUnorderedList3 />
      <ContainerImage3 />
      <p className="absolute font-['Caudex:Regular',_sans-serif] h-[57.75px] leading-[28px] left-[1411px] not-italic text-[21px] text-black text-right top-[3068.23px] translate-x-[-100%] w-[537px]">With users’ suggestions, following improvements should be made</p>
      <ContainerImage4 />
      <Container1 />
    </div>
  );
}

function ContainerBackgroundColor1() {
  return <div className="absolute bg-[#f3e8d8] h-[150px] left-0 top-0 w-[1920px]" data-name="Container /+BackgroundColor" />;
}

function ContainerBackgroundColor2() {
  return <div className="absolute bg-[#f3e8d8] h-[150px] left-[470px] top-0 w-[980px]" data-name="Container /+BackgroundColor" />;
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Caudex:Regular',_sans-serif] h-[113px] leading-[28px] left-[470px] not-italic text-[20px] text-black text-center top-[37px] w-[980px]" data-name="Container">
      <p className="absolute h-[28.188px] left-[490px] top-0 translate-x-[-50%] w-[980px]">© Oscar Wei 2023</p>
      <p className="absolute h-[28.188px] left-[490px] top-[28.19px] translate-x-[-50%] w-[980px]">​</p>
      <p className="absolute h-[28.188px] left-[490px] top-[56.38px] translate-x-[-50%] w-[980px]">Oscarwei@utexas.edu</p>
      <p className="absolute h-[28.188px] left-[490px] top-[84.57px] translate-x-[-50%] w-[980px]">​</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[150px] left-0 top-[4041.48px] w-[1920px]" data-name="Footer">
      <ContainerBackgroundColor1 />
      <ContainerBackgroundColor2 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[4191px] left-0 top-0 w-[1920px]" data-name="Container">
      <MainSectionBackgroundColor />
      <MainSection />
      <Footer />
    </div>
  );
}

function ContainerBackgroundColor3() {
  return <div className="absolute bg-[#f3e8d8] h-[128px] left-0 top-0 w-[1920px]" data-name="Container /+BackgroundColor" />;
}

function ContainerBackgroundColor4() {
  return <div className="absolute bg-[#f3e8d8] h-[128px] left-[470px] top-0 w-[980px]" data-name="Container /+BackgroundColor" />;
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[83px] left-0 top-0 w-[287px]" data-name="Container">
      <p className="absolute font-['Sacramento:Regular',_sans-serif] h-[47.703px] leading-[45px] left-[20px] not-italic text-[30.756px] text-black top-[7px] w-[157px]">Oscar Wei</p>
    </div>
  );
}

function WixDropdownMenuNavUnorderedList() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',_sans-serif] font-normal h-[30px] leading-[30px] left-[748.47px] not-italic top-[7px] w-[729px]" data-name="Wix-dropdown-menu / Nav / Unordered List">
      <p className="absolute h-[30px] left-[478px] text-[14px] text-black top-0 w-[38px]">Home</p>
      <p className="absolute h-[30px] left-[536px] text-[#3d3a36] text-[13.208px] top-0 w-[50px]">Projects</p>
      <p className="absolute h-[30px] left-[606px] text-[13.087px] text-black top-0 w-[43px]">Gallery</p>
      <p className="absolute h-[30px] left-[669px] text-[13.462px] text-black top-0 w-[50px]">Resume</p>
    </div>
  );
}

function Group() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
      <g id="Group">
        <path d="M30 0V30H0V0H30Z" fill="var(--fill-0, black)" id="Vector" />
      </g>
    </svg>
  );
}

function Frame() {
  return (
    <div className="absolute left-0 overflow-clip size-[30px] top-0" data-name="Frame">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[30px] top-0" data-name="Frame">
      <Frame />
    </div>
  );
}

function MaskBackground() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[30px] top-0" data-name="Mask Background">
      <Frame1 />
    </div>
  );
}

function ContainerLinkMaskImageGroup() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[1483.47px] overflow-clip size-[30px] top-[7px]" data-name="Container / Link / Mask Image Group">
      <MaskBackground />
      <div className="absolute left-0 size-[30px] top-0" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[83px] left-[286.53px] top-0 w-[1513px]" data-name="Container">
      <WixDropdownMenuNavUnorderedList />
      <ContainerLinkMaskImageGroup />
    </div>
  );
}

function ContainerSection() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[83px] left-[60px] top-[30px] w-[1800px]" data-name="Container / Section">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[128px] left-0 top-0 w-[1920px]" data-name="Header">
      <ContainerBackgroundColor3 />
      <ContainerBackgroundColor4 />
      <ContainerSection />
    </div>
  );
}

function BodyBackgroundColor() {
  return (
    <div className="h-[4191.23px] overflow-clip relative shrink-0 w-[1920px]" data-name="Body+BackgroundColor" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <ContainerBackgroundColor />
      <Container3 />
      <Header />
    </div>
  );
}

export default function HttpsWwwOscarweiComGetmobileViewport1920PxThemeLightGeneratedByCodiaAi() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start relative size-full" data-name="https://www.oscarwei.com/getmobile [Viewport=1920px, Theme=Light] - Generated by Codia AI">
      <BodyBackgroundColor />
    </div>
  );
}