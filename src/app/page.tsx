import Image from "next/image";
import { TypewriterEffectDemo } from "../components/typewriter";
import { BentoGridThirdDemo } from "../components/bento";
import { MacbookScroll } from "../components/ui/macbook";
import { FloatingNavDemo } from "../components/nav";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <FloatingNavDemo />
      <TypewriterEffectDemo />
      <BentoGridThirdDemo />
      <MacbookScroll />
    </main>
  );
}
