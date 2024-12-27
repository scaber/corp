import Hero from "@/components/hero";
import Image from "next/image";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        imgData="/performance.jpg"
        imgAlt="welding"
        title="Professional Welding Services"
      />
    </div>
  );
}
