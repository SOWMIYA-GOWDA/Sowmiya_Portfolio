"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {projects} from "../data/projects";

import FeaturedProject from "../components/ui/FeaturedProject";
import ProjectCard from "../components/ui/ProjectCard";
import ProjectModal from "../components/ui/ProjectModal";
import ProjectSearch from "../components/ui/ProjectSearch";
import ProjectFilter from "../components/ui/ProjectFilter";
import ProjectGrid from "../components/ui/ProjectGrid";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function ProjectsPage() {

    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState(null);

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    const featuredProjects = projects.filter(
        project => project.featured
    );

    const filteredProjects = useMemo(() => {

        return projects.filter(project => {

            const matchCategory =
                category === "All" ||
                project.category === category;

            const keyword = search.toLowerCase();

            const matchSearch =
                project.title.toLowerCase().includes(keyword) ||

                project.description
                    .toLowerCase()
                    .includes(keyword);

            return matchCategory && matchSearch;

        });

    }, [search, category]);

    return (

        <main
            className="
            relative

            min-h-screen

            pt-36

            pb-24

            px-6"
        >

            <div className="max-w-7xl mx-auto">
               <Link
    href="/#projects"
    onClick={() => {
        sessionStorage.setItem("skip-loader", "true");
    }}
    className="
        fixed
        top-8
        left-8
        z-50

        inline-flex
        items-center
        gap-2

        rounded-full

        border
        border-white/10

        bg-[#0B1224]/80

        backdrop-blur-xl

        px-5
        py-3

        text-slate-300

        transition-all
        duration-300

        hover:border-cyan-400/40
        hover:bg-cyan-500/10
        hover:text-cyan-300"
>
    <ArrowLeft size={18} />
    Back
</Link>

                {/* Header */}

                <motion.div

                    initial={{
                        opacity:0,
                        y:30
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    className="text-center"
                >

                    <p className="uppercase tracking-[5px] text-blue-400">

                        PROJECTS

                    </p>

                    <h1
                        className="
                        mt-5

                        text-6xl

                        font-bold

                        text-white"
                    >

                        Project Archive

                    </h1>

                    <p
                        className="
                        mt-8

                        max-w-3xl

                        mx-auto

                        text-slate-400

                        leading-8"
                    >

                        Explore research projects, AI applications,
                        production systems, and intelligent solutions
                        built across Computer Vision, Generative AI,
                        Machine Learning, and Healthcare AI.

                    </p>

                </motion.div>

        

                {/* Featured */}

                <div className="mt-24">

                    <h2
                        className="
                        text-3xl

                        font-bold

                        text-white"
                    >

                        Featured Projects

                    </h2>

                    <div
                        className="
                        grid

                        lg:grid-cols-3

                        gap-8

                        mt-10"
                    >

                        {featuredProjects.map((project,index)=>(

                            <FeaturedProject

                                key={project.id}

                                project={project}

                                index={index}

                                onOpen={setSelectedProject}

                            />

                        ))}

                    </div>

                </div>

                {/* All Projects */}

                <div className="mt-28">

                    <h2
                        className="
                        text-3xl

                        font-bold

                        text-white"
                    >

                        All Projects

                    </h2>

                    <div className="mt-10">

    <ProjectGrid

        projects={projects}

        onOpen={setSelectedProject}

    />

</div>

                </div>

            </div>

            <ProjectModal

                project={selectedProject}

                isOpen={selectedProject !== null}

                onClose={() => setSelectedProject(null)}

            />

        </main>

    );

}