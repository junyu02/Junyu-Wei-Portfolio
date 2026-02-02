import imgImage15 from "figma:asset/d7662d140664b01832fc8efa87a5f7de62481354.png";

function Group() {
  return (
    <div className="font-['Hiragino_Sans:W5',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[1.5] not-italic place-items-start relative shrink-0 text-black text-center">
      <p className="[grid-area:1_/_1] ml-[463.5px] mt-0 relative text-[60px] tracking-[-1.14px] translate-x-[-50%] w-[927px]">Thank you for Shopping!</p>
      <p className="[grid-area:1_/_1] ml-[463.5px] mt-[90px] relative text-[40px] tracking-[-0.76px] translate-x-[-50%] w-[927px]">Don’t forget to grab your bag.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-[#fffdfd] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center p-[32px] relative size-full">
          <Group />
          <div className="h-[502px] relative shrink-0 w-[386px]" data-name="image 15">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Flow() {
  return (
    <div className="bg-white relative size-full" data-name="Flow 2.6">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[6px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}