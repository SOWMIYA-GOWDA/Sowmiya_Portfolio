"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ResearchCard({
    paper,
    index = 0,
    onOpen,
}) {

    const statusColor = {
        Published:
            "bg-green-500/15 border-green-500/20 text-green-400",

        Submitted:
            "bg-yellow-500/15 border-yellow-500/20 text-yellow-400",

        Accepted:
            "bg-cyan-500/15 border-cyan-500/20 text-cyan-300",
    };

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 40,
            }}

            whileInView={{
                opacity: 1,
                y: 0,
            }}

            viewport={{
                once: true,
            }}

            transition={{
                delay: index * 0.15,
                duration: 0.5,
            }}

            whileHover={{
                y: -8,
            }}

            className="
            group

            overflow-hidden

            rounded-3xl

            border
            border-white/10

            bg-white/5

            backdrop-blur-xl"

        >

            {/* Image */}

            <div className="relative h-60 overflow-hidden">

                <motion.img

                    src={paper.image}

                    alt={paper.title}

                    whileHover={{
                        scale: 1.05,
                    }}

                    transition={{
                        duration: .5,
                    }}

                    className="
                    h-full
                    w-full

                    object-cover"

                />

                <div className="
                    absolute
                    inset-0

                    bg-gradient-to-t

                    from-[#050816]

                    via-[#050816]/30

                    to-transparent"
                />

            </div>

            {/* Content */}

            <div className="p-7">

                <div className="flex justify-between items-center">

                    <span className="
                        rounded-full

                        bg-cyan-500/10

                        border
                        border-cyan-500/20

                        px-4
                        py-1

                        text-xs

                        text-cyan-300">

                        {paper.category}

                    </span>

                    <span
                        className={`
                        rounded-full

                        border

                        px-4
                        py-1

                        text-xs

                        ${statusColor[paper.status]}
                    `}
                    >

                        {paper.status}

                    </span>

                </div>

                <h3 className="
                    mt-6

                    text-2xl

                    font-bold

                    text-white">

                    {paper.shortTitle}

                </h3>

                <p className="
                    mt-4

                    text-slate-400

                    leading-7">

                    {paper.description}

                </p>

                {/* Conference */}

                <div className="
                    mt-6

                    flex

                    items-center

                    justify-between">

                    <span className="text-cyan-300 text-sm">

                        {paper.conference}

                    </span>

                    <span className="text-slate-500 text-sm">

                        {paper.year}

                    </span>

                </div>

                {/* Technologies */}

                <div className="
                    flex

                    flex-wrap

                    gap-2

                    mt-6">

                    {paper.technologies
                        .slice(0, 4)
                        .map((tech) => (

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

                {/* Button */}

                <motion.button

                    whileHover={{
                        x: 4,
                    }}

                    onClick={() => onOpen(paper)}

                    className="
                    mt-8

                    flex

                    items-center

                    gap-2

                    text-cyan-300"

                >

                    View Publication

                    <ArrowUpRight size={18} />

                </motion.button>

            </div>

        </motion.div>

    );

}