import svgPaths from "./svg-mwmu3is0on";
import clsx from "clsx";
import imgImageRemovebgPreview21 from "figma:asset/9006cc523d3ab6d3178e081d74513c668c0f1679.png";
import imgImage5 from "figma:asset/3abffbca73af858074ede9ceb442f2fac1868598.png";
import imgImageRemovebgPreview31 from "figma:asset/97b06973f4456dc821f9a8a8d29e4e04579de234.png";
import imgImageRemovebgPreview2 from "figma:asset/925cfe144bc6e9d812bc34c3077f94db1d95e87b.png";
import imgImage9 from "figma:asset/3c2d746a3e23f1f40a0210beadd13fa5730df65a.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-0 relative shrink-0 w-[60px]">
      <div className="absolute inset-[-29.46px_-6.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 58.9117">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Frame632572Helper() {
  return (
    <Wrapper>
      <path d={svgPaths.p17af1780} fill="var(--stroke-0, #5150B6)" id="Arrow 2" />
    </Wrapper>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("[grid-area:1_/_1] flex h-[51.256px] items-center justify-center mt-0 relative w-[56.318px]", additionalClassNames)}>
      <div className="flex-none rotate-[184.305deg] scale-y-[-100%]">
        <Group632562ImageImage />
      </div>
    </div>
  );
}

function Group632562ImageImage() {
  return (
    <div className="h-[47.418px] relative w-[52.908px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.36%] left-[-12.48%] max-w-none top-[-16.68%] w-[125.71%]" src={imgImage5} />
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col font-['Hiragino_Sans:W5',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-black w-full">
      <p className="leading-[1.5] relative shrink-0 text-[28px] tracking-[-0.532px] w-full">{text}</p>
      <p className="leading-[1.4] relative shrink-0 text-[18px] tracking-[-0.342px] w-full">{text1}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Hiragino_Sans:W5',sans-serif] gap-[4px] grow items-center leading-[1.5] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-black">
      <p className="relative shrink-0 text-[60px] tracking-[-1.14px] w-full">Dispense Complete!</p>
      <p className="relative shrink-0 text-[40px] tracking-[-0.76px] w-full">Here’s a typical journey of your bag:</p>
    </div>
  );
}

function Frame2() {
  return <div className="h-[166px] shrink-0 w-[177px]" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame3 />
      <div className="bg-[#d9d9d9] h-[5px] shrink-0 w-full" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[174px]">
      <div className="aspect-[499/500] relative shrink-0 w-full" data-name="image-removebg-preview (2) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageRemovebgPreview21} />
      </div>
      <Helper text="Rent!" text1="Bags dispensed" />
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[71px] mt-[5px] place-items-start relative">
      <Helper1 additionalClassNames="ml-0" />
      <Helper1 additionalClassNames="ml-[14px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[174px]" data-name="image-removebg-preview (3) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageRemovebgPreview31} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Helper text="Use" text1="Shop with Bag" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center relative shrink-0 w-[174px]">
      <Group1 />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Helper text="Return" text1="Bring bags back" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[174px]">
      <div className="relative shrink-0 size-[174px]" data-name="image-removebg-preview 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageRemovebgPreview2} />
      </div>
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Helper text="Reward" text1="Get discounts" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[174px]">
      <div className="aspect-[512/512] relative shrink-0 w-full" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[30px] items-center justify-center relative shrink-0 w-full">
      <Frame5 />
      <Wrapper>
        <path d={svgPaths.p17af1780} fill="var(--stroke-0, #5150B6)" id="Arrow 1" />
      </Wrapper>
      <Frame10 />
      <Frame632572Helper />
      <Frame11 />
      <Frame632572Helper />
      <Frame12 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5150b6] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative w-full">
          <p className="font-['Hiragino_Sans:W6',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[28px] text-nowrap text-white tracking-[-0.532px]">Got It!</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
          <Frame4 />
          <Frame9 />
          <Button />
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