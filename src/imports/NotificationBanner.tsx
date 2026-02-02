import svgPaths from "./svg-kpg12calit";
import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[63.383px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.3829 63.3829">
        <g id="Icon">
          <path d={svgPaths.p137e6500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.60239" />
          <path d="M8.19489 15.936H55.188" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.60239" />
          <path d={svgPaths.p1de2d000} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.60239" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-black relative rounded-[26.41px] shadow-[0px_2.641px_7.923px_0px_rgba(0,0,0,0.1),0px_2.641px_5.282px_-2.641px_rgba(0,0,0,0.1)] shrink-0 size-[110.92px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <Wrapper additionalClassNames="h-[51.499px] opacity-70 w-[179.771px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[51.499px] left-0 not-italic text-[#1d1d1f] text-[34.332px] text-nowrap top-[2.64px] tracking-[0.6571px] uppercase">supermarket APP</p>
    </Wrapper>
  );
}

function Text() {
  return (
    <Wrapper additionalClassNames="h-[47.537px] w-[62.661px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[47.537px] left-0 not-italic text-[31.691px] text-[rgba(29,29,31,0.6)] text-nowrap top-[2.64px]">now</p>
    </Wrapper>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[51.499px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Text />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[49.518px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[49.518px] left-0 not-italic text-[#1d1d1f] text-[39.614px] text-nowrap top-[-1.32px] tracking-[-0.619px]">5 days left</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[101.677px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[102px] leading-[50.838px] left-[-0.2px] not-italic text-[36.973px] text-[rgba(29,29,31,0.9)] top-[-0.52px] tracking-[-0.3972px] w-[834px]">Please note that your rental period is about to end. If you no longer need the bag, return it to a nearby store.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[223.821px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.282px] items-start relative size-full">
        <Container1 />
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[36.973px] h-[251px] items-start relative shrink-0 w-[1015px]" data-name="Container">
      <Container />
      <Container2 />
    </div>
  );
}

export default function NotificationBanner() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[63.383px] size-full" data-name="NotificationBanner">
      <div aria-hidden="true" className="absolute border-[2.641px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[63.383px] shadow-[0px_52.819px_66.024px_-13.205px_rgba(0,0,0,0.1),0px_21.128px_26.41px_-15.846px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[2.641px] pt-[44.896px] px-[44.896px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}