import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
imgData: StaticImageData;
imgAlt: string;
title: string;

}
export default function Hero(props: HeroProps) {
  return (
    <div className="relative">
      <Image src={props.imgData} alt="Hero" layout="fill" objectFit="cover" />
    </div>
  );
}