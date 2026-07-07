"use client";

import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

export default function SkillCategory({ category }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className="
      relative
      h-[300px]
      w-full
      overflow-hidden
      rounded-[32px]
      border
      border-cyan-500/20
      bg-[#0B1120]
      backdrop-blur-2xl
      shadow-[0_30px_80px_rgba(0,0,0,.45)]
      "
    >
      {/* Glow */}
      <div
        className="
        absolute
        -right-20
        -top-20
        h-64
        w-64
        rounded-full
        bg-cyan-500/10
        blur-[120px]
        "
      />

      {/* Header */}
      <div className="border-b border-white/10 px-8 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {category.title}
            </h2>
          </div>

          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            text-lg
            font-bold
            text-cyan-300
            "
          >
            {category.items.length}
          </div>
        </div>
      </div>

      {/* Scrollable Skills */}
      <div
        className="
        h-[280px]
        overflow-y-auto
        px-8
        py-6

        scrollbar-thin
        scrollbar-thumb-cyan-500/30
        scrollbar-track-transparent
        "
      >
        <div className="flex flex-wrap gap-3">
          {category.items.map((skill, index) => (
            <SkillBadge
              key={`${skill}-${index}`}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}