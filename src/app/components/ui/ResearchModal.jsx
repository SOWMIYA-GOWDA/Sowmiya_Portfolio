"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    X,
    Calendar,
    BookOpen,
    Building2,
    ExternalLink,
    FileText,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

export default function ResearchModal({

    paper,

    isOpen,

    onClose,

}) {

    if (!paper) return null;

    const statusColor = {

        Published:
            "bg-green-500/15 border-green-500/20 text-green-400",

        Submitted:
            "bg-yellow-500/15 border-yellow-500/20 text-yellow-400",

        Accepted:
            "bg-cyan-500/15 border-cyan-500/20 text-cyan-300",

    };

    return (

        <AnimatePresence>

            {isOpen && (

                <motion.div

                    initial={{
                        opacity: 0,
                    }}

                    animate={{
                        opacity: 1,
                    }}

                    exit={{
                        opacity: 0,
                    }}

                    className="
                    fixed

                    inset-0

                    z-[999]

                    flex

                    items-center

                    justify-center

                    bg-black/70

                    backdrop-blur-md

                    p-6"

                    onClick={onClose}

                >

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 50,
                            scale: .96,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}

                        exit={{
                            opacity: 0,
                            y: 30,
                            scale: .96,
                        }}

                        transition={{
                            duration: .35,
                        }}

                        onClick={(e) => e.stopPropagation()}

                        className="
                        relative

                        max-h-[92vh]

                        w-full

                        max-w-6xl

                        overflow-y-auto

                        rounded-3xl

                        border

                        border-white/10

                        bg-[#08111F]

                        shadow-2xl"

                    >

                        {/* Close Button */}

                        <button

                            onClick={onClose}

                            className="
                            absolute

                            right-6

                            top-6

                            z-20

                            flex

                            h-11

                            w-11

                            items-center

                            justify-center

                            rounded-full

                            bg-black/40

                            text-white

                            backdrop-blur-xl

                            transition

                            hover:bg-red-500"

                        >

                            <X size={22} />

                        </button>

                        {/* Hero Image */}

                        <div className="relative h-[380px] overflow-hidden">

                            <img

                                src={paper.image}

                                alt={paper.title}

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

                                from-[#08111F]

                                via-[#08111F]/20

                                to-transparent"
                            />

                        </div>

                        {/* Content */}

                        <div className="p-10">

                            {/* Status */}

                            <div className="flex flex-wrap items-center gap-3">

                                <span

                                    className={`
                                    rounded-full

                                    border

                                    px-4

                                    py-1

                                    text-sm

                                    ${statusColor[paper.status]}
                                `}

                                >

                                    {paper.status}

                                </span>

                                <span
                                    className="
                                    rounded-full

                                    border

                                    border-cyan-500/20

                                    bg-cyan-500/10

                                    px-4

                                    py-1

                                    text-sm

                                    text-cyan-300"
                                >

                                    {paper.category}

                                </span>

                            </div>

                            {/* Title */}

                            <h2
                                className="
                                mt-6

                                text-4xl

                                font-bold

                                leading-tight

                                text-white"
                            >

                                {paper.title}

                            </h2>

                            {/* Publication Info */}

                            <div
                                className="
                                mt-8

                                grid

                                gap-5

                                md:grid-cols-3"
                            >

                                <div className="flex items-center gap-3">

                                    <Calendar
                                        size={18}
                                        className="text-cyan-400"
                                    />

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            Year
                                        </p>

                                        <p className="text-white">
                                            {paper.year}
                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-3">

                                    <BookOpen
                                        size={18}
                                        className="text-cyan-400"
                                    />

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            Conference
                                        </p>

                                        <p className="text-white">
                                            {paper.conference}
                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-3">

                                    <Building2
                                        size={18}
                                        className="text-cyan-400"
                                    />

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            Publisher
                                        </p>

                                        <p className="text-white">
                                            {paper.publisher}
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* ============================== */}
                            {/* Part 2 starts here */}
                            {/* Abstract, Technologies, Keywords */}
                                                        {/* ====================================== */}
                            {/* Abstract */}
                            {/* ====================================== */}

                            <div className="mt-14">

                                <h3 className="text-2xl font-semibold text-white mb-5">

                                    Abstract

                                </h3>

                                <p
                                    className="
                                    text-slate-300

                                    leading-8"
                                >

                                    {paper.abstract}

                                </p>

                            </div>

                            {/* ====================================== */}
                            {/* Technologies */}
                            {/* ====================================== */}

                            <div className="mt-14">

                                <h3 className="text-2xl font-semibold text-white mb-6">

                                    Technologies

                                </h3>

                                <div className="flex flex-wrap gap-3">

                                    {paper.technologies.map((tech) => (

                                        <motion.span

                                            key={tech}

                                            whileHover={{
                                                scale: 1.05,
                                            }}

                                            className="
                                            rounded-full

                                            border

                                            border-cyan-500/20

                                            bg-cyan-500/10

                                            px-4

                                            py-2

                                            text-sm

                                            text-cyan-300"

                                        >

                                            {tech}

                                        </motion.span>

                                    ))}

                                </div>

                            </div>

                            {/* ====================================== */}
                            {/* Keywords */}
                            {/* ====================================== */}

                            <div className="mt-14">

                                <h3 className="text-2xl font-semibold text-white mb-6">

                                    Research Keywords

                                </h3>

                                <div className="flex flex-wrap gap-3">

                                    {paper.keywords.map((keyword) => (

                                        <motion.span

                                            key={keyword}

                                            whileHover={{
                                                y: -2,
                                            }}

                                            className="
                                            rounded-full

                                            border

                                            border-white/10

                                            bg-white/5

                                            px-4

                                            py-2

                                            text-sm

                                            text-slate-300"

                                        >

                                            #{keyword}

                                        </motion.span>

                                    ))}

                                </div>

                            </div>

                            {/* ====================================== */}
                            {/* Achievements */}
                            {/* ====================================== */}

                            <div className="mt-14">

                                <h3 className="text-2xl font-semibold text-white mb-6">

                                    Research Highlights

                                </h3>

                                <div className="grid md:grid-cols-3 gap-5">

                                    {paper.achievements.map((achievement) => (

                                        <motion.div

                                            key={achievement}

                                            whileHover={{
                                                y: -4,
                                            }}

                                            className="
                                            rounded-2xl

                                            border

                                            border-emerald-500/20

                                            bg-emerald-500/10

                                            p-5"

                                        >

                                            <p
                                                className="
                                                text-white

                                                font-medium

                                                leading-7"
                                            >

                                                {achievement}

                                            </p>

                                        </motion.div>

                                    ))}

                                </div>

                            </div>

                            {/* ============================== */}
                            {/* Part 3 starts here */}
                            {/* Publication Links */}
                                                        {/* ====================================== */}
                            {/* Publication Resources */}
                            {/* ====================================== */}

                            <div className="mt-14">

                                <h3 className="text-2xl font-semibold text-white mb-6">

                                    Publication Resources

                                </h3>

                                <div className="flex flex-wrap gap-4">

                                    {paper.github && (
                                        <motion.a

                                            whileHover={{
                                                scale: 1.03,
                                            }}

                                            whileTap={{
                                                scale: 0.96,
                                            }}

                                            href={paper.github}

                                            target="_blank"

                                            rel="noopener noreferrer"

                                            className="
                                            flex

                                            items-center

                                            gap-3

                                            rounded-xl

                                            border

                                            border-white/10

                                            bg-white/5

                                            px-6

                                            py-3

                                            text-white"

                                        >

                                            <FaGithub  size={18} />

                                            GitHub

                                        </motion.a>
                                    )}

                                    {paper.paper && (
                                        <motion.a

                                            whileHover={{
                                                scale: 1.03,
                                            }}

                                            whileTap={{
                                                scale: 0.96,
                                            }}

                                            href={paper.paper}

                                            target="_blank"

                                            rel="noopener noreferrer"

                                            className="
                                            flex

                                            items-center

                                            gap-3

                                            rounded-xl

                                            bg-cyan-500

                                            px-6

                                            py-3

                                            text-white"

                                        >

                                            <FileText size={18} />

                                            View Paper

                                        </motion.a>
                                    )}

                                    {paper.doi && (
                                        <motion.a

                                            whileHover={{
                                                scale: 1.03,
                                            }}

                                            whileTap={{
                                                scale: 0.96,
                                            }}

                                            href={paper.doi}

                                            target="_blank"

                                            rel="noopener noreferrer"

                                            className="
                                            flex

                                            items-center

                                            gap-3

                                            rounded-xl

                                            border

                                            border-cyan-500/20

                                            bg-cyan-500/10

                                            px-6

                                            py-3

                                            text-cyan-300"

                                        >

                                            <ExternalLink size={18} />

                                            DOI

                                        </motion.a>
                                    )}

                                    {paper.presentation && (
                                        <motion.a

                                            whileHover={{
                                                scale: 1.03,
                                            }}

                                            whileTap={{
                                                scale: 0.96,
                                            }}

                                            href={paper.presentation}

                                            target="_blank"

                                            rel="noopener noreferrer"

                                            className="
                                            flex

                                            items-center

                                            gap-3

                                            rounded-xl

                                            border

                                            border-purple-500/20

                                            bg-purple-500/10

                                            px-6

                                            py-3

                                            text-purple-300"

                                        >

                                            <ExternalLink size={18} />

                                            Presentation

                                        </motion.a>
                                    )}

                                </div>

                            </div>

                            {/* ====================================== */}
                            {/* Footer */}
                            {/* ====================================== */}

                            <div
                                className="
                                mt-16

                                border-t

                                border-white/10

                                pt-8"

                            >

                                <div className="flex flex-wrap items-center justify-between gap-6">

                                    <div>

                                        <p className="text-sm text-slate-500">

                                            Publication Status

                                        </p>

                                        <p className="mt-2 text-lg font-semibold text-white">

                                            {paper.status}

                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-sm text-slate-500">

                                            Research Area

                                        </p>

                                        <p className="mt-2 text-lg font-semibold text-cyan-300">

                                            {paper.category}

                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-sm text-slate-500">

                                            Published

                                        </p>

                                        <p className="mt-2 text-lg font-semibold text-white">

                                            {paper.year}

                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* ============================== */}
                            {/* Part 4 starts here */}
                            {/* Closing tags */}
                                                    </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>

    );

}