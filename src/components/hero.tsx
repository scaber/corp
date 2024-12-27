import Image from "next/image";

interface HeroProps {
  imgData: string;
  imgAlt: string;
  title: string;
}
export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screem">
      <div className="absolute -z-10 inset -0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          height={1080}
          width={1920}
          objectFit="cover"
        />
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-900" /> */}
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
}
