import svgPaths from "./svg-j1abn5tajt";
import imgImage13 from "figma:asset/4bce5712f10403ec4c4bdfe7e2ef163df4ad893f.png";
import imgImage4 from "figma:asset/3abffbca73af858074ede9ceb442f2fac1868598.png";

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Hiragino_Sans:W5',sans-serif] gap-[4px] grow items-center leading-[1.5] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-black">
      <p className="relative shrink-0 text-[60px] tracking-[-1.14px] w-full">Return Bags</p>
      <p className="relative shrink-0 text-[40px] tracking-[-0.76px] w-full">Drop your bags into the return slot</p>
    </div>
  );
}

function Frame4() {
  return <div className="h-[166px] shrink-0 w-[177px]" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame1 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame3 />
      <div className="bg-[#d9d9d9] h-[5px] shrink-0 w-full" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-full relative shrink-0 w-[586px]">
      <div className="absolute h-[488.173px] left-[310px] top-[-8px] w-[293px]" data-name="image 13">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-38.79%] max-w-none top-0 w-[166.61%]" src={imgImage13} />
        </div>
      </div>
      <div className="absolute flex h-[244.725px] items-center justify-center left-0 top-[186px] w-[268.895px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.305deg]">
          <div className="h-[226.4px] relative w-[252.612px]" data-name="image 4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[133.36%] left-[-12.48%] max-w-none top-[-16.68%] w-[125.71%]" src={imgImage4} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[254px] top-[330px] w-[60px]">
        <div className="absolute inset-[-29.46px_-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 58.9117">
            <path d={svgPaths.p17af1780} fill="var(--stroke-0, #5150B6)" id="Arrow 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[40px] text-black text-center tracking-[-0.76px] w-full">Drop Bags to Return</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[32px] items-start pl-[32px] pr-0 py-0 relative size-full">
          <div className="flex h-full items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none h-full rotate-[270deg]">
              <div className="bg-[#d9d9d9] h-full w-[517px]" />
            </div>
          </div>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame9 />
      <Frame8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
          <Frame6 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function MakiCross() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="maki:cross">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="maki:cross">
          <path d={svgPaths.p76ad080} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex items-start justify-end px-[8px] py-0 relative w-full">
          <MakiCross />
        </div>
      </div>
    </div>
  );
}

function ShapeContainer() {
  return (
    <div className="absolute inset-[10.42%] overflow-clip" data-name="Shape container">
      <div className="absolute h-[85px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[82.5px]" data-name="Shape">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(103, 80, 164, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.5 85">
            <path d={svgPaths.p6ca600} fill="var(--fill-0, #6750A4)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LoadingIndicator() {
  return (
    <div className="overflow-clip relative shrink-0 size-[120px]" data-name="Loading indicator">
      <ShapeContainer />
    </div>
  );
}

function Item() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[32px] h-[366px] items-center justify-center left-[1136px] overflow-clip pb-[64px] pt-[12px] px-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] top-[179px] w-[778px]" data-name="Item 5">
      <Frame2 />
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[40px] text-black text-center text-nowrap tracking-[-0.76px]">You are dispensing 2 bags</p>
      <LoadingIndicator />
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[32px] items-center justify-center left-[201px] overflow-clip px-[12px] py-[64px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] top-[160px] w-[778px]" data-name="Item 5">
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[35px] text-black text-center tracking-[-0.665px] w-[434px]">Scanning and disinfecting your bags</p>
      <div className="h-[280px] relative shrink-0 w-[299.122px]" data-name="Screen Recording 2025-12-01 at 9.44.19 PM 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/28ebf0c72c229c1dde1d910ba2c7897561d9dd7d" />
        </video>
      </div>
      <Item />
    </div>
  );
}

export default function Flow() {
  return (
    <div className="bg-white relative size-full" data-name="Flow 2.1">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-start justify-center p-[6px] relative size-full">
          <Frame />
          <div className="absolute bg-[rgba(82,81,116,0.7)] h-[820px] left-0 top-0 w-[1180px]" />
          <Item1 />
        </div>
      </div>
    </div>
  );
}