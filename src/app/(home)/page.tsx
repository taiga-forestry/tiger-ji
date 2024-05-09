"use client";

import NavBar from "../(components)/nav/NavBar";
import Footer from "../(components)/footer/Footer";
import TitleScroller from "./TitleScroller";

export default function HomePage() {
  return (
    <div className="relative">
      <NavBar page="home" />

      <main className="c-column justify-center h-[100vh]">
        <div className="row justify-center">
          <div className="c-column p-40">
            <h1 className="text-40"> Hi there! </h1>
            <h1 className="text-40"> I&apos;m Tiger. Also, </h1>
            <div className="relative row justify-center w-[150%]">
              <TitleScroller />
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 row justify-center w-full">
        <Footer />
      </div>
    </div>
  );
}