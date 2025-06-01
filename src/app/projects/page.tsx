import NavBar from "../(components)/nav/NavBar";
import Footer from "../(components)/footer/Footer";
import SideLine from "../(components)/line/SideLine";
import MainProject from "./MainProject";
import OtherProject from "./OtherProject";

export default function ProjectsPage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-[100vh]">
      <NavBar page="projects" />

      <main className="px-48 lg:px-[120px] py-24">
        <SideLine text="Featured Work" />
        <p className="text-14"> A few carefully curated projects that I&apos;m particularly proud of. </p>

        <section className="grid lg:grid-cols-2 py-24 md:p-36 gap-24 justify-center">
          <MainProject title="Currents Event Replay" description="Automating historical data recovery processes for Braze customers" src="replay" tools={["Kotlin", "PostgreSQL", "Apache Kafka"]} links={{ demo: "https://docs.google.com/presentation/d/1EJ8X1gjsdcxF4roIx-uDaSfpTkESSc7lA9Ak0WqcqoM/edit?usp=sharing" }} />
          <MainProject title="The Critical Review" description="Revamping Brown University's official site for course & professor reviews" src="cr" tools={["Next.js", "MySQL", "Jest"]} links={{ demo: "https://thecriticalreview.org/" }} />
          <MainProject title="MoWSE" description="Building out a scalable, fully distributed search engine from scratch" src="mowse" tools={["JavaScript", "Bash", "AWS"]} links={{ demo: "https://drive.google.com/file/d/1OJ4rK6ot0YcsHwDid19DzHkYph5F2lPN/view?usp=sharing" }} />
          <MainProject title="Neural Decompiler" description="Demystifying x86-64 assembly with transformer neural networks " src="decompiler" tools={["Python", "TensorFlow", "Flask"]} links={{ github: "https://github.com/taiga-forestry/neural-decompiler", demo: "https://neuraldecompiler.pythonanywhere.com/" }} />
        </section>

        <SideLine text="Other Projects" />
        <p className="text-14"> An assortment of some other notable work that might pique your interest. </p>

        <section className="grid md:grid-cols-2 py-24 sm:p-24 justify-center">
          <OtherProject title="Figma Grapes Exporter" description="Streamlining marketing campaigns via Figma-to-Braze Integrations" tools={["TypeScript", "Figma Plugin API"]} links={{ demo: "https://docs.google.com/presentation/d/1cyNRfYI729tn_K2rUFQDR_2CZI6xpaYcIBUGmibtvJ0/edit?usp=sharing" }} />
          <OtherProject title="Capacitated Vehicle Router" description="Optimizing NP-hard vehicle routing problem with local search metaheuristics" tools={["Julia"]} links={{ demo: "https://docs.google.com/presentation/d/1tR-FdMULamXu53cXQRN6Q8kox6-JHEgh3QkrvqxpRbs/edit?usp=sharing" }} />
          <OtherProject title="SAT Solver" description="Boolean satisfiability solver using modern conflict-driven clause learning" tools={["Kotlin"]} links={{ github: "https://github.com/taiga-forestry/sat-cdcl/tree/main" }} />
          <OtherProject title="Pose Party" description="A fun, real-time posing contest using human pose estimation" tools={["Python, OpenCV"]} links={{ demo: "https://drive.google.com/file/d/1cKCnD-5MdJzoKaubyampo5GaNi3mEIrE/view?usp=sharing" }} />
          <OtherProject title="Partiful" description="Designing new, fun features for Gen Z's favorite party planning site" tools={["Figma"]} links={{ demo: "https://cs1300-iterative-design.vercel.app/" }} />
          <OtherProject title="My Portfolio" description="Made with <> 2024" tools={["React", "Tailwind"]} links={{ github: "https://github.com/taiga-forestry/tiger-ji" }} />
        </section>
      </main>

      <Footer />
    </div>
  );
}