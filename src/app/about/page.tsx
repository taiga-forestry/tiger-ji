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
              { "My name is Tiger, and I'm a software engineer based in NYC working on core distributed systems infrastructure for " }
              <a href="https://cloud.google.com/pubsub/docs/overview" className="hover-underline-animation" target="_blank"> Google Cloud Pub/Sub </a>
              { ". Before joining Google, I worked briefly at " }
              <a href="https://palantir.com/" className="hover-underline-animation" target="_blank"> Palantir </a>
              { " and interned for multiple summers at " }
              <a href="https://braze.com/" className="hover-underline-animation" target="_blank"> Braze </a>
              .
            </p>

            <p className="text-14">
              { "I'm also a proud alumnus of " }
              <a href="https://brown.edu/" className="hover-underline-animation" target="_blank"> Brown University </a>

              { ", where I served as the web team lead for the " }
              <a href="https://thecriticalreview.org/" className="hover-underline-animation" target="_blank"> Critical Review </a>
              , our official site for course & professor reviews used by thousands of students

              { ". I was also a TA for our distributed systems "}
              <a href="https://cs.brown.edu/courses/csci1380/" className="hover-underline-animation" target="_blank"> (CSCI 1380) </a>
              { ", databases " }
              <a href="https://sites.google.com/view/csci1270/" className="hover-underline-animation" target="_blank"> (CSCI 1270) </a>
              { ", and data structures & algorithms " }
              <a href="https://brown-csci0200.github.io/" className="hover-underline-animation" target="_blank"> (CSCI 0200) </a>
              { " courses." }
            </p>

            <p className="text-14">
              {"Outside of my academic and professional interests, you'll most likely find me playing violin in an "}
              <a href="https://orchestra.brown.edu/" className="hover-underline-animation" target="_blank"> orchestra </a>
              {" or "}
              <a href="https://youtu.be/QPmFT7kCUIU?si=E0BNRXpjENSl8yUN&t=1310" className="hover-underline-animation" target="_blank"> small ensemble </a>
              , spinning around with
              <a href="https://www.instagram.com/browngroundbreakin/" className="hover-underline-animation" target="_blank"> some bboys </a>
              , or playing pickup basketball on any court I can find.

              I also enjoy exploring NYC&apos;s culinary scene, photographing nature, and playing
              word games ranging from Word Hunt to anything on the New York Times Games site.
            </p>
          </div>

          <div className="p-16 c-column">
            <Image src={me} width={200} className="rounded-xl" alt="A picture of me!" />
          </div>
        </section>
        <Separator />

        <div className="p-24 md:p-48 l-column w-full gap-14">
          <p className="text-14">
            { "Want to discuss anything from my projects to my opinions on the NBA? I'd love to meet you — feel free to reach out at " }
            <a href="mailto:tiger.j540@gmail.com" className="hover-underline-animation" target="_blank"> tiger.j540@gmail.com </a>
            <i className="fa-regular fa-face-smile ml-[4px]" />
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}