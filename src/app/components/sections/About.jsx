"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NeuralBackground from "../ui/NeuralBackground";
import { skills } from "../../data/skills";
import SkillCategory from "../ui/SkillCategory";
import { certifications } from "../../data/certifications";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FeaturedCertificate from "../ui/FeaturedCertificate";
import SkillStack from "../ui/SkillStack";
import CertificateModal from "../ui/CertificateModal"
import { categories } from "../../data/projects";
const timeline = [
    {
        year: "2022",
        title: "Started My AI Journey",
        description:
            "Began exploring Artificial Intelligence, Machine Learning, and programming fundamentals while building a strong technical foundation.",
    },
    {
        year: "2023",
        title: "Machine Learning & Computer Vision",
        description:
            "Developed practical AI projects focused on Machine Learning, Deep Learning, and Computer Vision applications.",
    },
    {
        year: "2024",
        title: "Research & Predictive Analytics",
        description:
            "Worked on AI research, predictive analytics, medical AI solutions, and published research in international conferences.",
    },
    {
        year: "2025",
        title: "Real-world AI Solutions",
        description:
            "Built enterprise AI solutions including Computer Vision systems, OCR automation, AI Agents, and industrial AI applications.",
    },
    {
        year: "2026",
        title: "AI/ML Engineer",
        description:
            "Joined ENARXI Innovation Pvt. Ltd. as an AI/ML Engineer, delivering production-ready AI solutions for enterprise clients.",
    },
];

const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function About() {
    const timelineRef = useRef(null);
const [selectedCertificate, setSelectedCertificate] = useState(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 75%", "end 55%"],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            id="about"
            className="relative py-32 bg-transparent"
        >
            <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Heading — keep this as once:true, headings replaying on every
           scroll usually reads as annoying rather than polished */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-center"
                >
                    <p className="text-blue-400 uppercase tracking-[4px] text-sm font-medium">
                        ABOUT ME
                    </p>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                        My Journey in Artificial Intelligence
                    </h2>
                    <p className="mt-8 max-w-3xl mx-auto text-slate-400 leading-8 text-lg">
                        I'm passionate about building intelligent AI systems that solve
                        real-world challenges through Machine Learning, Computer Vision,
                        Large Language Models, and AI Agents. Every project I build is an
                        opportunity to transform complex problems into impactful solutions.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative mt-24">
                    <div className="absolute left-6 top-0 h-full w-[2px] bg-white/10" />

                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-6 top-0 w-[2px] bg-gradient-to-b from-blue-400 via-blue-500 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    />

                    {timeline.map((item, index) => (
                        <motion.div
                            key={item.year}
                            initial="hidden"
                            whileInView="visible"
                            exit="hidden"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={itemVariants}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: index * 0.1,
                            }}
                            className="relative flex gap-6 md:gap-8 mb-16 last:mb-0"
                        >
                            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,.7)]">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-20" />
                                <div className="h-3 w-3 rounded-full bg-white" />
                            </div>

                            <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.07]">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <span className="text-blue-400 font-semibold tracking-wide">
                                        {item.year}
                                    </span>
                                    <span className="text-xs uppercase tracking-widest text-slate-500">
                                        {String(index + 1).padStart(2, "0")} /{" "}
                                        {String(timeline.length).padStart(2, "0")}
                                    </span>
                                </div>
                                <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-4 text-sm md:text-base text-slate-400 leading-7">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* ====================================== */}
{/* Core Skills */}
{/* ====================================== */}

<motion.div

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
        duration: .5,
    }}

    className="relative mt-32"

>

    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[180px]
          "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-500/10
          blur-[160px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-24 text-center"
        >
          <p
            className="
            text-sm
            uppercase
            tracking-[0.4em]
            text-cyan-400
            "
          >
            Technical Expertise
          </p>

          <h2
            className="
            mt-5
            text-5xl
            font-bold
            text-white
            "
          >
            Skills & Technologies
          </h2>

          <p
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-400
            "
          >
            Building AI-powered applications with Machine Learning,
            Deep Learning, Generative AI, Computer Vision and
            Full-Stack Development.
          </p>
        </motion.div>

        <SkillStack
          categories={skills}
        />
      </div>

     

</motion.div>
{/* ====================================== */}
{/* Featured Certifications */}
{/* ====================================== */}

<motion.div

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
    id="certifications"

    className="mt-32"

>

    <div className="flex items-center justify-between mb-14" >

        <div>

            <p className="uppercase tracking-[5px] text-blue-400">

                CERTIFICATIONS

            </p>

            <h2 className="mt-4 text-5xl font-bold text-white">

                Featured Certifications

            </h2>

        </div>

        <Link
    href="/certifications"
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

    {certifications.slice(0, 3).map((certificate) => (

        <FeaturedCertificate

    key={certificate.id}

    certificate={certificate}

    onOpen={setSelectedCertificate}

/>

    ))}

</div>

</motion.div>
            </div>
            <CertificateModal

    certificate={selectedCertificate}

    isOpen={selectedCertificate !== null}

    onClose={() => setSelectedCertificate(null)}

/>
        </section>
    );
}