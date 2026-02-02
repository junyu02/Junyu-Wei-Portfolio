import svgPaths from "./svg-a7krv2jkg6";
import imgRectangle from "figma:asset/ce62a033fdf8a77a051da891963036e3498b2965.png";
import imgRectangle1 from "figma:asset/df829bc4e8ddc1077ad895c9e7ef270260f7f227.png";
import imgRectangle2 from "figma:asset/b1fec428418485f9235799bdf2a1301c9499dac3.png";

function Painpoint03() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[89px] leading-[19px] left-0 overflow-clip shadow-[0px_-1px_0px_0px_rgba(128,128,128,0.3)] top-[219.76px] w-[632px]" data-name="painpoint03">
      <p className="absolute h-[19px] left-0 text-[#949494] text-[12.177px] top-[10.24px] w-[199px]">Alumni Engagement Preferences</p>
      <p className="absolute h-[39.188px] left-0 text-[13.713px] text-black top-[39.6px] w-[632px]">Alumni show a strong preference for mentorship roles, with over 80% expressing interest in participating in formal mentorship programs.</p>
    </div>
  );
}

function Painpoint02() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[89px] leading-[19px] left-0 overflow-clip shadow-[0px_-1px_0px_0px_rgba(128,128,128,0.3)] top-[120.76px] w-[632px]" data-name="painpoint02">
      <p className="absolute h-[19.594px] left-0 text-[#949494] text-[12.402px] top-[10px] w-[188px]">Fragmented Communities</p>
      <p className="absolute h-[39.188px] left-0 text-[13.685px] text-black top-[39.6px] w-[632px]">Forcing users to switch between LinkedIn (professional) and HookedIn (informal) risked fragmenting conversations and reducing network density.</p>
    </div>
  );
}

function Painpoint01() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[83px] leading-[19px] left-0 overflow-clip shadow-[0px_-1px_0px_0px_rgba(128,128,128,0.3)] top-[27.76px] w-[632px]" data-name="painpoint01">
      <p className="absolute h-[19.594px] left-0 text-[#949494] text-[12.436px] top-[10px] w-[227px]">Platform Fatigue</p>
      <p className="absolute h-[19.594px] left-0 text-[13.692px] text-black top-[39.6px] w-[632px]">Users already juggle multiple platforms . Adding HookedIn felt like a digital chore, risking low adoption</p>
    </div>
  );
}

function Painpoint() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] font-['Inter:Regular',_sans-serif] font-normal h-[318px] left-[672px] not-italic top-[330px] w-[632px]" data-name="painpoint">
      <Painpoint03 />
      <Painpoint02 />
      <Painpoint01 />
      <p className="absolute h-[18.188px] leading-[18px] left-0 text-[#3cda64] text-[13.152px] top-0 tracking-[0.28px] w-[632px]">Common painpoints</p>
    </div>
  );
}

function CriticalInsights() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[30px] left-0 overflow-clip shadow-[0px_1px_0px_0px_rgba(128,128,128,0.3)] top-0 w-[632px]" data-name="Critical insights">
      <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal h-[19.594px] leading-[19px] left-0 text-[#3cda64] text-[14px] top-[5px] w-[194px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Critical insights
      </p>
    </div>
  );
}

function Insight01() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[46px] left-0 not-italic overflow-clip shadow-[0px_1px_0px_0px_rgba(128,128,128,0.3)] text-black top-[121.59px] w-[632px]" data-name="insight01">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[19px] leading-[19px] left-[30px] text-[12.324px] top-[14.41px] w-[397px]">
        <p className="mb-0">Users wanted enhanced LinkedIn features—not a new platform.</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute font-['Material_Icons:Regular',_sans-serif] h-[30px] leading-[30px] left-0 text-[20px] top-[8.41px] w-[20px]">star</p>
    </div>
  );
}

function Group() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="Group">
        <path d={svgPaths.p1deb9100} fill="var(--fill-0, white)" id="Vector" />
        <path d={svgPaths.p1deb9100} fill="var(--fill-0, #0A66C2)" id="Vector_2" />
        <path d={svgPaths.p19c68740} fill="var(--fill-0, white)" id="Vector_3" />
      </g>
    </svg>
  );
}

function SkillIconsLinkedin() {
  return (
    <div className="absolute left-[2px] overflow-clip size-[16px] top-[15.41px]" data-name="skill-icons:linkedin">
      <Group />
    </div>
  );
}

function Insight02() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[46px] left-0 overflow-clip shadow-[0px_1px_0px_0px_rgba(128,128,128,0.3)] top-[75.59px] w-[632px]" data-name="insight02">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[19px] leading-[19px] left-[30px] not-italic text-[12.353px] text-black top-[14.41px] w-[305px]">{`87% used LinkedIn; <34% saw need for HookedIn.`}</p>
      <p className="absolute font-['Material_Icons:Regular',_sans-serif] h-[30px] leading-[30px] left-0 not-italic text-[20px] text-black top-[8.41px] w-[20px]">star</p>
      <SkillIconsLinkedin />
    </div>
  );
}

function HugeiconsMentoring() {
  return (
    <div className="absolute left-0 size-[24px] top-[11px]" data-name="hugeicons:mentoring">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="hugeicons:mentoring">
          <path d={svgPaths.p3fc2b680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Insight03() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[46px] left-0 overflow-clip shadow-[0px_1px_0px_0px_rgba(128,128,128,0.3)] top-[29.59px] w-[632px]" data-name="insight03">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[19px] leading-[19px] left-[30px] not-italic text-[12.342px] text-black top-[14.41px] w-[407px]">Alumni show a strong preference for mentorship roles</p>
      <HugeiconsMentoring />
    </div>
  );
}

function CriticalInsights1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[179px] left-[672px] rounded-[20px] top-[132px] w-[632px]" data-name="Critical insights">
      <CriticalInsights />
      <Insight01 />
      <Insight02 />
      <Insight03 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[103px] left-[672px] overflow-clip top-[10px] w-[632px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[103px] leading-[19px] left-0 not-italic text-[#949494] text-[13.611px] top-[-0.12px] w-[632px]">
        <span>{`Convincing busy alumni and students to adopt another networking platform turned out to be tougher than expected. Who would've guessed, right? `}</span>
        <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#2f2f2f]">Our early interviews with 8 key stakeholders and surveys of 420 grad students</span>
        <span>{` revealed that while they saw some potential in HookedIn, most were perfectly happy sticking with LinkedIn and dreaded the thought of managing one more profile.`}</span>
      </p>
    </div>
  );
}

function Group97() {
  return (
    <div className="absolute contents left-[235px] top-[300px]">
      <div className="absolute left-[246px] rounded-[60.5px] size-[121px] top-[300px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[60.5px] size-full" src={imgRectangle} />
      </div>
      <p className="absolute font-['Caudex:Regular',_sans-serif] h-[29px] leading-[27px] left-[307px] not-italic text-[20px] text-black text-center top-[451px] translate-x-[-50%] w-[144px]">Data collection</p>
    </div>
  );
}

function Group96() {
  return (
    <div className="absolute contents left-[30px] top-[300px]">
      <div className="absolute left-[72px] rounded-[60.5px] size-[121px] top-[300px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[60.5px] size-full" src={imgRectangle1} />
      </div>
      <p className="absolute font-['Caudex:Regular',_sans-serif] h-[29px] leading-[27px] left-[132.5px] not-italic text-[20px] text-black text-center top-[451px] translate-x-[-50%] w-[205px]">Alumni Information</p>
    </div>
  );
}

function Group1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121 121">
      <g id="Group">
        <path d={svgPaths.pbc1c600} fill="var(--fill-0, black)" id="Vector" />
      </g>
    </svg>
  );
}

function Frame() {
  return (
    <div className="absolute left-0 overflow-clip size-[121px] top-0" data-name="Frame">
      <Group1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[121px] top-0" data-name="Frame">
      <Frame />
    </div>
  );
}

function MaskBackground() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 overflow-clip size-[121px] top-0" data-name="Mask Background">
      <Frame1 />
    </div>
  );
}

function ContainerMaskImageGroup() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[409px] overflow-clip size-[121px] top-[300px]" data-name="Container / Mask Image Group">
      <MaskBackground />
      <div className="absolute left-0 size-[121px] top-0" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle2} />
      </div>
    </div>
  );
}

function Group98() {
  return (
    <div className="absolute contents left-[391px] top-[300px]">
      <ContainerMaskImageGroup />
      <p className="absolute font-['Caudex:Regular',_sans-serif] h-[29px] leading-[27px] left-[469.5px] not-italic text-[20px] text-black text-center top-[451px] translate-x-[-50%] w-[157px]">Needs interview</p>
    </div>
  );
}

function Group99() {
  return (
    <div className="absolute contents left-[30px] top-[300px]">
      <Group97 />
      <Group96 />
      <Group98 />
    </div>
  );
}

export default function Research() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative shadow-[0px_-1px_0px_0px_rgba(128,128,128,0.3)] size-full" data-name="research">
      <Painpoint />
      <CriticalInsights1 />
      <Container />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[57.594px] leading-[57px] left-0 not-italic text-[41.298px] text-black top-[10px] tracking-[-0.96px] w-[188px]">Research</p>
      <Group99 />
    </div>
  );
}