import clsx from "clsx";
import imgImage3 from "figma:asset/3abffbca73af858074ede9ceb442f2fac1868598.png";
import imgImage5 from "figma:asset/187c67fa2eda60e294d64c550a39cb09b8e32a27.png";
import imgImageRemovebgPreview1 from "figma:asset/10a7db7b9a6fc0b7720a1a09a5ca9ea538e5f46e.png";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={additionalClassNames}>
      {children}
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper2 additionalClassNames={clsx("[grid-area:1_/_1] flex items-center justify-center ml-0 relative", additionalClassNames)}>{children}</Wrapper2>;
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper2 additionalClassNames={clsx("[grid-area:1_/_1] flex items-center justify-center mt-0 relative", additionalClassNames)}>{children}</Wrapper2>;
}
type ImageImageProps = {
  additionalClassNames?: string;
};

function ImageImage({ additionalClassNames = "" }: ImageImageProps) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Group() {
  return (
    <div className="font-['Hiragino_Sans:W5',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[1.5] not-italic place-items-start relative shrink-0 text-black text-center text-nowrap">
      <p className="[grid-area:1_/_1] ml-[272.5px] mt-0 relative text-[60px] tracking-[-1.14px] translate-x-[-50%]">Welcome to Store</p>
      <p className="[grid-area:1_/_1] ml-[272.5px] mt-[94px] relative text-[40px] tracking-[-0.76px] translate-x-[-50%]">What would you like to do?</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper additionalClassNames="h-[300px] ml-[87.96px] w-[312.027px]">
        <div className="flex-none rotate-[7.071deg]">
          <ImageImage additionalClassNames="h-[267.411px] w-[281.247px]" />
        </div>
      </Wrapper>
      <Wrapper1 additionalClassNames="h-[294.088px] mt-[5.91px] w-[306.678px]">
        <div className="flex-none rotate-[354.728deg]">
          <ImageImage additionalClassNames="h-[269.21px] w-[283.139px]" />
        </div>
      </Wrapper1>
      <div className="[grid-area:1_/_1] ml-[227.65px] mt-[165.5px] relative size-[94.576px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5150b6] h-[86px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[40px] text-nowrap text-white tracking-[-0.76px]">Dispense Bag</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0">
      <Group2 />
      <Button />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Wrapper1 additionalClassNames="mt-[20.13px] size-[279.869px]">
        <div className="flex-none rotate-[9.359deg]">
          <div className="relative size-[243.511px]" data-name="image-removebg-preview 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageRemovebgPreview1} />
          </div>
        </div>
      </Wrapper1>
      <Wrapper additionalClassNames="h-[277.292px] ml-[35.35px] w-[289.586px]">
        <div className="flex-none rotate-[4.305deg]">
          <ImageImage additionalClassNames="h-[257.675px] w-[271.007px]" />
        </div>
      </Wrapper>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#5150b6] content-stretch flex h-[86px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[384px]" data-name="Button">
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[40px] text-nowrap text-white tracking-[-0.76px]">Return Bag</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0">
      <Group1 />
      <Button1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center p-[32px] relative size-full">
          <Frame2 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

export default function Task() {
  return (
    <div className="bg-white relative size-full" data-name="Task 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}