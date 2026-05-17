import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { About } from "@/components/sections/about";


export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Research />
      <About />
    </>
  );
}