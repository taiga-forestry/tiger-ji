import Image from "next/image";
import NavBar from "../(components)/nav/NavBar";
import Footer from "../(components)/footer/Footer";
import SideLine from "../(components)/line/SideLine";
import Separator from "../(components)/line/Separator";
import me from "../../../public/me.png";

export default function AboutPage() {
  return (
    <>
      <NavBar page="about" />

      <main className="xs:px-48 lg:px-[120px] py-24 c-column">
        <SideLine text="About Me" />
        <p className="text-14 self-start"> My background, passions, aspirations, and more. </p>

        <section className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-24 xs:p-24 md:p-48">
          <div className="l-column gap-14">
            <p className="text-14">
              Hi there!
            </p>

            <p className="text-14">
              { "My name is Tiger Ji, and I'm currently pursuing a B.S. in Computer Science and Applied Mathematics at " }
              <a href="https://www.brown.edu/" className="hover-underline-animation" target="_blank"> Brown University </a>
              .

              { " I was a software engineering intern at " }
              <a href="https://braze.com/" className="hover-underline-animation" target="_blank"> Braze </a>
              { " in the summers of 2023 and 2024, working on projects ranging from scaling out Java microservices and Kafka data streaming pipelines to developing Figma plugins in TypeScript and React." }
            </p>

            <p className="text-14">
              { "At Brown, I managed a team of over 10 students as the engineering manager for the " }
              <a href="https://thecriticalreview.org/" className="hover-underline-animation" target="_blank"> Critical Review</a>
              , the official site for course & professor reviews used by thousands of students
              per month.

              { " I also served as a TA for our data structures and algorithm course "}
              <a href="https://brown-csci0200.github.io/" className="hover-underline-animation" target="_blank"> (CSCI 0200) </a>
              { " for two semesters and am an incoming TA for our database systems course " }
              <a href="https://sites.google.com/view/csci1270/" className="hover-underline-animation" target="_blank"> (CSCI 1270) </a>
              .
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

        <div className="xs:p-24 md:p-48 l-column w-full gap-14">
          <p className="text-14">
            { "Want to discuss anything from my projects to my opinions on the NBA? I'd love to meet you – feel free to reach out at " }
            <a href="mailto:tiger.j540@gmail.com" className="hover-underline-animation" target="_blank"> tiger.j540@gmail.com </a>
            <i className="fa-regular fa-face-smile ml-[4px]" />
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}