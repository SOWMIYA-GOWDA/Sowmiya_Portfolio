"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function ProjectSearch({ value, onChange }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16"
        >
            <div className="relative max-w-2xl mx-auto">

                {/* Search Icon */}
                <Search
                    size={20}
                    className="
                        absolute
                        left-5
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        pointer-events-none"
                />

                {/* Input */}
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search projects..."
                    className="
                        w-full
                        h-14
                        rounded-2xl

                        border
                        border-white/10

                        bg-white/5
                        backdrop-blur-xl

                        pl-14
                        pr-5

                        text-white
                        placeholder:text-slate-500

                        outline-none

                        transition-all
                        duration-300

                        focus:border-cyan-400/60
                        focus:bg-white/10
                        focus:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                />

                {/* Glow */}
                <div
                    className="
                        absolute
                        inset-0
                        -z-10
                        rounded-2xl
                        bg-cyan-500/5
                        blur-2xl"
                />
            </div>
        </motion.div>
    );
}