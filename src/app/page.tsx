import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Learning from "@/components/Learning";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Career />
      <Learning />
      <Contact />
    </>
  );
}
