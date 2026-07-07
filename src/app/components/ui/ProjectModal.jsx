"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Calendar, Tag } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export default function ProjectModal({
    project,
    isOpen,
    onClose,
}) {

    if (!project) return null;

    return (

        <AnimatePresence>

            {isOpen && (

                <motion.div

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}

                    className="
                    fixed
                    inset-0
                    z-[9999]

                    bg-black/70

                    backdrop-blur-md

                    flex
                    items-center
                    justify-center

                    p-6"

                    onClick={onClose}

                >

                    {/* Modal */}

                    <motion.div

                        initial={{
                            opacity: 0,
                            scale: .92,
                            y: 40,
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}

                        exit={{
                            opacity: 0,
                            scale: .92,
                            y: 40,
                        }}

                        transition={{
                            duration: .35,
                        }}

                        onClick={(e) => e.stopPropagation()}

                        className="
                        relative

                        w-full
                        max-w-6xl

                        max-h-[90vh]

                        overflow-y-auto

                        rounded-3xl

                        border
                        border-white/10

                        bg-[#070B16]

                        shadow-[0_0_60px_rgba(0,0,0,.5)]"

                    >

                        {/* Close */}

                        <button

                            onClick={onClose}

                            className="
                            absolute

                            right-6
                            top-6

                            z-50

                            rounded-full

                            bg-white/10

                            p-3

                            hover:bg-red-500

                            transition"

                        >

                            <X size={18} />

                        </button>

                        {/* Banner */}
                        {project.featured && (
                        <div className="w-full bg-[#050816] rounded-t-3xl overflow-hidden">
    <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto block"
    />
</div>
                        )}

                        {/* Content */}

                        <div className="p-10">

                            <div className="flex flex-wrap gap-3">

                                <span
                                    className="
                                    rounded-full

                                    bg-cyan-500/15

                                    border

                                    border-cyan-500/20

                                    px-4

                                    py-1

                                    text-sm

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

                                    text-sm

                                    text-green-400"
                                >

                                    {project.status}

                                </span>

                            </div>

                            <h2
                                className="
                                mt-6

                                text-4xl

                                font-bold

                                text-white"
                            >

                                {project.title}

                            </h2>

                            <p
                                className="
                                mt-6

                                text-lg

                                leading-8

                                text-slate-300"
                            >

                                {project.description}

                            </p>
                            {/* =============================== */}
                            {/* Project Information */}
                            {/* =============================== */}

                            <div className="grid lg:grid-cols-3 gap-8 mt-12">

                                {/* Left */}

                                <div className="lg:col-span-2 space-y-8">

                                    {/* Overview */}

                                    <div>

                                        <h3 className="text-2xl font-semibold text-white mb-4">
                                            Overview
                                        </h3>

                                        <p className="text-slate-400 leading-8">
                                            {project.overview ||
                                                "This project demonstrates practical application of Artificial Intelligence to solve real-world challenges through scalable architectures, intelligent automation, and modern software engineering practices."}
                                        </p>

                                    </div>

                                    {/* Problem */}

                                    <div>

                                        <h3 className="text-2xl font-semibold text-white mb-4">
                                            Problem Statement
                                        </h3>

                                        <p className="text-slate-400 leading-8">
                                            {project.problem ||
                                                "The objective was to develop an intelligent system capable of automating complex tasks while improving efficiency, accuracy, and user experience."}
                                        </p>

                                    </div>

                                    {/* Solution */}

                                    <div>

                                        <h3 className="text-2xl font-semibold text-white mb-4">
                                            Solution
                                        </h3>

                                        <p className="text-slate-400 leading-8">
                                            {project.solution ||
                                                "Designed and implemented an end-to-end AI pipeline with robust backend services, optimized models, and intuitive interfaces for seamless deployment."}
                                        </p>

                                    </div>

                                </div>

                                {/* Right */}

                                <div className="space-y-6">

                                    {/* Year */}

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                                        <div className="flex items-center gap-3">

                                            <Calendar
                                                size={18}
                                                className="text-cyan-400"
                                            />

                                            <span className="text-slate-400">
                                                Year
                                            </span>

                                        </div>

                                        <p className="mt-3 text-xl font-semibold text-white">
                                            {project.year}
                                        </p>

                                    </div>

                                    {/* Category */}

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                                        <div className="flex items-center gap-3">

                                            <Tag
                                                size={18}
                                                className="text-cyan-400"
                                            />

                                            <span className="text-slate-400">
                                                Category
                                            </span>

                                        </div>

                                        <p className="mt-3 text-xl font-semibold text-white">
                                            {project.category}
                                        </p>

                                    </div>

                                    {/* Tech */}

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                                        <h4 className="text-lg font-semibold text-white mb-5">
                                            Technologies
                                        </h4>

                                        <div className="flex flex-wrap gap-2">

                                           {(project.tech || []).map((item) => (

                                                <span
                                                    key={item}
                                                    className="
                                                rounded-full

                                                border

                                                border-cyan-500/20

                                                bg-cyan-500/10

                                                px-3

                                                py-1

                                                text-sm

                                                text-cyan-300"
                                                >

                                                    {item}

                                                </span>

                                            ))}

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* =============================== */}
                            {/* Buttons */}
                            {/* =============================== */}

                            <div className="flex flex-wrap gap-4 mt-12">

                                <motion.a

                                    whileHover={{
                                        scale: 1.05,
                                    }}

                                    whileTap={{
                                        scale: .95,
                                    }}

                                    href={project.github}

                                    target="_blank"

                                    rel="noopener noreferrer"

                                    className="
                                flex

                                items-center

                                gap-3

                                rounded-xl

                                bg-white/10

                                px-6

                                py-4"

                                >

                                    <FaGithub size={20} />

                                    GitHub

                                </motion.a>

                                {project.demo && (

                                    <motion.a

                                        whileHover={{
                                            scale: 1.05,
                                        }}

                                        whileTap={{
                                            scale: .95,
                                        }}

                                        href={project.demo}

                                        target="_blank"

                                        rel="noopener noreferrer"

                                        className="
                                    flex

                                    items-center

                                    gap-3

                                    rounded-xl

                                    bg-cyan-500

                                    px-6

                                    py-4"

                                    >

                                        Live Demo

                                        <ExternalLink size={18} />

                                    </motion.a>

                                )}
                                                        {/* =============================== */}
                        {/* Key Features */}
                        {/* =============================== */}

                        {project.features && project.features.length > 0 && (

    <div className="mt-16">

        <h3 className="text-2xl font-semibold text-white mb-6">
            Key Features
        </h3>

        <div className="grid md:grid-cols-2 gap-5">

            {project.features.map((feature) => (

                <motion.div
                    key={feature}
                    whileHover={{
                        scale: 1.02,
                    }}
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-5"
                >

                    <div className="flex gap-4">

                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-3" />

                        <p className="text-slate-300 leading-7">
                            {feature}
                        </p>

                    </div>

                </motion.div>

            ))}

        </div>

    </div>

)}

                        {/* =============================== */}
                        {/* Project Gallery */}
                        {/* =============================== */}

                        {project.gallery && project.gallery.length > 0 && (

                            <div className="mt-16">

                                <h3 className="text-2xl font-semibold text-white mb-6">
                                    Gallery
                                </h3>

                                <div className="grid md:grid-cols-3 gap-5">

                                    {project.gallery.map((image, index) => (

                                        <motion.img

                                            key={index}

                                            whileHover={{
                                                scale: 1.03,
                                            }}

                                            src={image}

                                            alt={project.title}

                                            className="
                                            rounded-2xl

                                            border

                                            border-white/10

                                            object-cover

                                            h-52

                                            w-full"

                                        />

                                    ))}

                                </div>

                            </div>

                        )}

                        {/* =============================== */}
{/* Achievements */}
{/* =============================== */}

{project.achievements && project.achievements.length > 0 && (

    <div className="mt-16">

        <h3 className="text-2xl font-semibold text-white mb-6">
            Achievements
        </h3>

        <div className="grid lg:grid-cols-3 gap-5">

            {project.achievements.map((achievement, index) => (

                <motion.div

                    key={index}

                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        delay: index * 0.08,
                    }}

                    whileHover={{
                        y: -4,
                        scale: 1.02,
                    }}

                    className="
                        rounded-2xl

                        border
                        border-emerald-500/20

                        bg-emerald-500/10

                        backdrop-blur-xl

                        p-5"

                >

                    <div className="flex gap-4">

                        <div
                            className="
                                flex

                                h-8
                                w-8

                                items-center
                                justify-center

                                rounded-full

                                bg-emerald-500/20

                                text-emerald-400

                                font-bold"
                        >
                            ✓
                        </div>

                        <p
    className="
        text-slate-300
        whitespace-nowrap"
>
    {achievement}
</p>

                    </div>

                </motion.div>

            ))}

        </div>

    </div>

)}

                    </div>
                    </div>

                </motion.div>
                </motion.div>

            )}

        </AnimatePresence>

    );

}