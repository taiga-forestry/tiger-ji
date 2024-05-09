import NavDropdown from "./NavDropdown";
import { PageType } from "./types";

interface NavBarProps {
  page: PageType
}

export default function NavBar({ page }: NavBarProps) {
  return (
    <>
      <nav className={`hidden sm:grid grid-cols-[auto_1fr_auto_auto_auto_auto] text-16 w-full ${page === "home" && "fixed"}`}>
        <a className="p-24 text-20" href="/"> TJ </a>
        <div />
        <a className={`p-24 ${page !== "about" && "hover-darken"}`} href="/about"> About </a>
        <a className={`p-24 ${page !== "projects" && "hover-darken"}`} href="/projects"> Projects </a>
        <a className="p-24 hover-darken" href="/resume"> Resume </a>
        <div className="p-24 text-24 row gap-16">
          <a href="https://github.com/taiga-forestry" target="_blank" className="flex">
            <i className="fa-brands fa-github hover-darken h-full w-full" aria-label="link to my github" />
          </a>
          <a href="https://www.linkedin.com/in/tiger-ji/" target="_blank" className="flex">
            <i className="fa-brands fa-linkedin hover-darken h-full w-full" aria-label="link to my linkedin" />
          </a>
        </div>
      </nav>

      <nav className={`sm:hidden grid grid-cols-[auto_1fr_auto] text-16 w-full ${page === "home" && "fixed"}`}>
        <a className="p-24 text-20" href="/"> TJ </a>
        <div />
        <NavDropdown page={page} />
      </nav>
    </>
  );
}