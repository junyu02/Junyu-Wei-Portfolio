import imgRectangle from "figma:asset/5554cfadbdefa3cd9cae09f80ca523cf7bb7385f.png";

export default function ContainerWowImageImage() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="Container / Wow-image / Image">
      <div className="absolute h-[323px] left-0 top-0 w-[511px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
    </div>
  );
}