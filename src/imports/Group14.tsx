import svgPaths from "./svg-pj1rh4dhxf";
import imgAvatarImage300 from "figma:asset/59f02c4bcbdd523e71b3116ed91774491e9f7543.png";
import imgAvatarImage301 from "figma:asset/87aa96ce42e32ff7dc42df96ee27c9b7445f57c0.png";
import imgAvatarImage302 from "figma:asset/554284b69aede8a476ddb6b88431bce799d3461e.png";
import imgAvatarImage303 from "figma:asset/f2a6a44a8bdaef76e35d287a0160a1293e7c5dfb.png";
import imgAvatarImage304 from "figma:asset/5b486c908b4fcc3b5280695e7cabdee05a821527.png";

function Frame21() {
  return (
    <div className="bg-[#32a6f9] relative shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[122px] py-[11px] relative w-full">
          <p className="font-['Hepta_Slab:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[40px] text-center text-white w-[396px]">Primary Persona</p>
        </div>
      </div>
    </div>
  );
}

function AvatarImage300() {
  return (
    <div className="absolute h-[300px] left-[10px] rounded-[150px] top-[18px] w-[301px]" data-name="Avatar / Image-300">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[150px] size-full" src={imgAvatarImage300} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[337px] overflow-clip relative shrink-0 w-[321px]">
      <AvatarImage300 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Age</p>
      <p className="absolute h-[27px] right-[-2px] text-right top-0 w-[145px]">20</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Location</p>
      <p className="absolute h-[27px] right-[-2px] text-right top-0 w-[145px]">Austin, TX</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Occupation</p>
      <p className="absolute h-[27px] right-[-2px] text-right top-0 w-[145px]">Student</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Pronouns</p>
      <p className="absolute h-[27px] right-[-2px] text-right top-0 w-[145px]">He/Him</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[30px] h-[337px] items-start overflow-clip pb-[9px] pt-[29px] px-[10px] relative shrink-0 w-[321px]">
      <p className="font-['Hepta_Slab:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[30px] text-black w-full">James Mitchell</p>
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Skill</p>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Knob() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip />
    </div>
  );
}

function Fill() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob />
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[80px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame13 />
      </div>
      <Frame12 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Motivation</p>
      </div>
    </div>
  );
}

function Tooltip1() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function Knob1() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip1 />
    </div>
  );
}

function Fill1() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob1 />
    </div>
  );
}

function Slider1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[60px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill1 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame28 />
      </div>
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Working out with others</p>
      </div>
    </div>
  );
}

function Tooltip2() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function Knob2() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip2 />
    </div>
  );
}

function Fill2() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob2 />
    </div>
  );
}

function Slider2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[30px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame31 />
      </div>
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Daily Routine Strength</p>
      </div>
    </div>
  );
}

function Tooltip3() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Knob3() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip3 />
    </div>
  );
}

function Fill3() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob3 />
    </div>
  );
}

function Slider3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[110px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill3 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider3 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame33 />
      </div>
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Fitness Knowledge</p>
      </div>
    </div>
  );
}

function Tooltip4() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Knob4() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip4 />
    </div>
  );
}

function Fill4() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob4 />
    </div>
  );
}

function Slider4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[110px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill4 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame35 />
      </div>
      <Frame36 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[337px] items-center justify-center overflow-clip relative shrink-0 w-[321px]">
      <Frame27 />
      <Frame30 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[14px] h-[337px] items-start leading-[normal] not-italic overflow-clip px-[8px] py-[9px] relative shrink-0 text-black w-[321px]">
      <p className="h-[27px] relative shrink-0 text-[20px] w-[156px]">Bio</p>
      <p className="h-[263px] relative shrink-0 text-[15px] w-[304px]">James Mitchell, is a 20-year-old college student in Austin, Texas. James wants to workout to improve his health and physical appearance. One of the issues that he faces is that he usually works out alone and doesn’t have the social pressure to create a schedule and have a group workout sessions. He is open to finding a workout partner through an application. He also needs an application that will give him the opportunity to learn about how he can workout to best suit his goals, and also helps him form a routine so that working out becomes a part of his lifestyle.</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-start flex flex-wrap gap-[11px] items-start relative shrink-0 w-[653px]">
      <Frame2 />
      <Frame8 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function PrimaryPersona() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[11px] h-[767px] items-center left-0 overflow-clip pb-[12px] pt-0 px-0 top-0 w-[673px]" data-name="Primary Persona">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#416050] box-border content-stretch flex flex-col gap-[10px] items-center overflow-clip px-0 py-[11px] relative shrink-0 w-full">
      <p className="font-['Hepta_Slab:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[40px] text-center text-white w-full">Secondary Persona (1)</p>
    </div>
  );
}

function AvatarImage301() {
  return (
    <div className="relative rounded-[150px] shrink-0 size-[300px]" data-name="Avatar / Image-300">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[150px] size-full" src={imgAvatarImage301} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] items-start left-0 overflow-clip px-[10px] py-[18px] top-0">
      <AvatarImage301 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Age</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">18</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Location</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[180px]">New York City,NY</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Occupation</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">Student</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Pronouns</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">She/Her</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[30px] h-[337px] items-start left-[332px] overflow-clip pb-[9px] pt-[29px] px-[8px] top-0 w-[321px]">
      <p className="font-['Hepta_Slab:Regular',_sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[30px] text-black w-[min-content]">Abigail Williams</p>
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Skill</p>
      </div>
    </div>
  );
}

function Tooltip5() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function Knob5() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip5 />
    </div>
  );
}

function Fill5() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob5 />
    </div>
  );
}

function Slider5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[55px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill5 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider5 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame42 />
      </div>
      <Frame43 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Motivation</p>
      </div>
    </div>
  );
}

function Tooltip6() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Knob6() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip6 />
    </div>
  );
}

function Fill6() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob6 />
    </div>
  );
}

function Slider6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[20px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill6 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider6 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame45 />
      </div>
      <Frame46 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Working out with others</p>
      </div>
    </div>
  );
}

function Tooltip7() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Knob7() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip7 />
    </div>
  );
}

function Fill7() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob7 />
    </div>
  );
}

function Slider7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[20px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill7 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider7 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame48 />
      </div>
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Daily Routine Strength</p>
      </div>
    </div>
  );
}

function Tooltip8() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Knob8() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip8 />
    </div>
  );
}

function Fill8() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob8 />
    </div>
  );
}

function Slider8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[20px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill8 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider8 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame51 />
      </div>
      <Frame52 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Fitness Knowledge</p>
      </div>
    </div>
  );
}

function Tooltip9() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function Knob9() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip9 />
    </div>
  );
}

function Fill9() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob9 />
    </div>
  );
}

function Slider9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[60px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill9 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider9 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame54 />
      </div>
      <Frame55 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[337px] items-center justify-center left-0 overflow-clip top-[347px] w-[321px]">
      <Frame44 />
      <Frame47 />
      <Frame50 />
      <Frame53 />
      <Frame56 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[14px] h-[337px] items-start leading-[normal] left-[332px] not-italic overflow-clip px-[8px] py-[9px] text-black top-[347px] w-[321px]">
      <p className="h-[27px] relative shrink-0 text-[20px] w-[156px]">Bio</p>
      <p className="h-[263px] relative shrink-0 text-[15px] w-[304px]">Abigail is a 18 year old student, new to the big apple. She already has all of the knowledge that she needs to stay healthy and be active. Her biggest need is to be able to find friends that share her same interest and would be willing to workout together. For her an application that prescreens users is a very important aspect because she doesn’t want to be put in an unsafe situation</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[684px] relative shrink-0 w-[653px]">
      <Frame3 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function SecondaryPersona1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11px] items-center left-[746px] overflow-clip top-0 w-[673px]" data-name="Secondary Persona (1)">
      <Frame37 />
      <Frame23 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[#9f7887] box-border content-stretch flex flex-col gap-[10px] items-center overflow-clip px-0 py-[11px] relative shrink-0 w-full">
      <p className="font-['Hepta_Slab:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[40px] text-center text-white w-full">Secondary Persona (2)</p>
    </div>
  );
}

function AvatarImage302() {
  return (
    <div className="absolute left-[10px] rounded-[150px] size-[300px] top-[18px]" data-name="Avatar / Image-300">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[150px] size-full" src={imgAvatarImage302} />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white h-[337px] left-0 overflow-clip top-0 w-[321px]">
      <AvatarImage302 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Age</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">25</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Location</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">Seattle, WA</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Occupation</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">Software Dev</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Pronouns</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">He/Him</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[30px] h-[337px] items-start left-[332px] overflow-clip pb-[9px] pt-[29px] px-[8px] top-0 w-[321px]">
      <p className="font-['Hepta_Slab:Regular',_sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[30px] text-black w-[min-content]">Daniel Wilson</p>
      <Frame58 />
      <Frame59 />
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Skill</p>
      </div>
    </div>
  );
}

function Tooltip10() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Knob10() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip10 />
    </div>
  );
}

function Fill10() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob10 />
    </div>
  );
}

function Slider10() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[140px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill10 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider10 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame63 />
      </div>
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Motivation</p>
      </div>
    </div>
  );
}

function Tooltip11() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Knob11() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip11 />
    </div>
  );
}

function Fill11() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob11 />
    </div>
  );
}

function Slider11() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[19px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill11 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider11 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame66 />
      </div>
      <Frame67 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Working out with others</p>
      </div>
    </div>
  );
}

function Tooltip12() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Knob12() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip12 />
    </div>
  );
}

function Fill12() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob12 />
    </div>
  );
}

function Slider12() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[20px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill12 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider12 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame69 />
      </div>
      <Frame70 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Daily Routine Strength</p>
      </div>
    </div>
  );
}

function Tooltip13() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Knob13() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip13 />
    </div>
  );
}

function Fill13() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob13 />
    </div>
  );
}

function Slider13() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[105px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill13 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider13 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame72 />
      </div>
      <Frame73 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Fitness Knowledge</p>
      </div>
    </div>
  );
}

function Tooltip14() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Knob14() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip14 />
    </div>
  );
}

function Fill14() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob14 />
    </div>
  );
}

function Slider14() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[140px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill14 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="basis-0 bg-white grow h-[66px] min-h-px min-w-px overflow-clip relative shrink-0">
      <Slider14 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[303px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame75 />
      </div>
      <Frame76 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[337px] items-center justify-center left-0 overflow-clip top-[347px] w-[321px]">
      <Frame65 />
      <Frame68 />
      <Frame71 />
      <Frame74 />
      <Frame77 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[14px] h-[337px] items-start leading-[normal] left-[332px] not-italic overflow-clip px-[8px] py-[9px] text-black top-[347px] w-[321px]">
      <p className="h-[27px] relative shrink-0 text-[20px] w-[156px]">Bio</p>
      <p className="h-[263px] relative shrink-0 text-[15px] w-[304px]">Daniel is a software engineer at a large company in Seattle, Washington. Throughout his life Daniel didn’t need any additional exercise to stay healthy due to playing baseball. After stopping being active through sports Daniel began to see the heath side effects of not being active. Now he finds himself with a lot of motivation with a lack of understanding of where to start. For an application he needs a way to learn about how he can reach his goals, and sees the ability to connect with others as a good opprotunity.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[684px] relative shrink-0 w-[653px]">
      <Frame4 />
      <Frame62 />
      <Frame78 />
      <Frame79 />
    </div>
  );
}

function SecondaryPersona2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11px] items-center left-[1519px] overflow-clip top-0 w-[673px]" data-name="Secondary Persona (2)">
      <Frame57 />
      <Frame24 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[#9db1ba] box-border content-stretch flex flex-col gap-[10px] items-center overflow-clip px-0 py-[11px] relative shrink-0 w-[673px]">
      <p className="font-['Hepta_Slab:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[40px] text-center text-white w-full">Anti-Persona (1)</p>
    </div>
  );
}

function AvatarImage303() {
  return (
    <div className="absolute left-[10px] rounded-[150px] size-[300px] top-[18px]" data-name="Avatar / Image-300">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[150px] size-full" src={imgAvatarImage303} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white h-[337px] left-0 overflow-clip top-0 w-[321px]">
      <AvatarImage303 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Age</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">22</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Location</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">Dallas, TX</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Occupation</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">Body Builder</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Pronouns</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">He/Him</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[30px] h-[337px] items-start left-[332px] overflow-clip pb-[9px] pt-[29px] px-[8px] top-0 w-[321px]">
      <p className="font-['Hepta_Slab:Regular',_sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[30px] text-black w-[min-content]">Ben Johnson</p>
      <Frame81 />
      <Frame82 />
      <Frame83 />
      <Frame84 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative self-stretch shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Skill</p>
      </div>
    </div>
  );
}

function Tooltip15() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Knob15() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip15 />
    </div>
  );
}

function Fill15() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob15 />
    </div>
  );
}

function Slider15() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[5px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill15 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[66px] ml-0 mt-0 overflow-clip relative w-[179px]">
      <Slider15 />
    </div>
  );
}

function Group13() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <Frame87 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <Frame86 />
      <Group13 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative self-stretch shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Motivation</p>
      </div>
    </div>
  );
}

function Tooltip16() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Knob16() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip16 />
    </div>
  );
}

function Fill16() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob16 />
    </div>
  );
}

function Slider16() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[5px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill16 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[66px] ml-0 mt-0 overflow-clip relative w-[179px]">
      <Slider16 />
    </div>
  );
}

function Group15() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <Frame90 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <Frame89 />
      <Group15 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative self-stretch shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Working out with others</p>
      </div>
    </div>
  );
}

function Tooltip17() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Knob17() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip17 />
    </div>
  );
}

function Fill17() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob17 />
    </div>
  );
}

function Slider17() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[155px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill17 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[66px] ml-0 mt-0 overflow-clip relative w-[179px]">
      <Slider17 />
    </div>
  );
}

function Group12() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <Frame93 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <Frame92 />
      <Group12 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative self-stretch shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Daily Routine Strength</p>
      </div>
    </div>
  );
}

function Tooltip18() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Knob18() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip18 />
    </div>
  );
}

function Fill18() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob18 />
    </div>
  );
}

function Slider18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[5px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill18 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[66px] ml-0 mt-0 overflow-clip relative w-[179px]">
      <Slider18 />
    </div>
  );
}

function Group16() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <Frame96 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <Frame95 />
      <Group16 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative self-stretch shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Fitness Knowledge</p>
      </div>
    </div>
  );
}

function Tooltip19() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Knob19() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip19 />
    </div>
  );
}

function Fill19() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob19 />
    </div>
  );
}

function Slider19() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[5px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill19 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[66px] ml-0 mt-0 overflow-clip relative w-[179px]">
      <Slider19 />
    </div>
  );
}

function Group17() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <Frame99 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <Frame98 />
      <Group17 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[337px] items-start justify-center left-0 overflow-clip top-[347px] w-[321px]">
      <Frame88 />
      <Frame91 />
      <Frame94 />
      <Frame97 />
      <Frame100 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[14px] h-[337px] items-start leading-[normal] left-[332px] not-italic overflow-clip px-[8px] py-[9px] text-black top-[347px] w-[321px]">
      <p className="h-[27px] relative shrink-0 text-[20px] w-[156px]">Bio</p>
      <p className="h-[263px] relative shrink-0 text-[15px] w-[304px]">Ben Johnson is a 22 year old professional body builder based in Dallas. Ben just graduated with an exercise science degree and knows all about the benefits of exercise. In his current career he is an influencer and educator. Throughout his routine he is very strict and does all of his workouts alone because he needs to be as efficient as possible and keep them to a strict timeframe. Although Ben is a anti-persona there is a potential to view him as a potential employee that can help to inspire and educate those who use the application and make money doing so.</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[684px] relative shrink-0 w-[653px]">
      <Frame5 />
      <Frame85 />
      <Frame101 />
      <Frame102 />
    </div>
  );
}

function AntiPersona1() {
  return (
    <div className="absolute bg-white content-start flex flex-wrap gap-[11px] items-start justify-center left-[2292px] overflow-clip top-0 w-[673px]" data-name="Anti Persona (1)">
      <Frame80 />
      <Frame25 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-[#839885] box-border content-stretch flex flex-col gap-[10px] items-center overflow-clip px-0 py-[11px] relative shrink-0 w-[673px]">
      <p className="font-['Hepta_Slab:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[40px] text-center text-white w-full">Anti-Persona (2)</p>
    </div>
  );
}

function AvatarImage304() {
  return (
    <div className="absolute left-[10px] rounded-[150px] size-[300px] top-[18px]" data-name="Avatar / Image-300">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[150px] size-full" src={imgAvatarImage304} />
    </div>
  );
}

function Frame104() {
  return (
    <div className="absolute bg-white h-[337px] left-0 overflow-clip top-0 w-[321px]">
      <AvatarImage304 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Age</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">28</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Location</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[177px]">San Fransisco, CA</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Occupation</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">Teacher</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="font-['Inter:Regular',_sans-serif] font-normal h-[27px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[305px]">
      <p className="absolute h-[27px] left-0 top-0 w-[160px]">Pronouns</p>
      <p className="absolute h-[27px] left-[305px] text-right top-0 translate-x-[-100%] w-[145px]">He/Him</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[30px] h-[337px] items-start left-[332px] overflow-clip pb-[9px] pt-[29px] px-[8px] top-0 w-[321px]">
      <p className="font-['Hepta_Slab:Regular',_sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[30px] text-black w-[min-content]">Mark Stanton</p>
      <Frame105 />
      <Frame106 />
      <Frame107 />
      <Frame108 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative self-stretch shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Skill</p>
      </div>
    </div>
  );
}

function Tooltip20() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Knob20() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip20 />
    </div>
  );
}

function Fill20() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob20 />
    </div>
  );
}

function Slider20() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[95px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill20 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[66px] ml-0 mt-0 overflow-clip relative w-[179px]">
      <Slider20 />
    </div>
  );
}

function Group18() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <Frame111 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <Frame110 />
      <Group18 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative self-stretch shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Motivation</p>
      </div>
    </div>
  );
}

function Tooltip21() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Knob21() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip21 />
    </div>
  );
}

function Fill21() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob21 />
    </div>
  );
}

function Slider21() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[105px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill21 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[66px] ml-0 mt-0 overflow-clip relative w-[179px]">
      <Slider21 />
    </div>
  );
}

function Group19() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <Frame114 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <Frame113 />
      <Group19 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative self-stretch shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Working out with others</p>
      </div>
    </div>
  );
}

function Tooltip22() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function Knob22() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip22 />
    </div>
  );
}

function Fill22() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob22 />
    </div>
  );
}

function Slider22() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[55px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill22 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[66px] ml-0 mt-0 overflow-clip relative w-[179px]">
      <Slider22 />
    </div>
  );
}

function Group20() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <Frame117 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <Frame116 />
      <Group20 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative self-stretch shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Daily Routine Strength</p>
      </div>
    </div>
  );
}

function Tooltip23() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Knob23() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip23 />
    </div>
  );
}

function Fill23() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob23 />
    </div>
  );
}

function Slider23() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[20px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill23 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[66px] ml-0 mt-0 overflow-clip relative w-[179px]">
      <Slider23 />
    </div>
  );
}

function Group21() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <Frame120 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <Frame119 />
      <Group21 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative self-stretch shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[142px]">
        <p className="leading-[normal]">Fitness Knowledge</p>
      </div>
    </div>
  );
}

function Tooltip24() {
  return (
    <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-name="Tooltip">
      <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
          <path d={svgPaths.p207bd300} fill="var(--fill-0, #32A6F9)" id="bg" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Knob24() {
  return (
    <div className="absolute right-[-6px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Knob">
      <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g filter="url(#filter0_d_27_8326)" id="Ellipse">
              <circle cx="11" cy="9" fill="var(--fill-0, white)" r="6" />
              <circle cx="11" cy="9" r="6.5" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_27_8326" width="22" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_8326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_8326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip24 />
    </div>
  );
}

function Fill24() {
  return (
    <div className="bg-[#32a6f9] h-[4px] relative rounded-[100px] shrink-0 w-full" data-name="Fill">
      <Knob24 />
    </div>
  );
}

function Slider24() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[34px] items-end justify-center left-1/2 pb-[24px] pl-0 pr-[80px] pt-[5px] top-[26.5px] translate-x-[-50%] w-[161px]" data-name="Slider">
      <div className="absolute bg-[#32a6f9] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-name="BG" />
      <Fill24 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[66px] ml-0 mt-0 overflow-clip relative w-[179px]">
      <Slider24 />
    </div>
  );
}

function Group22() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <Frame123 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <Frame122 />
      <Group22 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[337px] items-center justify-center left-0 overflow-clip top-[347px] w-[321px]">
      <Frame112 />
      <Frame115 />
      <Frame118 />
      <Frame121 />
      <Frame124 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[14px] h-[337px] items-start leading-[normal] left-[332px] not-italic overflow-clip px-[8px] py-[9px] text-black top-[347px] w-[321px]">
      <p className="h-[27px] relative shrink-0 text-[20px] w-[156px]">Bio</p>
      <p className="h-[263px] relative shrink-0 text-[15px] w-[304px]">Mark is a 28 year old teacher in the Bay Area. Mark is a very healthy individual and rides his bike everyday. To track and compete with others on his bike rides he uses the Strava Application. For Mark his fitness goals are to stay slim and build up his cardiovascular health. In regards to his application use he doesn’t need any more assistance and is able to stay within his routines and health goals.</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[684px] relative shrink-0 w-[653px]">
      <Frame104 />
      <Frame109 />
      <Frame125 />
      <Frame126 />
    </div>
  );
}

function AntiPersona2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11px] items-center left-[3065px] overflow-clip top-0 w-[673px]" data-name="Anti Persona (2)">
      <Frame103 />
      <Frame26 />
    </div>
  );
}

export default function Group14() {
  return (
    <div className="relative size-full">
      <PrimaryPersona />
      <SecondaryPersona1 />
      <SecondaryPersona2 />
      <AntiPersona1 />
      <AntiPersona2 />
    </div>
  );
}