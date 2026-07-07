"use client";

import { motion } from "framer-motion";
import { research } from "../../data/research";
import ResearchCard from "../ui/ResearchCard";
import ResearchModal from "../ui/ResearchModal";

import { useState } from "react";
import ResearchStats from "../ui/ResearchStats";

export default function Research() {

    const [selectedPaper, setSelectedPaper] = useState(null);

    const featuredResearch = research.filter(
        paper => paper.featured
    );

    return (

        <section
            id="research"
            className="relative py-32 px-6"
        >

            <div className="max-w-7xl mx-auto">

                {/* ========================= */}
                {/* Section Header */}
                {/* ========================= */}

                <div className="text-center mb-20">

                    <p className="uppercase tracking-[5px] text-blue-400">

                        RESEARCH

                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-white">

                        Publications & Innovation

                    </h2>

                    <p
                        className="
                        mt-6

                        max-w-3xl

                        mx-auto

                        text-slate-400

                        leading-8"
                    >

                        Research contributions in Artificial Intelligence,
                        Healthcare AI, Computer Vision, Machine Learning,
                        and Intelligent Systems.

                    </p>

                </div>

                {/* Statistics */}
                
                                <ResearchStats />

                <div
                                        className="
                                        grid
                
                                        md:grid-cols-2
                
                                        xl:grid-cols-3
                
                                        gap-8
                
                                        mt-12"
                                    >
                
                                        {research.map((paper, index) => (
                
                                            <ResearchCard
                
                                                key={paper.id}
                
                                                paper={paper}
                
                                                index={index}
                
                                                onOpen={setSelectedPaper}
                
                                            />
                
                                        ))}
                
                                    </div>

                

            </div>

            {/* ========================= */}
            {/* Research Modal */}
            {/* ========================= */}

            <ResearchModal

                paper={selectedPaper}

                isOpen={selectedPaper !== null}

                onClose={() => setSelectedPaper(null)}

            />

        </section>

    );

}