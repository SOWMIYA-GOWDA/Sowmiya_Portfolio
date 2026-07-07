"use client";

import { motion } from "framer-motion";
import { FileText, BookOpen, Award, Calendar } from "lucide-react";

const stats = [
    {
        icon: FileText,
        value: "3",
        label: "Research Papers",
        color: "text-cyan-400",
    },
    {
        icon: Award,
        value: "2",
        label: "Published",
        color: "text-green-400",
    },
    {
        icon: BookOpen,
        value: "1",
        label: "Submitted",
        color: "text-yellow-400",
    },
    {
        icon: Calendar,
        value: "2025-26",
        label: "Research Journey",
        color: "text-purple-400",
    },
];

export default function ResearchStats() {
    return (
        <section className="mt-20">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                {stats.map((stat, index) => {

                    const Icon = stat.icon;

                    return (

                        <motion.div
                            key={stat.label}

                            initial={{
                                opacity: 0,
                                y: 30,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{
                                once: true,
                            }}

                            transition={{
                                delay: index * 0.1,
                            }}

                            whileHover={{
                                y: -6,
                            }}

                            className="
                                group

                                rounded-3xl

                                border
                                border-white/10

                                bg-white/5

                                backdrop-blur-xl

                                p-8

                                text-center"

                        >

                            <div
                                className="
                                    mx-auto

                                    flex
                                    h-14
                                    w-14

                                    items-center
                                    justify-center

                                    rounded-2xl

                                    bg-white/5

                                    border
                                    border-white/10"
                            >

                                <Icon
                                    size={26}
                                    className={stat.color}
                                />

                            </div>

                            <h2
                                className="
                                    mt-6

                                    text-4xl

                                    font-bold

                                    text-white"
                            >

                                {stat.value}

                            </h2>

                            <p
                                className="
                                    mt-2

                                    text-sm

                                    text-slate-400"
                            >

                                {stat.label}

                            </p>

                        </motion.div>

                    );

                })}

            </div>

        </section>
    );
}