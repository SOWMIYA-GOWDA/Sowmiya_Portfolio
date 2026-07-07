"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";

const ACCENTS = [
  { text: "text-blue-300", ring: "hover:border-blue-400/30", glow: "bg-blue-500/10", shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,.15)]", chip: "border-blue-400/20 bg-blue-500/10 text-blue-300 hover:border-blue-400/40 hover:bg-blue-500/20" },
  { text: "text-violet-300", ring: "hover:border-violet-400/30", glow: "bg-violet-500/10", shadow: "hover:shadow-[0_0_30px_rgba(139,92,246,.15)]", chip: "border-violet-400/20 bg-violet-500/10 text-violet-300 hover:border-violet-400/40 hover:bg-violet-500/20" },
  { text: "text-cyan-300", ring: "hover:border-cyan-400/30", glow: "bg-cyan-500/10", shadow: "hover:shadow-[0_0_30px_rgba(34,211,238,.15)]", chip: "border-cyan-400/20 bg-cyan-500/10 text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/20" },
];

export default function RoadmapCard({ item, index, onOpen }) {
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="relative"
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl border border-white/10
          bg-white/[0.05] backdrop-blur-2xl
          shadow-[0_8px_30px_rgba(0,0,0,.35)]
          transition-all duration-500
          ${accent.ring} ${accent.shadow}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        <div className={`absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl ${accent.glow}`} />

        <div className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-black/30 text-[10px] font-semibold text-white/70">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="relative p-4 pt-11">
          <span className={`flex items-center gap-1.5 text-xs ${accent.text}`}>
            <Calendar size={13} />
            {item.year}
          </span>

          <h2 className="mt-2 text-sm font-bold text-white leading-snug line-clamp-2">
            {item.title}
          </h2>
          <p className="mt-1 text-xs text-slate-400 line-clamp-1">{item.issuer}</p>

          <div className="my-3 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" />

          <button
            onClick={() => onOpen(item)}
            className={`group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${accent.chip}`}
          >
            View Certificate
            <motion.span whileHover={{ x: 3, y: -1 }}>
              <ArrowUpRight size={13} />
            </motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}