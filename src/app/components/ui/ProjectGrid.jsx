"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({
    projects,
    onOpen,
}) {

    if (!projects.length) {

        return (

            <motion.div

                initial={{
                    opacity: 0,
                }}

                animate={{
                    opacity: 1,
                }}

                className="
                flex

                flex-col

                items-center

                justify-center

                py-24"

            >

                <h3
                    className="
                    text-2xl

                    font-semibold

                    text-white"
                >

                    No Projects Found

                </h3>

                <p
                    className="
                    mt-3

                    text-slate-400"
                >

                    Try another keyword or category.

                </p>

            </motion.div>

        );

    }

    return (

        <motion.div

            layout

            className="
            grid

            md:grid-cols-2

            xl:grid-cols-3

            gap-8"

        >

            {projects.map((project) => (

                <motion.div

                    key={project.id}

                    layout

                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    exit={{
                        opacity: 0,
                        scale: .9,
                    }}

                    transition={{
                        duration: .3,
                    }}

                >

                    <ProjectCard

                        project={project}

                        onOpen={onOpen}

                    />

                </motion.div>

            ))}

        </motion.div>

    );

}