import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero
        imgData="/home.jpg"
        imgAlt="Hero Image"
        title="Welcome to my website"
      />
    </div>
  );
}
