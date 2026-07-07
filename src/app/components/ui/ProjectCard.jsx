"use client";

import { motion } from "framer-motion";
import {  ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export default function ProjectCard({ project, onOpen }) {
    return (
        <motion.div
    whileHover={{
        y: -8,
        scale: 1.02,
    }}
    className="
        group
        relative
        flex
        flex-col
        h-full

        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-white/5

        backdrop-blur-xl

        p-8"
>
            {/* Hover Glow */}

            <div
                className="
          absolute

          inset-0

          opacity-0

          group-hover:opacity-100

          transition

          pointer-events-none"

                style={{
                    background:
                        "radial-gradient(circle at top right, rgba(34,211,238,.15), transparent 70%)",
                }}
            />

            {/* Category */}

            <div className="mb-6">
    <span className="inline-flex w-fit rounded-full bg-red-500 px-4 py-2 text-sm text-white">
        {project.category}
    </span>
</div>
            {/* Title */}

            <h3
    className="
        mt-6
        text-2xl
        font-bold
        text-white
        leading-tight
        min-h-[72px]"
>
                {project.title}
            </h3>

            {/* Description */}

           <p
    className="
        mt-5
        text-slate-400
        leading-8
        min-h-[130px]"
>
                {project.description}
            </p>

            {/* Tech */}

           <div
    className="
        flex
        flex-wrap
        gap-2
        mt-6
        min-h-[72px]
        content-start"
>
                {project.tech.slice(0, 3).map((tech) => (
                    <span
                        key={tech}
                        className="
              rounded-full

              bg-white/5 w-[fit-content]
                    
              border

              border-white/10

              px-3

              py-1

              text-xs

              text-slate-300"
                    >
                        {tech}
                    </span>
                ))}

                {project.tech.length > 3 && (
                    <span
                        className="
              rounded-full

              bg-white/5

              border

              border-white/10

              px-3

              py-1

              text-xs

              text-cyan-400"
                    >
                        +{project.tech.length - 3}
                    </span>
                )}
            </div>

            {/* Footer */}

            <div className="mt-8 flex items-center justify-between">

                <span
                    className="
            text-xs

            text-green-400"
                >
                    {project.status}
                </span>

                <div className="flex items-center gap-3">

                    <motion.a
                        whileHover={{
                            scale: 1.1,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              rounded-xl

              bg-white/10

              p-2

              text-white"
                    >
                        <FaGithub size={18} />
                    </motion.a>

                    <motion.button

    onClick={() => onOpen(project)}

    whileHover={{
        x: 3,
    }}

    className="
    flex
    items-center
    gap-2

    text-cyan-300"

>

    Explore

    <ArrowUpRight size={16} />

</motion.button>

                </div>

            </div>
        </motion.div>
    );
}