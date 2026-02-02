import svgPaths from "./svg-j7g46xczhq";
import imgImage1 from "figma:asset/ca59107a78664c33dfa79395b1d7b2cf667e157e.png";
import imgImage11 from "figma:asset/0797012d2dd9e7a0870ae4f667478f4f8d1b3f09.png";
import imgImageContainer from "figma:asset/6a78f387db16695ab836d23bed7cd2a8c336e188.png";
import imgImage12 from "figma:asset/8541614559cc698ed98c1a84ecb37e127703e757.png";
import imgImage13 from "figma:asset/944ec4ef1b251e4c1a7abc12dd981eeeb7e79aa3.png";

function Top() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[390px]" data-name="top">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 24">
        <g id="top">
          <rect fill="#F2F2F2" height="24" width="390" />
          <g id="time">
            <path d={svgPaths.p39584d40} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p39584d40} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p39584d40} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p39584d40} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p39584d40} fill="var(--fill-0, black)" fillOpacity="0.7" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p2ead0f00} fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="battery" />
          <path clipRule="evenodd" d="M307 19H321V5L307 19Z" fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="cellular" />
          <path d={svgPaths.p310e4470} fill="var(--fill-0, black)" fillOpacity="0.7" id="wifi" />
        </g>
      </svg>
    </div>
  );
}

function Top1() {
  return (
    <div className="absolute h-[24px] left-[-1px] top-0 w-[390px]" data-name="top">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 24">
        <g id="top">
          <rect fill="#F2F2F2" height="24" width="390" />
          <g id="time">
            <path d={svgPaths.p23cd0400} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p23cd0400} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p23cd0400} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p23cd0400} fill="var(--fill-0, black)" fillOpacity="0.7" />
            <path d={svgPaths.p23cd0400} fill="var(--fill-0, black)" fillOpacity="0.7" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p1eaa2c80} fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="battery" />
          <path clipRule="evenodd" d={svgPaths.p16e56b00} fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="cellular" />
          <path d={svgPaths.p1578a780} fill="var(--fill-0, black)" fillOpacity="0.7" id="wifi" />
        </g>
      </svg>
    </div>
  );
}

function Top2() {
  return (
    <div className="absolute contents left-[-1px] top-0" data-name="top">
      <Top1 />
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute contents left-[-1px] top-0" data-name="top bar">
      <Top />
      <Top2 />
    </div>
  );
}

function Avatar() {
  return <div className="bg-[rgba(0,0,0,0.1)] rounded-[24px] shrink-0 size-[24px]" data-name="avatar" />;
}

function Frame427318906() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 text-nowrap">
      <p className="[white-space-collapse:collapse] font-['Roboto:Medium',_sans-serif] font-medium h-[16px] leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        FitnessGuru
      </p>
      <p className="[white-space-collapse:collapse] font-['Roboto:Regular',_sans-serif] font-normal h-[14px] leading-[14px] overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        3 hours ago
      </p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar />
      <Frame427318906 />
    </div>
  );
}

function IconButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon buttons">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 size-[24px] text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">•••</p>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 w-full" data-name="user">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Avatar1 />
          <IconButtons />
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex gap-[4px] items-center justify-center left-1/2 translate-x-[-50%]" data-name="pagination">
      <div className="bg-white h-[4px] rounded-[100px] shrink-0 w-[20px]" />
      <div className="bg-[rgba(0,0,0,0.3)] rounded-[100px] shrink-0 size-[4px]" />
      <div className="bg-[rgba(0,0,0,0.3)] rounded-[100px] shrink-0 size-[4px]" />
      <div className="bg-[rgba(0,0,0,0.3)] rounded-[100px] shrink-0 size-[4px]" />
    </div>
  );
}

function Image() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.05)] grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div className="absolute left-[2px] size-[360px] top-[-5px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <Pagination />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex h-[336px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
      <Image />
    </div>
  );
}

function TextContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="text content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Push yourself to new limits! 💪 #FitnessGoals
          </p>
        </div>
      </div>
    </div>
  );
}

function Post() {
  return (
    <div className="absolute left-[13px] rounded-[6px] top-[520px] w-[360px]" data-name="post">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-[360px]">
        <User />
        <ImageContainer />
        <TextContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Post1() {
  return (
    <div className="absolute contents left-[13px] top-[520px]" data-name="POST">
      <Post />
    </div>
  );
}

function Avatar2() {
  return <div className="bg-[rgba(0,0,0,0.1)] rounded-[24px] shrink-0 size-[24px]" data-name="avatar" />;
}

function Frame427318907() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 text-nowrap">
      <p className="[white-space-collapse:collapse] font-['Roboto:Medium',_sans-serif] font-medium h-[16px] leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        HealthyLiving
      </p>
      <p className="[white-space-collapse:collapse] font-['Roboto:Regular',_sans-serif] font-normal h-[14px] leading-[14px] overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        1 day ago
      </p>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar2 />
      <Frame427318907 />
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#fe7337] h-[18.25px] ml-0 mt-0 rounded-[10px] w-[41px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[15.103px] justify-center ml-[20.18px] mt-[9.44px] relative text-[#ffeded] text-[10px] text-center translate-x-[-50%] translate-y-[-50%] w-[30.109px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Follow</p>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group12 />
    </div>
  );
}

function IconButtons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon buttons">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 size-[24px] text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">•••</p>
      </div>
    </div>
  );
}

function User1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[8px] items-center ml-0 mt-0 p-[8px] relative w-[360px]" data-name="user">
      <Avatar3 />
      <Group13 />
      <IconButtons1 />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <User1 />
    </div>
  );
}

function Pagination1() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex gap-[4px] items-center justify-center left-1/2 translate-x-[-50%]" data-name="pagination">
      <div className="bg-white h-[4px] rounded-[100px] shrink-0 w-[20px]" />
      <div className="bg-[rgba(0,0,0,0.3)] rounded-[100px] shrink-0 size-[4px]" />
      <div className="bg-[rgba(0,0,0,0.3)] rounded-[100px] shrink-0 size-[4px]" />
      <div className="bg-[rgba(0,0,0,0.3)] rounded-[100px] shrink-0 size-[4px]" />
    </div>
  );
}

function Image1() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.05)] grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <Pagination1 />
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="content-stretch flex h-[336px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
      <Image1 />
      <div className="h-[184px] relative rounded-[4px] shrink-0 w-[358px]" data-name="image 11">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
          <img alt="" className="absolute h-[171.58%] left-0 max-w-none top-[-1.01%] w-full" src={imgImage11} />
        </div>
      </div>
    </div>
  );
}

function TextContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="text content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Fuel your body right! Check out this delicious recipe. 🥗
          </p>
        </div>
      </div>
    </div>
  );
}

function Post2() {
  return (
    <div className="absolute h-[231px] left-[13px] rounded-[6px] top-[970px] w-[360px]" data-name="post">
      <div className="content-stretch flex flex-col h-[231px] items-center overflow-clip relative rounded-[inherit] w-[360px]">
        <Group11 />
        <ImageContainer1 />
        <TextContent1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Post3() {
  return (
    <div className="absolute contents left-[13px] top-[970px]" data-name="post">
      <Post2 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[24px] right-[30px] rounded-[5px] top-[calc(50%-515.5px)] translate-y-[-50%] w-[65px]" data-name="button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[340px] size-[12px] top-[112px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon">
          <path d="M6 1L11 6L6 11" id="Vector 9" stroke="var(--stroke-0, white)" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents left-[295px] top-[105px]">
      <Button />
      <div className="absolute bg-[#fe7337] h-[22px] left-[296px] rounded-[4px] top-[106px] w-[63px]" />
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[16px] left-[304px] text-[#fffcfc] text-[12px] text-nowrap top-[110px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        See All
      </p>
      <Icon />
    </div>
  );
}

function SeeAll() {
  return (
    <div className="absolute contents left-[295px] top-[105px]" data-name="SEE ALL">
      <Group47 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[34px] top-[105px] w-[261px]" data-name="text">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Featured Workouts
      </p>
    </div>
  );
}

function Tag() {
  return (
    <div className="absolute bg-[#fe7337] box-border content-stretch flex flex-col items-center justify-center left-0 p-[4px] rounded-br-[6px] rounded-tl-[6px] top-0" data-name="tag">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        New
      </p>
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="absolute left-0 size-[150px] top-0" data-name="image container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-43.01%] max-w-none top-0 w-[145.12%]" src={imgImageContainer} />
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="absolute bg-[#fe7337] box-border content-stretch flex flex-col items-center justify-center left-0 p-[4px] rounded-br-[6px] rounded-tl-[6px] top-0" data-name="tag">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        New
      </p>
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.05)] left-0 size-[150px] top-0" data-name="image">
      <ImageContainer2 />
      <Tag1 />
    </div>
  );
}

function Image3() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.05)] grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[16px] justify-center leading-[0] left-[16px] right-[16px] text-[12px] text-black text-center top-1/2 translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Image of Workout 1</p>
      </div>
      <Tag />
      <Image2 />
    </div>
  );
}

function ImageContainer3() {
  return (
    <div className="content-stretch flex h-[150px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
      <Image3 />
    </div>
  );
}

function TextContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="text content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative text-black w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Full Body HIIT
          </p>
          <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            30 mins
          </p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-[150px]" data-name="card">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-[150px]">
        <ImageContainer3 />
        <TextContent2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Image4() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.05)] grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div className="absolute h-[151px] left-[-4px] top-[-1px] w-[165px]" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
    </div>
  );
}

function ImageContainer4() {
  return (
    <div className="content-stretch flex h-[150px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
      <Image4 />
    </div>
  );
}

function TextContent3() {
  return (
    <div className="relative shrink-0 w-full" data-name="text content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative text-black w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Yoga for Beginners
          </p>
          <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            20 mins
          </p>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-[150px]" data-name="card">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-[150px]">
        <ImageContainer4 />
        <TextContent3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Image5() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.05)] grow h-full min-h-px min-w-px relative shrink-0" data-name="image">
      <div className="absolute h-[151px] left-0 top-0 w-[45px]" data-name="image 13">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-35.72%] max-w-none top-[0.48%] w-[379.94%]" src={imgImage13} />
        </div>
      </div>
    </div>
  );
}

function ImageContainer5() {
  return (
    <div className="content-stretch flex h-[150px] items-start overflow-clip relative shrink-0 w-full" data-name="image container">
      <Image5 />
    </div>
  );
}

function TextContent4() {
  return (
    <div className="relative shrink-0 w-full" data-name="text content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative text-black w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Strength Training
          </p>
          <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            45 mins
          </p>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-[150px]" data-name="card">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-[150px]">
        <ImageContainer5 />
        <TextContent4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function SimpleWorkoutLead() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-center justify-center left-[14px] overflow-clip px-[12px] py-0 top-[141px] w-[360px]" data-name="simple workout lead">
      <Row />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🌞</p>
      </div>
    </div>
  );
}

function Frame427318908() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Morning Workouts
      </p>
      <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Start your day with a boost of energy
      </p>
    </div>
  );
}

function Item() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame />
      <Frame427318908 />
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336 1">
            <path d="M0 0.5H336" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 size-[32px]" data-name="frame">
      <div className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 overflow-ellipsis overflow-hidden size-[32px] text-[20px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[32px] overflow-ellipsis overflow-hidden">🌙</p>
      </div>
    </div>
  );
}

function Frame427318909() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Evening Routines
      </p>
      <p className="leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Relax and unwind after a long day
      </p>
    </div>
  );
}

function Item1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="item">
      <Frame1 />
      <Frame427318909 />
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336 1">
            <path d="M0 0.5H336" id="Vector 200" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MorningEvening() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-center justify-center left-[14px] px-[12px] py-0 top-[363px] w-[360px]" data-name="morning/evening">
      <Item />
      <Item1 />
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents left-[14px] top-[105px]">
      <SeeAll />
      <Text />
      <SimpleWorkoutLead />
      <MorningEvening />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-center left-[-1px] pb-[15px] pl-[16px] pr-[8px] pt-[12px] top-[39px]" data-name="title">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] text-black w-[296px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workout App
      </p>
    </div>
  );
}

function MessageCircle() {
  return (
    <div className="absolute inset-[8.33%_7.93%_8.06%_8.33%]" data-name="message-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="message-circle">
          <path d={svgPaths.p12898d00} fill="var(--fill-0, #FE7337)" id="Vector" />
          <path d={svgPaths.p36a76580} fill="var(--fill-0, #FE7337)" id="Vector_2" />
          <path d={svgPaths.p322bd980} fill="var(--fill-0, #FE7337)" id="Vector_3" />
          <path d={svgPaths.p3f392580} fill="var(--fill-0, #FE7337)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute contents inset-[8.33%_7.93%_8.06%_8.33%]" data-name="Layer 2">
      <MessageCircle />
    </div>
  );
}

function Message() {
  return (
    <div className="absolute left-[354px] overflow-clip size-[26px] top-[52px]" data-name="Message">
      <Layer2 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents left-[354px] top-[52px]">
      <Message />
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute contents left-[-1px] top-[39px]" data-name="title">
      <Title />
      <div className="absolute inset-[4.19%_11.03%_93.99%_83.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
          <path d={svgPaths.p1cbd8800} fill="var(--fill-0, #FE7337)" id="Vector" />
        </svg>
      </div>
      <Group46 />
    </div>
  );
}

function Community() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip" data-name="Community">
      <div className="absolute h-[33px] left-1/2 top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[30px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 33">
          <path d={svgPaths.p2cce6f00} id="Rectangle 1" stroke="var(--stroke-0, #777777)" />
        </svg>
      </div>
      <div className="absolute h-[11px] left-[33px] top-[29px] w-[11.5px]">
        <div className="absolute bottom-0 left-[-4.35%] right-[-4.35%] top-[-4.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
            <path d="M12 11.5V0.5H0.5V11.5" id="Vector 8" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="h-[50px] relative shrink-0 w-[78px]" data-name="Home">
      <Community />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[28px] top-[14px]">
      <div className="absolute left-[28px] size-[15px] top-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.5" cy="7.5" id="Ellipse 5" r="7" stroke="var(--stroke-0, #777777)" />
        </svg>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center left-[40px] top-[27px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "12.796875", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div className="h-0 relative w-[12.806px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 1">
                <line id="Line 1" stroke="var(--stroke-0, #777777)" x2="12.8062" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip" data-name="Search">
      <Group2 />
    </div>
  );
}

function Search1() {
  return (
    <div className="h-[50px] relative shrink-0 w-[78px]" data-name="Search">
      <Search />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[24px] top-[10px]">
      <div className="absolute h-[4.195px] left-[24.79px] top-[34.62px] w-[3.437px]">
        <div className="absolute inset-[-7.55%_-10.92%_-7.98%_-11.02%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p2a23cc00} id="Vector 1" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[13.495px] left-[24px] top-[27.44px] w-[10.124px]">
        <div className="absolute inset-[-2.49%_-3.72%_-2.41%_-3.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 15">
            <path d={svgPaths.p3f7656a0} id="Vector 2" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.02580905333161354)+(var(--transform-inner-height)*0.9997625946998596)))] items-center justify-center left-[25.98px] top-[21.56px] w-[calc(1px*((var(--transform-inner-height)*0.021790090948343277)+(var(--transform-inner-width)*0.9996669292449951)))]" style={{ "--transform-inner-width": "13.40625", "--transform-inner-height": "18.796875" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.521deg] skew-x-[359.77deg]">
          <div className="h-[18.801px] relative w-[13.422px]">
            <div className="absolute inset-[-1.8%_-2.79%_-1.76%_-2.8%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
                <path d={svgPaths.p1e2faef2} id="Vector 3" stroke="var(--stroke-0, #777777)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[9.654px] left-[33.84px] top-[20.51px] w-[10.077px]">
        <div className="absolute inset-[-3.31%_-3.74%_-3.34%_-3.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p33866800} id="Vector 4" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[18.853px] left-[38.44px] top-[10.51px] w-[13.56px]">
        <div className="absolute inset-[-1.77%_-2.79%_-1.71%_-2.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
            <path d={svgPaths.p16b7f900} id="Vector 5" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[13.596px] left-[43.92px] top-[10px] w-[10.077px]">
        <div className="absolute inset-[-2.38%_-3.83%_-2.26%_-3.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 15">
            <path d={svgPaths.p1f429930} id="Vector 6" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[4.296px] left-[49.87px] top-[12.43px] w-[3.437px]">
        <div className="absolute inset-[-7.64%_-11.15%_-7.74%_-10.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p13916900} id="Vector 7" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Log() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip" data-name="Log">
      <Group1 />
    </div>
  );
}

function Log1() {
  return (
    <div className="h-[50px] relative shrink-0 w-[78px]" data-name="Log">
      <Log />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[17px] top-[14px]">
      <div className="absolute left-[22.58px] size-[9.758px] top-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Ellipse 3">
            <circle cx="4.87879" cy="4.87879" fill="var(--fill-0, #FE7337)" fillOpacity="0.5" r="4.87879" />
            <circle cx="4.87879" cy="4.87879" r="4.37879" stroke="var(--stroke-0, #FE7337)" strokeOpacity="0.5" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[5.576px] left-[17px] top-[25.85px] w-[20.909px]">
        <div className="absolute bottom-0 left-[-2.39%] right-[-2.39%] top-[-8.97%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 7">
            <path d={svgPaths.pdae960} id="Ellipse 4" stroke="var(--stroke-0, #FE7337)" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[34.42px] size-[9.758px] top-[19.58px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Ellipse 3">
            <circle cx="4.87879" cy="4.87879" fill="var(--fill-0, #FE7337)" fillOpacity="0.5" r="4.87879" />
            <circle cx="4.87879" cy="4.87879" r="4.37879" stroke="var(--stroke-0, #FE7337)" strokeOpacity="0.5" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[5.576px] left-[28.85px] top-[31.42px] w-[20.909px]">
        <div className="absolute bottom-0 left-[-2.39%] right-[-2.39%] top-[-8.97%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 7">
            <path d={svgPaths.pdae960} id="Ellipse 4" stroke="var(--stroke-0, #FE7337)" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[46.27px] size-[9.758px] top-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Ellipse 3">
            <circle cx="4.87879" cy="4.87879" fill="var(--fill-0, #FE7337)" fillOpacity="0.5" r="4.87879" />
            <circle cx="4.87879" cy="4.87879" r="4.37879" stroke="var(--stroke-0, #FE7337)" strokeOpacity="0.5" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[5.576px] left-[40.7px] top-[25.85px] w-[20.909px]">
        <div className="absolute bottom-0 left-[-2.39%] right-[-2.39%] top-[-8.97%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 7">
            <path d={svgPaths.pdae960} id="Ellipse 4" stroke="var(--stroke-0, #FE7337)" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Groups() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip" data-name="Groups">
      <Group3 />
    </div>
  );
}

function Groups1() {
  return (
    <div className="h-[50px] relative shrink-0 w-[78px]" data-name="Groups">
      <Groups />
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip" data-name="Profile">
      <div className="absolute left-1/2 size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" id="Ellipse 1" r="19.5" stroke="var(--stroke-0, #777777)" />
        </svg>
      </div>
      <div className="absolute left-[32px] size-[14px] top-[13px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" id="Ellipse 3" r="6.5" stroke="var(--stroke-0, #777777)" />
        </svg>
      </div>
      <div className="absolute h-[8px] left-[24px] top-[30px] w-[30px]">
        <div className="absolute bottom-0 left-[-1.67%] right-[-1.67%] top-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 9">
            <path d={svgPaths.p10199800} id="Ellipse 4" stroke="var(--stroke-0, #777777)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Profile1() {
  return (
    <div className="h-[50px] relative shrink-0 w-[78px]" data-name="Profile">
      <Profile />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bottom-0 left-[-2px] w-[390px]" data-name="Nav Bar">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-[390px]">
        <Home />
        <Search1 />
        <Log1 />
        <Groups1 />
        <Profile1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#777777] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Page1() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="page1">
      <div className="relative size-full">
        <TopBar />
        <Post1 />
        <Post3 />
        <Group43 />
        <Title1 />
        <NavBar />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}