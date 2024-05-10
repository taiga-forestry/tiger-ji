"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageType } from "./types";

interface NavDropdownProps {
  page: PageType
}

export default function NavDropdown({ page }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative p-24">
      <button
        type="button"
        aria-label="Nav dropdown button"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <i className="fas fa-bars hover-darken text-20 hover:cursor-pointer" />
      </button>

      <AnimatePresence>
        { isOpen && (
          <motion.div
            className="absolute right-10 z-40 p-24 mt-12 text-16 gap-20 c-column rounded bg-dark-blue"
            initial={{ opacity: 0, y: "-1.2rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            exit={{ opacity: 0, y: "-1.2rem" }}
            transition={{ duration: 0.3 }}
          >
            <a className={`${page !== "about" && "hover-darken"}`} href="/about"> About </a>
            <a className={`${page !== "projects" && "hover-darken"}`} href="/projects"> Projects </a>
            <a className=" hover-darken" href="/resume"> Resume </a>

            <div className="row gap-12">
              <a href="https://github.com/taiga-forestry" target="_blank" className="flex">
                <i className="fa-brands fa-github hover-darken h-full w-full text-24" aria-label="link to my github" />
              </a>
              <a href="https://www.linkedin.com/in/tiger-ji/" target="_blank" className="flex">
                <i className="fa-brands fa-linkedin hover-darken h-full w-full text-24" aria-label="link to my linkedin" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}