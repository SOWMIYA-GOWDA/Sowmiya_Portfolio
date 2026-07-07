"use client";

import { motion, useTransform } from "framer-motion";
import SkillCategory from "./SkillCategory";

export default function SkillCard({
  category,
  index,
  progress,
  range,
  targetScale,
}) {
  // Card scales down as the next cards arrive
  const scale = useTransform(progress, range, [1, targetScale], { clamp: true });

  // Card moves upward while stacking
  const y = useTransform(progress, range, [120, -index * 30], { clamp: true });

  // Slight fade
  const opacity = useTransform(progress, range, [1, 0.92], { clamp: true });

  // Rotate slightly for depth
  const rotateX = useTransform(progress, range, [0, -3], { clamp: true });

  return (
    <div 
      className="sticky top-0 h-screen flex items-center justify-center px-6"
      style={{
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          scale,
          y,
          opacity,
          rotateX,
          top: `calc(-6vh + ${index * 28}px)`,
        }}
        className="
          relative
          w-full
          max-w-3xl
          origin-top
          transform-gpu
          will-change-transform
        "
      >
        <SkillCategory category={category} />
      </motion.div>
    </div>
  );
}