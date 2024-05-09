import Footer from "./(components)/footer/Footer";
import NavBar from "./(components)/nav/NavBar";

export default function NotFoundPage() {
  return (
    <div className="relative">
      <NavBar page="home" />

      <main className="c-column justify-center h-[100vh]">
        <div className="row justify-center">
          <div className="c-column p-40 text-center">
            <h1 className="text-20"> Sorry, this page could not be found. </h1>
            <h1 className="text-20">
              { "If this is unexpected, please let me know at " }
              <a href="mailto:tiger.j540@gmail.com" className="underline hover-lighten">
                tiger.j540@gmail.com
              </a>
              .
            </h1>
            <div className="border-[0.5px] border-white w-36 m-24 h-[0.5px] opacity-50" />
            <h1 className="text-20"> In the meantime... enjoy the view? </h1>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 row justify-center w-full">
        <Footer />
      </div>
    </div>
  );
}