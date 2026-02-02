import img3DAvatars25 from "figma:asset/0e6eadbacda221fc45e1a6ae68b1aebc124dd548.png";
import imgImage9 from "figma:asset/3c2d746a3e23f1f40a0210beadd13fa5730df65a.png";
import imgImage11 from "figma:asset/b884343b5ae660e78fba4e8c48f23e9178985ecf.png";
import imgImage20 from "figma:asset/74369a6fbd9908659183b23ae8b7a949df983297.png";
import imgImage19 from "figma:asset/17b5d0f54ac8476af5bee4b51b71dbf88692358f.png";

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Hiragino_Sans:W5',sans-serif] gap-[4px] grow items-center leading-[1.5] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-black">
      <p className="relative shrink-0 text-[60px] tracking-[-1.14px] w-full">Return Complete!</p>
      <p className="relative shrink-0 text-[40px] tracking-[-0.76px] w-full">Quick summary of your return:</p>
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

function Frame5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1104px]">
      <Frame5 />
      <div className="bg-[#d9d9d9] h-[5px] shrink-0 w-full" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Hiragino_Sans:W5',sans-serif] gap-[4px] grow items-start justify-center min-h-px min-w-px not-italic relative self-stretch shrink-0 text-black">
      <p className="leading-[1.5] relative shrink-0 text-[32px] tracking-[-0.608px] w-full">
        <span className="font-['Hiragino_Sans:W4',sans-serif] not-italic">You’ve received</span>
        <span className="font-['Hiragino_Sans:W7',sans-serif] not-italic">{` £6`}</span>
        <span>{` off your next purchase`}</span>
      </p>
      <p className="leading-[1.4] relative shrink-0 text-[24px] tracking-[-0.456px] w-full">Vouchers and discounts can be used in your next journey!</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[110px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[110px]">
      <div className="aspect-[1288/1017] relative shrink-0 w-full" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px not-italic relative self-stretch shrink-0 text-black">
      <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[1.5] relative shrink-0 text-[32px] tracking-[-0.608px] w-full">
        <span>{`120 `}</span>
        <span className="font-['Hiragino_Sans:W4',sans-serif] not-italic">Disposable Bags Saved to Date</span>
      </p>
      <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[-0.456px] w-full">equivalent to the amount consumed by a sea turtle over its entire lifetime!</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame10 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame6 />
      <Frame8 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5150b6] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative w-full">
          <p className="font-['Hiragino_Sans:W6',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[28px] text-nowrap text-white tracking-[-0.532px]">{`Finish & Exit`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[64px] pt-[32px] px-[32px] relative size-full">
          <Frame4 />
          <Frame9 />
          <Button />
          <div className="absolute left-[951px] size-[143px] top-[489px]" data-name="image 20">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Flow() {
  return (
    <div className="bg-white relative size-full" data-name="Flow 2.1">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-start justify-center p-[6px] relative size-full">
          <Frame />
          <div className="absolute h-[164.705px] left-[802.51px] top-[520.32px] w-[302.116px]" data-name="image 19">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage19} />
          </div>
        </div>
      </div>
    </div>
  );
}