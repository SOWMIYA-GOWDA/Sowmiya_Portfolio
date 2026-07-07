"use client";

import { motion } from "framer-motion";

const timeline = [
    {
        year: "2025",
        status: "Published",
        title: "GallIntel",
        subtitle: "Genetic Algorithm Optimized Intelligent Gallstone Prediction",
        color: "bg-yellow-400",
    },
    {
        year: "2025",
        status: "Published",
        title: "Tuberculosis Detection",
        subtitle: "Deep Learning & Ensemble Learning for Early TB Prediction",
        color: "bg-green-400",
    },
    {
        year: "2026",
        status: "Submitted",
        title: "Crowd Monitoring & Risk Analysis",
        subtitle: "Real-Time Crowd Monitoring Using Video Processing",
        color: "bg-cyan-400",
    },
];

export default function ResearchTimeline() {
    return (
        <section className="mt-28">

            <div className="mb-12 text-center">

                <p className="uppercase tracking-[5px] text-cyan-400">

                    TIMELINE

                </p>

                <h2 className="mt-4 text-4xl font-bold text-white">

                    Research Journey

                </h2>

                <p className="mt-4 text-slate-400">

                    My academic research progression from healthcare AI to
                    intelligent computer vision systems.

                </p>

            </div>

            <div className="relative max-w-4xl mx-auto">

                {/* Vertical Line */}

                <div
                    className="
                    absolute

                    left-6

                    top-0

                    bottom-0

                    w-[2px]

                    bg-gradient-to-b

                    from-cyan-500

                    via-blue-500

                    to-purple-500"
                />

                <div className="space-y-12">

                    {timeline.map((item, index) => (

                        <motion.div

                            key={item.title}

                            initial={{
                                opacity: 0,
                                x: -30,
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}

                            viewport={{
                                once: true,
                            }}

                            transition={{
                                delay: index * 0.15,
                            }}

                            className="relative flex gap-8"

                        >

                            {/* Timeline Dot */}

                            <div
                                className={`
                                relative

                                z-10

                                mt-2

                                h-5
                                w-5

                                rounded-full

                                ${item.color}

                                ring-8

                                ring-[#08111F]
                            `}
                            />

                            {/* Card */}

                            <motion.div

                                whileHover={{
                                    y: -4,
                                }}

                                className="
                                flex-1

                                rounded-3xl

                                border

                                border-white/10

                                bg-white/5

                                backdrop-blur-xl

                                p-7"

                            >

                                <div className="flex flex-wrap items-center justify-between gap-3">

                                    <span
                                        className="
                                        text-cyan-300

                                        font-semibold"

                                    >

                                        {item.year}

                                    </span>

                                    <span
                                        className={`
                                        rounded-full

                                        px-3
                                        py-1

                                        text-xs

                                        ${
                                            item.status === "Published"
                                                ? "bg-green-500/15 text-green-400 border border-green-500/20"
                                                : "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20"
                                        }
                                    `}
                                    >

                                        {item.status}

                                    </span>

                                </div>

                                <h3
                                    className="
                                    mt-5

                                    text-2xl

                                    font-semibold

                                    text-white"

                                >

                                    {item.title}

                                </h3>

                                <p
                                    className="
                                    mt-3

                                    text-slate-400

                                    leading-7"

                                >

                                    {item.subtitle}

                                </p>

                            </motion.div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}