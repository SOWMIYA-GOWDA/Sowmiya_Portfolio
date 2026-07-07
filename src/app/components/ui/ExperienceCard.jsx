"use client";

import { useState } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useMotionTemplate,
} from "framer-motion";

import {
    FaBriefcase,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaChevronDown,
    FaRocket,
} from "react-icons/fa";

export default function ExperienceCard({ experience }) {
    const [showProjects, setShowProjects] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const spotlight = useMotionTemplate`
    radial-gradient(
      350px circle at ${mouseX}px ${mouseY}px,
      rgba(59,130,246,.15),
      transparent 80%
    )
  `;

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className="
      relative
      group
      overflow-hidden

      rounded-[32px]

      border
      border-white/10

      bg-[#070B18]/30

      

      mb-20"
        >
            {/* Spotlight */}

            <motion.div
                className="
        absolute
        inset-0
        pointer-events-none
        opacity-0
        group-hover:opacity-100
        duration-500"
                style={{
                    background: spotlight,
                }}
            />

            {/* Content */}

            <div className="relative z-20 grid grid-cols-12 gap-6 p-8">
                {/* ========================================== */}
                {/* Company Card */}
                {/* ========================================== */}

                <motion.div
                    whileHover={{
                        y: -6,
                    }}
                    className="
          col-span-12
          lg:col-span-8

          rounded-3xl

          border
          border-white/10

          bg-white/5

          backdrop-blur-xl

          p-8"
                >

                    <div className="flex justify-between">

                        <div>

                            <div className="flex items-center gap-5">

                                <div
                                    className="
                  w-16
                  h-16

                  rounded-2xl

                  bg-blue-500/15

                  flex
                  items-center
                  justify-center"
                                >
                                    <FaBriefcase
                                        className="text-3xl text-blue-400"
                                    />
                                </div>

                                <div>

                                    <h2 className="text-3xl font-bold text-white">
                                        {experience.role}
                                    </h2>

                                    <p className="text-blue-400 mt-2 text-lg">
                                        {experience.company}
                                    </p>

                                </div>

                            </div>

                            <div className="flex flex-wrap gap-8 mt-8 text-slate-400">

                                <div className="flex items-center gap-3">

                                    <FaCalendarAlt />

                                    {experience.duration}

                                </div>

                                <div className="flex items-center gap-3">

                                    <FaMapMarkerAlt />

                                    {experience.location}

                                </div>

                            </div>

                        </div>

                        {experience.current && (

                            <span
                                className="
                h-fit

                rounded-full

                bg-green-500/20

                text-green-400

                px-4
                py-2

                text-sm
                font-semibold"
                            >
                                Current
                            </span>

                        )}

                    </div>

                </motion.div>

                {/* ========================================== */}
                {/* Stats Card */}
                {/* ========================================== */}

                <motion.div
                    whileHover={{
                        y: -6,
                        scale: 1.03,
                    }}
                    className="
          col-span-12
          lg:col-span-4

          rounded-3xl

          border
          border-blue-500/20

          bg-gradient-to-br

          from-blue-500/10
          via-cyan-500/10
          to-blue-600/10

          p-8

          flex
          flex-col
          items-center
          justify-center"
                >

                    <motion.div
                        animate={{
                            rotate: [0, 8, -8, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                        }}
                    >
                        <FaRocket
                            className="text-5xl text-blue-400"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{
                            scale: .7,
                            opacity: 0,
                        }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            delay: .2,
                        }}
                        className="
            mt-6

            text-6xl

            font-black

            bg-gradient-to-r

            from-blue-400

            to-cyan-300

            bg-clip-text

            text-transparent"
                    >
                        {experience.stats.value}
                    </motion.h1>

                    <p className="mt-3 text-center text-slate-300">
                        {experience.stats.title}
                    </p>

                </motion.div>



                {/* ========================================== */}
                {/* Projects */}
                {/* ========================================== */}

                <motion.div
                    whileHover={{ y: -6 }}
                    className="
          col-span-12

          rounded-3xl

          border
          border-white/10

          bg-white/5

          backdrop-blur-xl

          overflow-hidden"
                >

                    <button
                        onClick={() => setShowProjects((prev) => !prev)}
                        className="
            w-full

            flex

            items-center

            justify-between

            px-8

            py-6

            hover:bg-white/5

            transition"
                    >

                        <div>

                            <h3 className="text-2xl font-bold text-white">
                                Featured Projects
                            </h3>

                            <p className="text-slate-400 mt-2">
                                Projects completed during this role
                            </p>

                        </div>

                        <motion.div
                            animate={{
                                rotate: showProjects ? 180 : 0,
                            }}
                        >

                            <FaChevronDown
                                className="text-blue-400 text-2xl"
                            />

                        </motion.div>

                    </button>

                    <AnimatePresence>

                        {showProjects && (

                            <motion.div

                                initial={{
                                    height: 0,
                                    opacity: 0,
                                }}

                                animate={{
                                    height: "auto",
                                    opacity: 1,
                                }}

                                exit={{
                                    height: 0,
                                    opacity: 0,
                                }}

                                transition={{
                                    duration: .45,
                                }}

                                className="overflow-hidden"
                            >

                                <div className="grid md:grid-cols-2 gap-6 p-8">

                                    {experience.projects.map((project, index) => (

                                        <motion.div

                                            key={project.title}

                                            initial={{
                                                opacity: 0,
                                                y: 25,
                                            }}

                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}

                                            transition={{
                                                delay: index * .08,
                                            }}

                                            whileHover={{
                                                y: -8,
                                                scale: 1.02,
                                            }}

                                            className="
                      relative

                      overflow-hidden

                      rounded-2xl

                      border

                      border-white/10

                      bg-[#0B1120]/70

                      p-6"
                                        >

                                            {/* Glow */}

                                            <div
                                                className="
                        absolute

                        inset-0

                        opacity-0

                        hover:opacity-100

                        transition

                        bg-gradient-to-br

                        from-blue-500/10

                        via-transparent

                        to-cyan-500/10"
                                            />

                                            <div className="relative z-10">

                                                <div className="flex items-center gap-4">

                                                    <div
                                                        className="
                            w-14
                            h-14

                            rounded-2xl

                            bg-blue-500/15

                            flex

                            items-center

                            justify-center

                            text-3xl"
                                                    >

                                                        {project.icon}

                                                    </div>

                                                    <div>

                                                        <h4 className="text-lg font-semibold text-white">
                                                            {project.title}
                                                        </h4>

                                                    </div>

                                                </div>

                                                <p className="mt-5 text-slate-400 leading-7">
                                                    {project.description}
                                                </p>

                                                {/* Tech Stack */}

                                                {project.tech && (

                                                    <div className="flex flex-wrap gap-2 mt-6">

                                                        {project.tech.map((tech) => (

                                                            <span
                                                                key={tech}
                                                                className="
                                rounded-full

                                border

                                border-blue-500/20

                                bg-blue-500/10

                                px-3

                                py-1

                                text-xs

                                text-blue-300"
                                                            >

                                                                {tech}

                                                            </span>

                                                        ))}

                                                    </div>

                                                )}

                                            </div>

                                        </motion.div>

                                    ))}

                                </div>

                            </motion.div>

                        )}

                    </AnimatePresence>

                </motion.div>

                {/* ========================================== */}
                {/* Biggest Learning */}
                {/* ========================================== */}

                <motion.div
                    whileHover={{
                        y: -6,
                    }}
                    className="
          col-span-12

          rounded-3xl

          border

          border-white/10

          bg-gradient-to-br

          from-blue-500/10

          to-cyan-500/10

          backdrop-blur-xl

          p-8"
                >

                    <h3 className="text-2xl font-bold text-white">
                        Biggest Learning
                    </h3>

                    <p className="mt-6 text-slate-300 leading-8">
                        {experience.learning}
                    </p>

                </motion.div>

            </div>

            {/* ========================================== */}
            {/* Floating Background Blur */}
            {/* ========================================== */}

            <motion.div
                animate={{
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                }}
                className="
          absolute
          -top-40
          -right-40

          w-[320px]
          h-[320px]

          rounded-full

          bg-blue-500/10

          blur-[120px]

          pointer-events-none"
            />

            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "easeInOut",
                }}
                className="
          absolute
          -bottom-40
          -left-40

          w-[300px]
          h-[300px]

          rounded-full

          bg-cyan-500/10

          blur-[120px]

          pointer-events-none"
            />

            {/* ========================================== */}
            {/* Premium Border Glow */}
            {/* ========================================== */}

            <motion.div
                className="
          pointer-events-none
          absolute
          inset-0
          rounded-[32px]"
                whileHover={{
                    boxShadow:
                        "0 0 0 1px rgba(59,130,246,.25), 0 0 60px rgba(59,130,246,.18)",
                }}
                transition={{
                    duration: .3,
                }}
            />

            {/* ========================================== */}
            {/* Mouse Spotlight */}
            {/* ========================================== */}

            <motion.div
                className="
          pointer-events-none
          absolute
          inset-0
          rounded-[32px]"
                style={{
                    background: spotlight,
                }}
            />

        </motion.div>
    );
}

