import Image from "next/image";
import NavBar from "../(components)/nav/NavBar";
import Footer from "../(components)/footer/Footer";
import SideLine from "../(components)/line/SideLine";
import Separator from "../(components)/line/Separator";
import me from "../../../public/me.png";

export default function AboutPage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-[100vh]">
      <NavBar page="about" />

      <main className="px-48 lg:px-[120px] py-24 c-column">
        <SideLine text="About Me" />
        <p className="text-14 self-start"> My background, passions, aspirations, and more. </p>

        <section className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-24 p-24 md:p-48">
          <div className="l-column gap-14">
            <p className="text-14">
              Hi there!
            </p>

            <p className="text-14">
              { "My name is Tiger, and I'm currently pursuing a B.S. in Computer Science and Applied Mathematics at " }
              <a href="https://www.brown.edu/" className="hover-underline-animation" target="_blank"> Brown University </a>
              .
            </p>

            <p className="text-14">
              { "Previously, I was a SWE intern at " }
              <a href="https://braze.com/" className="hover-underline-animation" target="_blank"> Braze </a>
              { " in the summers of 2023 and 2024, working on projects ranging from architecting scalable, fault-tolerant microservices in Java/Kotlin to developing Figma plugins in TypeScript and React." }

              { " Looking forward, I'm excited to join " }
              <a href="https://palantir.com/" className="hover-underline-animation" target="_blank"> Palantir </a>
              { " as a full-time software engineer in the NYC office in August 2025."}
            </p>

            <p className="text-14">
              { "At Brown, I managed 10+ students as the web team lead for the " }
              <a href="https://thecriticalreview.org/" className="hover-underline-animation" target="_blank"> Critical Review</a>
              , our official site for course & professor reviews used by thousands of students.

              { " I also was a TA for our data structures & algorithms "}
              <a href="https://brown-csci0200.github.io/" className="hover-underline-animation" target="_blank"> (CSCI 0200) </a>
              { " and database systems " }
              <a href="https://sites.google.com/view/csci1270/" className="hover-underline-animation" target="_blank"> (CSCI 1270) </a>
              { " courses, and will TA our distributed systems course " }
              <a href="https://cs.brown.edu/courses/csci1380/" className="hover-underline-animation" target="_blank"> (CSCI 1380) </a>
              { " in the 2025 spring semester." }
            </p>

            <p className="text-14">
              { "Outside of my academic and professional endeavors, you'll most likely find me playing violin in the " }
              <a href="https://www.brown.edu/Departments/Music/sites/orchestra/" className="hover-underline-animation" target="_blank"> Brown University Orchestra</a>
              ,
              { " spinning all over the floor with Brown's " }
              <a href="https://www.instagram.com/browngroundbreakin/" className="hover-underline-animation" target="_blank"> premier breakdance club</a>
              , or playing basketball on any court I can
              find. I also love exploring a city&apos;s restaurant scene, photographing nature,
              and playing word games such as Word Hunt or anything on the New York Times Games site.
            </p>
          </div>

          <div className="p-16 c-column">
            <Image src={me} width={200} className="rounded-xl" alt="A picture of me!" />
          </div>
        </section>
        <Separator />

        <div className="p-24 md:p-48 l-column w-full gap-14">
          <p className="text-14">
            { "Want to discuss anything from my projects to my opinions on the NBA? I'd love to meet you – feel free to reach out at " }
            <a href="mailto:tiger.j540@gmail.com" className="hover-underline-animation" target="_blank"> tiger.j540@gmail.com </a>
            <i className="fa-regular fa-face-smile ml-[4px]" />
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}