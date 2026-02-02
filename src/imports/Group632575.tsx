import svgPaths from "./svg-k8wybmwdpf";
import clsx from "clsx";
import img3DAvatars25 from "figma:asset/0e6eadbacda221fc45e1a6ae68b1aebc124dd548.png";
import imgScreenshot20251201At94403Pm1 from "figma:asset/328316483416148d3c4f3b9837cd08dd50b2fa9b.png";
import imgImage4 from "figma:asset/3abffbca73af858074ede9ceb442f2fac1868598.png";
import imgImage6 from "figma:asset/8a31e8ab7a22d4b3ad22fe02cd115574c4c55714.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex gap-[32px] items-start pl-[32px] pr-0 py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}
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
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Helper6 />
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[32px] text-black text-nowrap tracking-[-0.608px]">{text}</p>
    </div>
  );
}

function Helper6() {
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
type Helper5Props = {
  additionalClassNames?: string;
};

function Helper5({ additionalClassNames = "" }: Helper5Props) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("[grid-area:1_/_1] flex h-[170px] items-center justify-center mt-0 relative w-[186.79px]", additionalClassNames)}>
      <div className="flex-none rotate-[4.305deg]">
        <ImageImage additionalClassNames="h-[157.271px] w-[175.479px]" />
      </div>
    </div>
  );
}

function Helper4() {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="flex h-full items-center justify-center relative shrink-0 w-[5px]">
      <div className="flex-none h-full rotate-[270deg]">
        <div className="bg-[#d9d9d9] h-full w-[517px]" />
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("absolute content-stretch flex items-center justify-center left-0 px-[32px] py-[12px] rounded-[4px] top-[409px] w-[417px]", additionalClassNames)}>
      <p className="font-['Hiragino_Sans:W6',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[28px] text-nowrap text-white tracking-[-0.532px]">{text}</p>
    </div>
  );
}
type Helper3Props = {
  additionalClassNames?: string;
};

function Helper3({ additionalClassNames = "" }: Helper3Props) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("[grid-area:1_/_1] flex h-[300px] items-center justify-center mt-0 relative w-[329.63px]", additionalClassNames)}>
      <div className="flex-none rotate-[4.305deg]">
        <ImageImage additionalClassNames="h-[277.537px] w-[309.669px]" />
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

function Image() {
  return (
    <div className="h-full relative shrink-0 w-[586px]">
      <div className="absolute h-[447.772px] left-[183px] top-0 w-[383px]" data-name="Screenshot 2025-12-01 at 9.44.03 PM 1">
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

function Helper2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Helper text="Return Bags" text1="Drop your bags into the return slot" />
      <Helper1 text="Holly Parton" text1="ID: 192283" />
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[177px]">
      <Helper3DAvatarsImage />
      <p className="font-['Hiragino_Sans:W6',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[25px] text-black text-center tracking-[-0.475px] w-[min-content]">{text}</p>
      <p className="font-['Hiragino_Sans:W6',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[20px] text-black text-center tracking-[-0.38px] w-[min-content]">{text1}</p>
    </div>
  );
}

function Helper3DAvatarsImage() {
  return (
    <div className="relative shrink-0 size-[90px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3DAvatars25} />
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Hiragino_Sans:W5',sans-serif] gap-[4px] grow items-center leading-[1.5] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-black">
      <p className="relative shrink-0 text-[60px] tracking-[-1.14px] w-full">{text}</p>
      <p className="relative shrink-0 text-[40px] tracking-[-0.76px] w-full">{text1}</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Helper2 />
      <div className="bg-[#d9d9d9] h-[5px] shrink-0 w-full" />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Helper3 additionalClassNames="ml-0" />
      <Helper3 additionalClassNames="ml-[110px]" />
      <Helper3 additionalClassNames="ml-[55.31px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[40px] text-black text-center tracking-[-0.76px] w-[min-content]">3 Bags Returned</p>
      <Group />
      <Text text="End My Return" additionalClassNames="bg-[#b5b5b5]" />
    </div>
  );
}

function Frame17() {
  return (
    <Wrapper>
      <Helper4 />
      <Frame4 />
    </Wrapper>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Image />
      <Frame17 />
    </div>
  );
}

function Frame() {
  return (
    <Wrapper1>
      <Frame7 />
      <Frame6 />
    </Wrapper1>
  );
}

function Flow() {
  return (
    <div className="absolute bg-white content-stretch flex h-[820px] items-start justify-center left-0 overflow-clip p-[6px] top-[820px] w-[1180px]" data-name="Flow 2.1">
      <Frame />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Helper2 />
      <div className="bg-[#d9d9d9] h-[5px] shrink-0 w-full" />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Helper5 additionalClassNames="ml-0" />
      <Helper5 additionalClassNames="ml-[62.33px]" />
      <Helper5 additionalClassNames="ml-[31.35px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[40px] text-black text-center tracking-[-0.76px] w-[min-content]">3 Bags Returned</p>
      <Group1 />
      <Text1 text="Bags disinfected" />
      <Text1 text="No damage on bags" />
      <Text text="End My Return" additionalClassNames="bg-[#5150b6]" />
    </div>
  );
}

function Frame18() {
  return (
    <Wrapper>
      <Helper4 />
      <Frame9 />
    </Wrapper>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Image />
      <Frame18 />
    </div>
  );
}

function Frame1() {
  return (
    <Wrapper1>
      <Frame8 />
      <Frame10 />
    </Wrapper1>
  );
}

function Flow1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[820px] items-start justify-center left-[1180px] overflow-clip p-[6px] top-[820px] w-[1180px]" data-name="Flow 2.1">
      <Frame1 />
    </div>
  );
}

function Frame11() {
  return <div className="h-[166px] shrink-0 w-[177px]" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Helper text="Dispense Bags" text1="How many bags would you like?" />
      <Frame11 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame12 />
      <div className="bg-[#d9d9d9] h-[5px] shrink-0 w-full" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-[586px]">
      <ButtonText text="1" additionalClassNames="bg-[#8684ff]" />
      <ButtonText text="2" additionalClassNames="bg-[#5150b6]" />
      <ButtonText text="3" additionalClassNames="bg-[#8684ff]" />
      <ButtonText text="4" additionalClassNames="bg-[#8684ff]" />
      <ButtonText text="5" additionalClassNames="bg-[#8684ff]" />
      <ButtonText text="+" additionalClassNames="bg-[#8684ff]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Helper3 additionalClassNames="ml-0" />
      <Helper3 additionalClassNames="ml-[110px]" />
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

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[40px] text-black text-center tracking-[-0.76px] w-[min-content]">2 Bags Selected</p>
      <Group2 />
      <Button />
    </div>
  );
}

function Frame15() {
  return (
    <Wrapper>
      <Helper4 />
      <Frame14 />
    </Wrapper>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame13 />
      <Frame15 />
    </div>
  );
}

function Frame2() {
  return (
    <Wrapper1>
      <Frame5 />
      <Frame16 />
    </Wrapper1>
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

function Frame3() {
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
      <Frame3 />
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[40px] text-black text-center text-nowrap tracking-[-0.76px]">You are dispensing 2 bags</p>
      <LoadingIndicator />
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[32px] items-center justify-center left-[201px] overflow-clip px-[12px] py-[64px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] top-[190px] w-[778px]" data-name="Item 5">
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[40px] text-black text-center text-nowrap tracking-[-0.76px]">Bags are being dispensed</p>
      <div className="h-[246px] relative shrink-0 w-[226px]" data-name="Screen Recording 2025-12-01 at 9.59.20 PM 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/a9654927df88e67caa48002e0355802b1bf96f0e" />
        </video>
      </div>
      <Item />
    </div>
  );
}

function Flow2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] h-[820px] items-start justify-center left-[1180px] overflow-clip p-[6px] top-0 w-[1180px]" data-name="Flow 2.1">
      <Frame2 />
      <div className="absolute bg-[rgba(82,81,116,0.7)] h-[820px] left-0 top-0 w-[1180px]" />
      <Item1 />
    </div>
  );
}

export default function Group3() {
  return (
    <div className="relative size-full">
      <Flow />
      <Flow1 />
      <Flow2 />
      <div className="absolute h-[822px] left-0 top-0 w-[1180px]" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[124.82%] left-0 max-w-none top-[-24.82%] w-full" src={imgImage6} />
        </div>
      </div>
    </div>
  );
}