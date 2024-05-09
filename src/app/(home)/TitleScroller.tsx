"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function TitleScroller() {
  const [index, setIndex] = useState(0);
  const titles = [
    "an aspiring software engineer",
    "a diehard classical musician",
    "a budding breakdancer",
    "a fan of all things basketball",
    "a word games enthusiast",
    "nature's favorite photographer",
    "an exploratory eater and traveller",
  ];

  // every re-render, schedule another title to be set (cycle forever!)
  setTimeout(() => {
    setIndex((index + 1) % titles.length);
  }, 4000);

  return (
    titles.map((title, i) => (
      <AnimatePresence key={title}>
        { index === i && (
          <motion.p
            className="text-20 absolute text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
          >
            { title }
          </motion.p>
        )}
      </AnimatePresence>
    ))
  );
}