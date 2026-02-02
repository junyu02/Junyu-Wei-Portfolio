import svgPaths from "./svg-03bygj8wbv";
import clsx from "clsx";
import img3DAvatars25 from "figma:asset/0e6eadbacda221fc45e1a6ae68b1aebc124dd548.png";
import imgScreenshot20251201At94403Pm1 from "figma:asset/328316483416148d3c4f3b9837cd08dd50b2fa9b.png";
import imgImage4 from "figma:asset/3abffbca73af858074ede9ceb442f2fac1868598.png";
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Helper1 />
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[32px] text-black text-nowrap tracking-[-0.608px]">{text}</p>
    </div>
  );
}

function Helper1() {
  return (
    <div className="relative shrink-0 size-[35px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Group 632565">
          <circle cx="17.5" cy="17.5" fill="var(--fill-0, #007A23)" id="Ellipse 1" r="17.5" />
          <g id="check">
            <path d={svgPaths.p3ab71d00} fill="var(--fill-0, #CBFFDA)" id="icon" />
          </g>
        </g>
      </svg>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("[grid-area:1_/_1] flex h-[170px] items-center justify-center mt-0 relative w-[186.79px]", additionalClassNames)}>
      <div className="flex-none rotate-[4.305deg]">
        <ImageImage additionalClassNames="h-[157.271px] w-[175.479px]" />
      </div>
    </div>
  );
}
type ImageImageProps = {
  additionalClassNames?: string;
};

function ImageImage({ additionalClassNames = "" }: ImageImageProps) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.36%] left-[-12.48%] max-w-none top-[-16.68%] w-[125.71%]" src={imgImage4} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Hiragino_Sans:W5',sans-serif] gap-[4px] grow items-center leading-[1.5] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-black">
      <p className="relative shrink-0 text-[60px] tracking-[-1.14px] w-full">Return Bags</p>
      <p className="relative shrink-0 text-[40px] tracking-[-0.76px] w-full">Drop your bags into the return slot</p>
    </div>
  );
}

function Component3DAvatars() {
  return (
    <div className="relative shrink-0 size-[90px]" data-name="3D Avatars / 25">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3DAvatars25} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[177px]">
      <Component3DAvatars />
      <p className="font-['Hiragino_Sans:W6',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[25px] text-black text-center tracking-[-0.475px] w-[min-content]">Holly Parton</p>
      <p className="font-['Hiragino_Sans:W6',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[20px] text-black text-center tracking-[-0.38px] w-[min-content]">ID: 192283</p>
    </div>
  );
}

function Frame4() {
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
      <Frame4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-full relative shrink-0 w-[586px]">
      <div className="absolute h-[447.772px] left-[183px] top-0 w-[383px]" data-name="Screenshot 2025-12-01 at 9.44.03���PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251201At94403Pm1} />
      </div>
      <div className="absolute flex h-[244.725px] items-center justify-center left-0 top-[186px] w-[268.895px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.305deg]">
          <ImageImage additionalClassNames="h-[226.4px] w-[252.612px]" />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Helper additionalClassNames="ml-0" />
      <Helper additionalClassNames="ml-[62.33px]" />
      <Helper additionalClassNames="ml-[31.35px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#5150b6] content-stretch flex items-center justify-center left-0 px-[32px] py-[12px] rounded-[4px] top-[409px] w-[417px]" data-name="Button">
      <p className="font-['Hiragino_Sans:W6',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[28px] text-nowrap text-white tracking-[-0.532px]">End My Return</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[40px] text-black text-center tracking-[-0.76px] w-[min-content]">3 Bags Returned</p>
      <Group />
      <Text text="Bags disinfected" />
      <Text text="No damage on bags" />
      <Button />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[32px] items-start pl-[32px] pr-0 py-0 relative size-full">
          <Frame3 />
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