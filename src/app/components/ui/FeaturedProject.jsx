"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
} from "lucide-react";
import { FaGithub, } from "react-icons/fa";
export default function FeaturedProject({ project, index, onOpen }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay: index * 0.15,
                duration: 0.6,
            }}
            whileHover={{
                y: -10,
            }}
            viewport={{ once: true }}
           className="
group
relative
overflow-hidden

flex
flex-col

rounded-3xl

border
border-white/10

bg-white/5

backdrop-blur-xl

h-full"
        >

            {/* Background Image */}

            <div className="relative h-56 overflow-hidden">

                <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{
                        scale: 1.08,
                    }}
                    transition={{
                        duration: .5,
                    }}
                    className="
            h-full
            w-full

            object-cover"
                />

                <div
                    className="
            absolute
            inset-0

            bg-gradient-to-t

            from-[#050816]

            via-[#050816]/30

            to-transparent"
                />

            </div>

            {/* Content */}

           <div className="flex flex-col flex-1 p-7">

                <div className="flex justify-between items-center">

                    <span
                        className="
              rounded-full

              bg-cyan-500/15

              border

              border-cyan-500/20

              px-4

              py-1

              text-xs

              text-cyan-300"
                    >
                        {project.category}
                    </span>

                    <span
                        className="
              rounded-full

              bg-green-500/15

              border

              border-green-500/20

              px-4

              py-1

              text-xs

              text-green-400"
                    >
                        {project.status}
                    </span>

                </div>

                <h3
    className="
    mt-6

    text-2xl

    font-bold

    text-white

    min-h-[96px]

    leading-tight"
>
                    {project.title}
                </h3>

               <p
    className="
    mt-4

    text-slate-400

    leading-8

    min-h-[130px]"
>
                    {project.description}
                </p>

                {/* Technologies */}

                <div
    className="
    flex

    flex-wrap

    gap-2

    mt-6

    min-h-[72px]"
>

                    {project.tech.map((tech) => (

                        <span
                            key={tech}
                            className="
                rounded-full

                border

                border-white/10

                bg-white/5

                px-3

                py-1

                text-xs

                text-slate-300"
                        >
                            {tech}
                        </span>

                    ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-3 mt-8">

                    <motion.a
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: .95,
                        }}
                        href={project.github}
                        target="_blank"
                        className="
              flex

              items-center

              gap-2

              rounded-xl

              bg-white/10

              px-5

              py-3

              text-sm

              text-white"
                    >

                        <FaGithub size={18} />

                        GitHub

                    </motion.a>

                    <motion.button

    whileHover={{
        scale: 1.05,
    }}

    whileTap={{
        scale: .95,
    }}

    onClick={() => onOpen(project)}

    className="
    flex
    items-center
    gap-2

    rounded-xl

    bg-cyan-500

    px-5
    py-3

    text-white"

>

    Explore Project

    <ArrowUpRight size={18} />

</motion.button>

                </div>

            </div>

            {/* Hover Glow */}

            <motion.div

                className="
          absolute

          inset-0

          opacity-0

          group-hover:opacity-100

          pointer-events-none"

                style={{
                    background:
                        "radial-gradient(circle at top, rgba(34,211,238,.12), transparent 70%)",
                }}

            />

        </motion.div>
    );
}