import svgPaths from "./svg-7utmj7frys";
import clsx from "clsx";
import imgImage4 from "figma:asset/3abffbca73af858074ede9ceb442f2fac1868598.png";
type ButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonText({ text, additionalClassNames = "" }: ButtonTextProps) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center px-[64px] py-[32px] relative rounded-[4px] shrink-0", additionalClassNames)}>
      <p className="font-['Hiragino_Sans:W6',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[64px] text-nowrap text-white tracking-[-1.216px]">{text}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Hiragino_Sans:W5',sans-serif] gap-[4px] grow items-center leading-[1.5] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-black">
      <p className="relative shrink-0 text-[60px] tracking-[-1.14px] w-full">Dispense Bags</p>
      <p className="relative shrink-0 text-[40px] tracking-[-0.76px] w-full">How many bags would you like?</p>
    </div>
  );
}

function Frame2() {
  return <div className="h-[166px] shrink-0 w-[177px]" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame8 />
      <div className="bg-[#d9d9d9] h-[5px] shrink-0 w-full" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-[586px]">
      <ButtonText text="1" additionalClassNames="bg-[#5150b6]" />
      <ButtonText text="2" additionalClassNames="bg-[#8684ff]" />
      <ButtonText text="3" additionalClassNames="bg-[#8684ff]" />
      <ButtonText text="4" additionalClassNames="bg-[#8684ff]" />
      <ButtonText text="5" additionalClassNames="bg-[#8684ff]" />
      <ButtonText text="+" additionalClassNames="bg-[#8684ff]" />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex h-[300px] items-center justify-center ml-0 mt-0 relative w-[329.63px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.305deg]">
          <div className="h-[277.537px] relative w-[309.669px]" data-name="image 4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[133.36%] left-[-12.48%] max-w-none top-[-16.68%] w-[125.71%]" src={imgImage4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5150b6] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative w-full">
          <p className="font-['Hiragino_Sans:W6',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[28px] text-nowrap text-white tracking-[-0.532px]">Confirm Selection</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[40px] text-black text-center tracking-[-0.76px] w-[min-content]">1 Bag Selected</p>
      <Group />
      <Button />
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
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame6 />
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
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function KeyboardReturn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_return">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_return">
          <path d={svgPaths.p12852cc0} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#868686] content-stretch flex gap-[6px] items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <KeyboardReturn />
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.456px]">Go Back</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[38px] rounded-[4px] top-[679px]">
      <Button1 />
    </div>
  );
}

export default function Flow() {
  return (
    <div className="bg-white relative size-full" data-name="Flow 2.1">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-start justify-center p-[6px] relative size-full">
          <Frame />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}