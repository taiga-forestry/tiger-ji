"use client";

import NavBar from "../(components)/nav/NavBar";
import Footer from "../(components)/footer/Footer";
import SideLine from "../(components)/line/SideLine";
import MainProject from "./MainProject";
import OtherProject from "./OtherProject";

export default function ProjectsPage() {
  return (
    <>
      <NavBar page="projects" />

      <main className="xs:px-48 lg:px-[120px] py-24">
        <SideLine text="Featured Work" />
        <p className="text-14"> A few carefully curated projects that I&apos;m particularly proud of. </p>

        <section className="grid lg:grid-cols-2 xs:py-24 md:p-36 gap-24 justify-center">
          <MainProject title="MoWSE" description="Building out a scalable, fully distributed search engine from scratch" src="mowse" tools={["JavaScript", "Bash", "AWS"]} links={{ github: "FIXME", demo: "FIXME" }} />
          <MainProject title="The Critical Review" description="Revamping Brown University's official site for course & professor reviews" src="cr" tools={["Next.js", "MySQL", "Jest"]} links={{ demo: "https://thecriticalreview.org/" }} />
          <MainProject title="Neural Decompiler" description="Demystifying x86-64 assembly with transformer neural networks " src="decompiler" tools={["Python", "TensorFlow", "Flask"]} links={{ github: "https://github.com/taiga-forestry/neural-decompiler", demo: "https://neuraldecompiler.pythonanywhere.com/" }} />
          <MainProject title="Figma Grapes Exporter" description="Streamlining marketing campaigns via Figma-to-Braze Integrations" src="grapes" tools={["TypeScript", "Figma Plugin API"]} links={{ demo: "FIXME" }} />
        </section>

        <SideLine text="Other Projects" />
        <p className="text-14"> An assortment of some other notable work that might pique your interest. </p>

        <section className="grid md:grid-cols-2 xs:py-24 sm:p-24 justify-center">
          <OtherProject title="Partiful" description="Designing new, fun features for Gen Z's favorite party planning site" tools={["Figma"]} links={{ demo: "https://cs1300-iterative-design.vercel.app/" }} />
          <OtherProject title="Word Hunt Solver" description="Solving my favorite word game like a true computer scientist" tools={["Python, Flask"]} links={{ github: "https://github.com/taiga-forestry/Word-Hunt-Solver", demo: "https://whsolver.pythonanywhere.com/" }} />
          <OtherProject title="SmartBills" description="Simplifying shared expense tracking once and for all" tools={["Next.js", "Firebase"]} links={{ github: "FIXME", demo: "FIXME" }} />
          <OtherProject title="BumbleBase" description="Implementing indexing, concurrency, transactions, and more for a fully functional relational database" tools={["Go"]} links={{ demo: "https://sites.google.com/view/csci1270/projects?authuser=2" }} />
          <OtherProject title="Caching I/O" description="Optimizing read, write, and seek system calls for a custom file I/O library" tools={["C/C++"]} links={{ demo: "https://cs.brown.edu/courses/csci0300/2023/assign/projects/project3.html" }} />
          <OtherProject title="My Portfolio" description="Made with <> 2024" tools={["React", "Tailwind"]} links={{ github: "https://github.com/taiga-forestry/tiger-ji" }} />
        </section>
      </main>

      <Footer />
    </>
  );
}