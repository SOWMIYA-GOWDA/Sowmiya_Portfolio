"use client";

import { motion } from "framer-motion";

import {projects} from "../../data/projects";
import Link from "next/link";

import FeaturedProject from "../ui/FeaturedProject";
import ProjectCard from "../ui/ProjectCard";
import { useState } from "react";
import ProjectModal from "../ui/ProjectModal";

export default function Projects() {
    
    const [selectedProject, setSelectedProject] = useState(null);
    const featuredProjects = projects.filter(
        project => project.featured
    );

    const otherProjects = projects.filter(
        project => !project.featured
    );

    return (

        <section
            id="projects"
            className="relative py-32 px-6"
        >

            <div className="max-w-7xl mx-auto">

                
               <div className="text-center mb-20">

                    <p className="uppercase tracking-[5px] text-blue-400">
                        PROJECTS
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Featured Work
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
                       Transforming complex challenges into intelligent AI solutions through computer vision, generative AI, and machine learning.
                    </p>

                </div>

                {/* ========================= */}
                {/* Featured Projects */}
                {/* ========================= */}

                <div className="grid lg:grid-cols-3 gap-8 mt-20">

                    {featuredProjects.map((project, index) => (

    <FeaturedProject
        key={project.id}
        project={project}
        index={index}
        onOpen={setSelectedProject}
    />

))}

                </div>

                {/* ========================= */}
                {/* Other Projects */}
                {/* ========================= */}

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        delay: .2
                    }}

                    className="mt-28"
                >

                    <div className="flex items-center justify-between mb-10">

                        <h3 className="text-3xl font-bold text-white">

                            More Projects

                        </h3>

                        <Link
    href="/projects"
    className="
        px-6
        py-3

        rounded-full

        border

        border-cyan-500/20

        hover:bg-cyan-500/10

        transition"
>
    View All →
</Link>

                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {otherProjects.slice(0, 6).map(project => (

                            <ProjectCard
                            key={project.id}
    project={project}
    onOpen={setSelectedProject}
/>

                        ))}

                    </div>

                </motion.div>

            </div>
            <ProjectModal
    project={selectedProject}
    isOpen={selectedProject !== null}
    onClose={() => setSelectedProject(null)}
/>

        </section>

    );

}