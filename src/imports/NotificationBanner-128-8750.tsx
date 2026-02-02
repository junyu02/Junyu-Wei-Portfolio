import svgPaths from "./svg-dmuaobk6wq";
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
    <div className="relative shrink-0 size-[35.913px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9128 35.9128">
        <g id="Icon">
          <path d={svgPaths.pe808b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.74092" />
          <path d="M4.64322 9.0294H31.2696" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.74092" />
          <path d={svgPaths.p93fbb00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.74092" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-black relative rounded-[14.964px] shadow-[0px_1.496px_4.489px_0px_rgba(0,0,0,0.1),0px_1.496px_2.993px_-1.496px_rgba(0,0,0,0.1)] shrink-0 size-[62.847px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <Wrapper additionalClassNames="h-[29.179px] opacity-70 w-[101.858px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[29.179px] left-0 not-italic text-[#1d1d1f] text-[19.453px] text-nowrap top-[1.5px] tracking-[0.3723px] uppercase">supermarket APP</p>
    </Wrapper>
  );
}

function Text() {
  return (
    <Wrapper additionalClassNames="h-[26.935px] w-[35.504px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[26.935px] left-0 not-italic text-[17.956px] text-[rgba(29,29,31,0.6)] text-nowrap top-[1.5px]">now</p>
    </Wrapper>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[29.179px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Text />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28.057px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28.057px] left-0 not-italic text-[#1d1d1f] text-[22.446px] text-nowrap top-[-0.75px] tracking-[-0.3507px]">5 days left</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[57.61px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[57.793px] leading-[28.805px] left-[-0.11px] not-italic text-[20.949px] text-[rgba(29,29,31,0.9)] top-[-0.3px] tracking-[-0.225px] w-[472.545px]">Please note that your rental period is about to end. If you no longer need the bag, return it to a nearby store.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[126.817px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.993px] items-start relative size-full">
        <Container1 />
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[20.949px] h-[142.217px] items-start relative shrink-0 w-[575.1px]" data-name="Container">
      <Container />
      <Container2 />
    </div>
  );
}

export default function NotificationBanner() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[35.913px] size-full" data-name="NotificationBanner">
      <div aria-hidden="true" className="absolute border-[1.496px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[35.913px] shadow-[0px_29.927px_37.409px_-7.482px_rgba(0,0,0,0.1),0px_11.971px_14.964px_-8.978px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[1.496px] pt-[25.438px] px-[25.438px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}