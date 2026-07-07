"use client";

import { motion } from "framer-motion";

const categories = [
    "All",
    "AI Agents",
    "Computer Vision",
    "AI for Healthcare",
    "Generative AI",
    "ML",
    "DL",
    "Chatbot",
    "Android",
    "Graph Theory",
    "Web Development",
];

export default function ProjectFilter({ selected, onChange }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay: 0.3,
            }}
            className="mt-10"
        >
            <div className="flex flex-wrap justify-center gap-3">

                {categories.map((category) => {

                    const active = selected === category;

                    return (

                        <motion.button
                            key={category}

                            whileHover={{
                                scale: 1.05,
                            }}

                            whileTap={{
                                scale: 0.95,
                            }}

                            onClick={() => onChange(category)}

                            className={`
                                px-5
                                py-2.5

                                rounded-full

                                border

                                text-sm
                                font-medium

                                transition-all
                                duration-300

                                ${
                                    active
                                        ? `
                                        border-cyan-400/60
                                        bg-cyan-500/15
                                        text-cyan-300
                                        shadow-[0_0_20px_rgba(34,211,238,0.18)]
                                        `
                                        : `
                                        border-white/10
                                        bg-white/5
                                        text-slate-400
                                        hover:border-cyan-400/30
                                        hover:text-white
                                        hover:bg-white/10
                                        `
                                }
                            `}
                        >
                            {category}
                        </motion.button>

                    );

                })}

            </div>
        </motion.div>
    );
}