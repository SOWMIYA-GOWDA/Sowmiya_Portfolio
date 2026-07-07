"use client";

import { motion } from "framer-motion";

export default function SkillBadge({ skill }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 18,
      }}
      className="
      group
      relative
      cursor-default
      overflow-hidden
      rounded-full
      border
      border-cyan-500/20
      bg-white/[0.03]
      px-5
      py-3
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-cyan-400/50
      hover:bg-cyan-500/10
      "
    >
      {/* Animated Glow */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-transparent
        via-cyan-400/20
        to-transparent
        translate-x-[-100%]
        group-hover:translate-x-[100%]
        transition-transform
        duration-700
        "
      />

      <div className="relative flex items-center gap-3">
        {/* Dot */}
        <motion.div
          whileHover={{
            scale: 1.5,
          }}
          className="
          h-2.5
          w-2.5
          rounded-full
          bg-cyan-400
          shadow-[0_0_12px_rgba(34,211,238,0.9)]
          "
        />

        {/* Text */}
        <span
          className="
          text-sm
          font-medium
          text-slate-200
          transition-colors
          duration-300
          group-hover:text-white
          "
        >
          {skill}
        </span>
      </div>
    </motion.div>
  );
}