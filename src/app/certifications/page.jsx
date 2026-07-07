"use client";

import { useState } from "react";
import { Award } from "lucide-react";

import { certifications } from "../data/certifications";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TimelineRoadmap from "../components/ui/TimelineRoadmap";
import CertificateModal from "../components/ui/CertificateModal";
import NeuralBackground from "../components/ui/NeuralBackground";

export default function CertificationsPage() {

    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return (

        <main
            className="
            relative

            min-h-screen

            overflow-hidden

            bg-[#050816]

            px-6

            pt-36

            pb-24
            bg-transparent"

        >

            {/* Background Glow */}

           <NeuralBackground/>

            <div
                className="
                absolute

                right-0

                top-1/3

                h-[450px]

                w-[450px]

                rounded-full

                bg-cyan-500/10

                blur-[120px]"
            />


            <div className="relative mx-auto max-w-7xl">
     <Link
    href="/#certifications"
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

                <div className="text-center mb-14">

                    <div
                        className="
                        inline-flex

                        items-center

                        gap-2

                        rounded-full

                        border

                        border-cyan-400/20

                        bg-cyan-400/10

                        px-4

                        py-2

                        text-cyan-300"
                    >

                        <Award size={16} />

                        Learning Journey

                    </div>

                    <h1
                        className="
                        mt-8

                        text-6xl

                        font-bold

                        text-white"
                    >

                        Certification 

                    </h1>

                    <p
                        className="
                        mx-auto

                        mt-8

                        max-w-3xl

                        text-lg

                        leading-8

                        text-slate-400"
                    >

                        Every certification represents another milestone in
                        my journey as an AI Engineer—from programming and
                        cloud fundamentals to research publications,
                        enterprise AI, and intelligent systems.

                    </p>

                </div>

                {/* Timeline */}

                <TimelineRoadmap

                    items={certifications}

                    onOpen={setSelectedCertificate}

                />

            </div>

            {/* Modal */}

            <CertificateModal

                certificate={selectedCertificate}

                isOpen={selectedCertificate !== null}

                onClose={() => setSelectedCertificate(null)}

            />

        </main>

    );

}