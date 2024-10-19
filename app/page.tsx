import Educations from "@/components/main/Educations";
import Encryption from "@/components/main/Encryption";
import Encryption2 from "@/components/main/Encryption2";
import Encryption3 from "@/components/main/Encryption3";
import Encryption4 from "@/components/main/Encryption4";
import Experiences from "@/components/main/Experiences";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
    <div className="flex flex-col gap-20">
      <Hero/>
      <Encryption/>
      <Experiences/>
      <Encryption2/>
      <Educations/>
      <Encryption3/>
      <Skills/>
      <Encryption4/>
      <Projects/>
    </div>
   </main>
  );
}
