"use client";

import Hero from "./hero.jsx";
import { motion, useSpring, useScroll } from "motion/react";
import { useEffect } from "react";
import { initializeAnalytics } from "../firebase/analytics";

export default function ScrollLinked() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 7,
          background: "var(--accent)",
          originX: 0,
          zIndex: 200,
        }}
      />
      <Hero />
    </>
  );
}
