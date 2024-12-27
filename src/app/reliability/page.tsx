import Hero from "@/components/hero";
import Image from "next/image";

export default function ReliabilityPage() {
  return (
    <div>
      <Hero
        imgData="/reliability.jpg"
        imgAlt="welding"
        title="Super high quality hosting"
      />
    </div>
  );
}
