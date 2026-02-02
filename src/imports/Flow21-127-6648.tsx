import imgScreenshot20251201At94403Pm1 from "figma:asset/328316483416148d3c4f3b9837cd08dd50b2fa9b.png";
import imgImage4 from "figma:asset/3abffbca73af858074ede9ceb442f2fac1868598.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Hiragino_Sans:W5',sans-serif] gap-[4px] items-center leading-[1.5] not-italic relative self-stretch shrink-0 text-black w-[1066px]">
      <p className="relative shrink-0 text-[60px] tracking-[-1.14px] w-full">Return Bags</p>
      <p className="relative shrink-0 text-[40px] tracking-[-0.76px] w-full">Place your bags into the return slot and close door</p>
    </div>
  );
}

function Frame3() {
  return <div className="h-[166px] shrink-0 w-[177px]" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame2 />
      <div className="bg-[#d9d9d9] h-[5px] shrink-0 w-full" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-full relative shrink-0 w-[586px]">
      <div className="absolute h-[447.772px] left-[183px] top-0 w-[383px]" data-name="Screenshot 2025-12-01 at 9.44.03 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251201At94403Pm1} />
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
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[40px] text-black text-center tracking-[-0.76px] w-full">Drop Bags to Return</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[32px] items-start pl-[32px] pr-0 py-0 relative size-full">
          <div className="flex h-full items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none h-full rotate-[270deg]">
              <div className="bg-[#d9d9d9] h-full w-[517px]" />
            </div>
          </div>
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
          <Frame5 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

export default function Flow() {
  return (
    <div className="bg-white relative size-full" data-name="Flow 2.1">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[6px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}