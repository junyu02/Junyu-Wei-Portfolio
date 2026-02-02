import svgPaths from "./svg-b15t860k9t";
import imgImage from "figma:asset/ace02bc13d1adc13b3ba19df2c2c34306a914f0d.png";
import imgImage3 from "figma:asset/dceb5916071a5bf3b271534eda563ef5f424b0ce.png";
import imgImage5 from "figma:asset/71ab14cba5cd149f1567fbe83532f362a37f7b3e.png";
import imgImage4 from "figma:asset/66486c54ffb161e8002194b569b004bc031811f2.png";
import imgImage9 from "figma:asset/42df5e82fe3d4b2598e750b1b27d664c2d7ab046.png";
import imgImage7 from "figma:asset/cc1e095162bd0d9488fc061108f26f46e80fb399.png";
import imgImage8 from "figma:asset/00f25cf69ed518ba49ebf4e47e3734e806e5e698.png";
type TextProps = {
  text: string;
};

function Text({ text, children }: React.PropsWithChildren<TextProps>) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[44px] justify-center leading-[0] relative shrink-0 text-[#a3a3a3] text-[24px] uppercase w-[193px]">
        <p className="leading-[normal]">{children}</p>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3a3d5b] text-[32px] w-[333px]">{text}</p>
    </div>
  );
}
type PillTextProps = {
  text: string;
};

function PillText({ text }: PillTextProps) {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center px-[24px] py-[8px] relative rounded-[56px] shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[34px] text-black text-nowrap">{text}</p>
    </div>
  );
}
type RowItemProps = {
  text: string;
  text1: string;
};

function RowItem({ text, text1 }: RowItemProps) {
  return <Text text={text1}>{text}</Text>;
}

function RowItem1() {
  return <Text text="High">{`TEch  literacy`}</Text>;
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Details">
      <RowItem text="Age" text1="30" />
      <RowItem text="Education" text1="Masters in Business" />
      <RowItem text="Status" text1="Single" />
      <RowItem text="Occupation" text1="Finance" />
      <RowItem text="Location" text1="London" />
      <RowItem1 />
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[36px] items-center overflow-clip px-0 py-[48px] relative rounded-[10px] shrink-0 w-[619px]" data-name="Profile">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#6a24ff] text-[48px] text-center text-nowrap">Alex</p>
      <div className="relative shrink-0 size-[409px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="409" src={imgImage} width="409" />
      </div>
      <Details />
    </div>
  );
}

function Quote() {
  return (
    <div className="bg-white content-stretch flex gap-[24px] items-start overflow-clip p-[32px] relative rounded-[15px] shrink-0" data-name="Quote">
      <div className="h-[33px] relative shrink-0 w-[38px]" data-name="Content">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(106, 36, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 33">
            <path d={svgPaths.p7003980} fill="var(--fill-0, #6A24FF)" id="Content" />
          </svg>
        </div>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3a3d5b] text-[34px] w-[493px]">{`"It's a tragicomedy. I am the owner of multiple, perfectly good perfectly good reusable bags... But they are all permanent residents of a kitchen cupboard."`}</p>
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[16px] items-center p-[4px] relative w-full">
          <PillText text="Ritualistic" />
          <PillText text="Self-Critical" />
          <PillText text="Particular" />
          <PillText text="Forgetful (Bags)" />
        </div>
      </div>
    </div>
  );
}

function Personality() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[36px] py-[32px] relative rounded-[15px] shrink-0" data-name="Personality">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1d2254] text-[36px] w-[557px]">Personality</p>
      <Row />
    </div>
  );
}

function Stacked() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[625px]" data-name="Stacked">
      <Profile />
      <Quote />
      <Personality />
    </div>
  );
}

function Bio() {
  return (
    <div className="bg-white h-[401px] relative rounded-[15px] shrink-0 w-full" data-name="Bio">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] p-[32px] relative size-full">
          <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#1d2254] text-[36px] text-nowrap">Bio</p>
          <p className="font-['Manrope:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#3a3d5b] text-[32px] w-[min-content]">Alex works in finance in London and has a structured life. Shopping is a daily ritual on the way home from the tube, not a weekly chore. She values personally selecting ingredients, refusing online grocery shopping. Living alone, her biggest frustration is owning many reusable bags but always forgetting them, resulting in a cupboard full of plastic bags.</p>
        </div>
      </div>
    </div>
  );
}

function Bullet() {
  return (
    <div className="content-stretch flex gap-[16px] items-start leading-[normal] relative shrink-0 w-full" data-name="Bullet">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#6a24ff] text-[36px] text-nowrap">•</p>
      <p className="basis-0 font-['Manrope:Medium',sans-serif] font-medium grow min-h-px min-w-px relative shrink-0 text-[#3a3d5b] text-[32px]">Control over ingredient selection (e.g., avocado ripeness)</p>
    </div>
  );
}

function Bullet1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start leading-[normal] relative shrink-0 w-full" data-name="Bullet">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#6a24ff] text-[36px] text-nowrap">•</p>
      <p className="basis-0 font-['Manrope:Medium',sans-serif] font-medium grow min-h-px min-w-px relative shrink-0 text-[#3a3d5b] text-[32px]">{`﻿﻿Seamless carrying solution integrated into daily EDC.`}</p>
    </div>
  );
}

function Bullet2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start leading-[normal] relative shrink-0 w-full" data-name="Bullet">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#6a24ff] text-[36px] text-nowrap">•</p>
      <p className="basis-0 font-['Manrope:Medium',sans-serif] font-medium grow min-h-px min-w-px relative shrink-0 text-[#3a3d5b] text-[32px]">{`﻿﻿Elegant, smart carrying tool, not 'Tetris' packing or painful handles.`}</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Bullet />
      <Bullet1 />
      <Bullet2 />
    </div>
  );
}

function CoreNeeds() {
  return (
    <div className="bg-white h-[355px] relative rounded-[15px] shrink-0 w-full" data-name="Core needs">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1d2254] text-[36px] text-nowrap">Core needs</p>
          <List />
        </div>
      </div>
    </div>
  );
}

function Bullet3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start leading-[normal] relative shrink-0 w-full" data-name="Bullet">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#6a24ff] text-[36px] text-nowrap">•</p>
      <p className="basis-0 font-['Manrope:Medium',sans-serif] font-medium grow min-h-px min-w-px relative shrink-0 text-[#3a3d5b] text-[32px]">{`﻿﻿Social pressure at checkout leading to buying unwanted bags.`}</p>
    </div>
  );
}

function Bullet4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start leading-[normal] relative shrink-0 w-full" data-name="Bullet">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#6a24ff] text-[36px] text-nowrap">•</p>
      <p className="basis-0 font-['Manrope:Medium',sans-serif] font-medium grow min-h-px min-w-px relative shrink-0 text-[#3a3d5b] text-[32px]">{`﻿﻿Unreliable bags breaking, spilling groceries.`}</p>
    </div>
  );
}

function Bullet5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start leading-[normal] relative shrink-0 w-full" data-name="Bullet">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#6a24ff] text-[36px] text-nowrap">•</p>
      <p className="basis-0 font-['Manrope:Medium',sans-serif] font-medium grow min-h-px min-w-px relative shrink-0 text-[#3a3d5b] text-[32px]">{`﻿﻿Hoarding guilt from ~60 plastic bags under the sink.`}</p>
    </div>
  );
}

function Bullet6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start leading-[normal] relative shrink-0 w-full" data-name="Bullet">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#6a24ff] text-[36px] text-nowrap">•</p>
      <p className="basis-0 font-['Manrope:Medium',sans-serif] font-medium grow min-h-px min-w-px relative shrink-0 text-[#3a3d5b] text-[32px]">{`﻿﻿Physical discomfort from thin plastic bag handles.`}</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Bullet3 />
      <Bullet4 />
      <Bullet5 />
      <Bullet6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1d2254] text-[36px] text-nowrap">Painpoint</p>
      <List1 />
    </div>
  );
}

function Frustrations() {
  return (
    <div className="bg-white h-[420px] relative rounded-[15px] shrink-0 w-full" data-name="Frustrations">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      <Frustrations />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <div className="h-[98px] relative shrink-0 w-[110px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="h-[97px] relative shrink-0 w-[109px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="h-[97px] relative shrink-0 w-[110px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="h-[96.5px] relative shrink-0 w-[105px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
      <div className="h-[98px] relative shrink-0 w-[110px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <div className="h-[98px] relative shrink-0 w-[110px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImage8} />
      </div>
    </div>
  );
}

function Brands() {
  return (
    <div className="bg-white relative rounded-[15px] shrink-0 w-full" data-name="Brands">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
          <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1d2254] text-[36px] text-nowrap">Brands</p>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return <div className="content-stretch flex gap-[32px] items-center shrink-0 w-full" data-name="Row" />;
}

function Stacked1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[92px] grow h-[1579px] items-center min-h-px min-w-px relative shrink-0" data-name="Stacked">
      <Bio />
      <CoreNeeds />
      <Frame2 />
      <Brands />
      <Row1 />
    </div>
  );
}

export default function UxPersona() {
  return (
    <div className="bg-[#1d2254] relative rounded-[32px] size-full" data-name="UX Persona">
      <div className="size-full">
        <div className="content-stretch flex gap-[29px] items-start overflow-clip p-[50px] relative size-full">
          <Stacked />
          <Stacked1 />
        </div>
      </div>
    </div>
  );
}