import svgPaths from "./svg-decmxfwv85";
import clsx from "clsx";
type Text5Props = {
  additionalClassNames?: string;
};

function Text5({ children, additionalClassNames = "" }: React.PropsWithChildren<Text5Props>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-20%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.087 70.087">
        {children}
      </svg>
    </div>
  );
}

function Icon4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[43.166px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.1663 43.1663">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type Icon3Helper1Props = {
  additionalClassNames?: string;
};

function Icon3Helper1({ additionalClassNames = "" }: Icon3Helper1Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1303 20.0249">
        <path d="M10.0124 10.0124H10.1178" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.0249" />
      </svg>
    </div>
  );
}

function Icon3Helper() {
  return (
    <div className="absolute inset-[-9499.78%_-10.01px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0249 20.1303">
        <path d="M10.0124 10.0124V10.1178" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.0249" />
      </svg>
    </div>
  );
}
type Icon3VectorProps = {
  additionalClassNames?: string;
};

function Icon3Vector({ additionalClassNames = "" }: Icon3VectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <Wrapper>
        <path d={svgPaths.p27443280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.0249" />
      </Wrapper>
    </div>
  );
}

function Container() {
  return <div className="h-[79.517px] shrink-0 w-[874.685px]" data-name="Container" />;
}

function WalletCard() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#9cecfb] h-[1155.834px] items-start justify-between left-0 pb-0 pl-[68.157px] pr-0 pt-[227.191px] rounded-[56.798px] shadow-[0px_56.798px_70.997px_-14.199px_rgba(0,0,0,0.1),0px_22.719px_28.399px_-17.039px_rgba(0,0,0,0.1)] to-[#0052d4] top-0 via-50% via-[#65c7f7] w-[1011px]" data-name="WalletCard">
      <Container />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1155.834px] items-start left-0 px-[25.559px] py-[51.118px] top-0 w-[1011px]">
      <WalletCard />
    </div>
  );
}

function Icon() {
  return (
    <Icon4>
      <path d={svgPaths.p17a25400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.59719" />
      <path d="M5.58128 10.8526H37.5855" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.59719" />
      <path d={svgPaths.p1ca0c300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.59719" />
    </Icon4>
  );
}

function Container1() {
  return (
    <div className="bg-black relative rounded-[4.76454e+07px] shrink-0 size-[86.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text() {
  return (
    <Text5 additionalClassNames="h-[75.541px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[79.517px] left-0 not-italic text-[51.118px] text-black text-nowrap top-[-0.43px] tracking-[-2.5259px]">Rental Pass</p>
    </Text5>
  );
}

function Container2() {
  return (
    <div className="h-[86.333px] relative shrink-0 w-[363.267px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.583px] items-center relative size-full">
        <Container1 />
        <Text />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <Icon4>
      <path d={svgPaths.p254dbf80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.59719" />
      <path d={svgPaths.p4c537c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.59719" />
      <path d={svgPaths.pf900580} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.59719" />
      <path d={svgPaths.p68b2c00} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.59719" />
    </Icon4>
  );
}

function Text1() {
  return (
    <Text5 additionalClassNames="h-[40.468px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[42.598px] left-0 not-italic text-[28.399px] text-black text-nowrap top-[1.21px] tracking-[1.7527px] uppercase">NFC Enabled</p>
    </Text5>
  );
}

function Container3() {
  return (
    <div className="h-[43.166px] opacity-60 relative shrink-0 w-[265.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.792px] items-center relative size-full">
        <Icon1 />
        <Text1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[86.333px] items-start justify-between relative shrink-0 w-[852.534px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32.375px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.3748 32.3748">
        <g id="Icon">
          <path d={svgPaths.p23e2100} fill="var(--fill-0, #FB2C36)" id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6979" />
          <path d="M16.1879 10.7916V16.1874" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6979" />
          <path d="M16.1879 21.5833H16.2016" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6979" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[40.468px] relative shrink-0 w-[266.522px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[42.598px] left-0 not-italic text-[#e7000b] text-[28.399px] text-nowrap top-[1.21px] tracking-[0.3328px] uppercase">Return required</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(254,242,242,0.5)] content-stretch flex gap-[16.187px] h-[51.26px] items-center pl-[21.583px] pr-0 py-0 relative rounded-[22.719px] shrink-0 w-[358.251px]" data-name="Container">
      <Icon2 />
      <Text2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[43.166px] left-0 opacity-50 top-0 w-[852.534px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[45.438px] left-0 not-italic text-[34.079px] text-black text-nowrap top-[2.7px] tracking-[3.4079px] uppercase">Expires In</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[129.499px] left-0 top-0 w-[162.379px]" data-name="Text">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[136.315px] left-0 not-italic text-[#e61812] text-[136.315px] text-nowrap top-[2.06px] tracking-[-5.8173px]">5</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[75.541px] left-[183.96px] opacity-80 top-[55.31px] w-[126.042px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[79.517px] left-0 not-italic text-[56.798px] text-black text-nowrap top-[-0.28px] tracking-[-1.2757px]">Days</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[130.848px] left-0 top-[53.96px] w-[852.534px]" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[255.59px] relative shrink-0 w-[414.624px]" data-name="Container">
      <Heading />
      <Container6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[235.711px] items-center relative shrink-0 w-full">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[82.357px] items-start left-[39.76px] top-[53.96px] w-[1008.585px]">
      <Container4 />
      <Frame1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[495.063px] relative shrink-0 w-full" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[240.298px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon3Vector additionalClassNames="inset-[12.5%_66.67%_66.67%_12.5%]" />
      <Icon3Vector additionalClassNames="inset-[12.5%_12.5%_66.67%_66.67%]" />
      <Icon3Vector additionalClassNames="inset-[66.67%_66.67%_12.5%_12.5%]" />
      <div className="absolute inset-[66.67%_12.5%_12.5%_66.67%]" data-name="Vector">
        <Wrapper>
          <path d={svgPaths.p3d7ad5e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.0249" />
        </Wrapper>
      </div>
      <div className="absolute inset-[87.5%_12.5%_12.46%_87.5%]" data-name="Vector">
        <Icon3Helper />
      </div>
      <div className="absolute bottom-1/2 left-[29.17%] right-1/2 top-[29.17%]" data-name="Vector">
        <Wrapper>
          <path d={svgPaths.p2f140c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.0249" />
        </Wrapper>
      </div>
      <div className="absolute bottom-1/2 left-[12.5%] right-[87.46%] top-1/2" data-name="Vector">
        <Icon3Helper1 additionalClassNames="inset-[-10.01px_-9500.01%]" />
      </div>
      <div className="absolute bottom-[87.5%] left-1/2 right-[49.96%] top-[12.5%]" data-name="Vector">
        <Icon3Helper1 additionalClassNames="inset-[-10.01px_-9499.78%]" />
      </div>
      <div className="absolute bottom-[33.29%] left-1/2 right-1/2 top-[66.67%]" data-name="Vector">
        <Icon3Helper />
      </div>
      <div className="absolute bottom-1/2 left-[66.67%] right-[29.17%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-10.01px_-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.0373 20.0249">
            <path d="M10.0124 10.0124H20.0249" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.0249" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[49.96%] left-[87.5%] right-[12.5%] top-1/2" data-name="Vector">
        <Icon3Helper />
      </div>
      <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[83.33%]" data-name="Vector">
        <div className="absolute inset-[-100%_-10.01px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0249 30.0373">
            <path d="M10.0124 20.0249V10.0124" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.0249" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-0 pl-[36.045px] pr-[36.044px] pt-[36.045px] relative rounded-[63.236px] shadow-[0px_6.324px_18.971px_0px_rgba(0,0,0,0.1),0px_6.324px_12.647px_-6.324px_rgba(0,0,0,0.1)] shrink-0 size-[312.388px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[105.076px] items-center relative shrink-0 w-[960.45px]">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28.399px] h-[1155.834px] items-start left-0 px-[25.559px] py-[102.236px] top-0 w-[1011px]">
      <Frame />
      <Frame3 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Frame4 />
    </div>
  );
}