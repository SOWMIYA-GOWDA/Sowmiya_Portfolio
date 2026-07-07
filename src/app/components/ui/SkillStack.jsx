"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import SkillCard from "./SkillCard";

export default function SkillStack({ categories }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{
        height: `${categories.length * 100}vh`,
      }}
    >
      {categories.map((category, index) => {
        const start = index / categories.length;
        const end = 1;

        const targetScale =
          1 - (categories.length - index - 1) * 0.05;

        return (
          <SkillCard
            key={category.title}
            category={category}
            index={index}
            progress={scrollYProgress}
            range={[start, end]}
            targetScale={Math.max(targetScale, 0.8)}
          />
        );
      })}
    </section>
  );
}