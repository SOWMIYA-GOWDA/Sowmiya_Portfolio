"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import ResumeModal from "../ui/ResumeModal";

export default function HeroContent() {
    const [openResume, setOpenResume] = useState(false);

    return (
        <>
            <div>

                {/* Welcome Badge */}
                <motion.p
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
    delay: 3,
    ease: "easeOut",
  }}
  className="text-blue-400 font-semibold tracking-widest uppercase"
>
  Welcome
</motion.p>

                {/* Heading */}
                <motion.div
    initial={{
        opacity: 0,
        scale: 0.6,
    }}
    animate={{
        opacity: 1,
        scale: 1,
    }}
    transition={{
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay: 3.2,
    }}
    className="mt-5"
>
    <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
        Hi, I'm
        <br />

        <motion.span
            initial={{
    opacity: 0,
    scaleX: 0,
    scaleY: 1.3,
}}

animate={{
    opacity: 1,
    scaleX: [0, 1.3, 0.9, 1.12, 0.98, 1],
    scaleY: [1.3, 0.82, 1.08, 0.95, 1.02, 1],
}}
            transition={{
                duration: 1.2,
                delay: 3.7,
                ease: "easeInOut",
            }}
            style={{
                display: "inline-block",
                transformOrigin: "center",
            }}
            className="text-blue-500"
        >
            Sowmiya P
        </motion.span>
    </h1>
</motion.div>

                {/* Typewriter */}
                <motion.div
                    initial={{
                        width: 0,
                        opacity: 0,
                    }}
                    animate={{
                        width: "100%",
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 3.7,
                    }}
                    className="overflow-hidden whitespace-nowrap mt-6 h-10 text-2xl font-semibold text-blue-400"
                >
                    <Typewriter
                        words={[
                            "AI/ML Engineer",
                            "Computer Vision Engineer",
                            "LLM Developer",
                            "Generative AI Engineer",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={40}
                        delaySpeed={1800}
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 40,
                        filter: "blur(10px)",
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    transition={{
                        duration: 1.3,
                        delay: 4,
                    }}
                    className="mt-8 max-w-xl text-lg leading-8 text-slate-400"
                >
                    AI/ML Engineer at{" "}
                    <span className="font-semibold text-white">
                        ENARXI Innovation Pvt. Ltd.
                    </span>{" "}
                    passionate about building intelligent AI solutions using
                    <span className="text-white"> Machine Learning</span>,
                    <span className="text-white"> Computer Vision</span>,
                    <span className="text-white"> Large Language Models</span>,
                    and
                    <span className="text-white"> AI Agents</span> to solve
                    real-world challenges.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 80,
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 130,
                        damping: 12,
                        delay: 4.3,
                    }}
                >
                    <HeroButtons setOpenResume={setOpenResume} />
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 4.6,
                            },
                        },
                    }}
                >
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 30,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    >
                        <SocialLinks />
                    </motion.div>
                </motion.div>

            </div>

            <ResumeModal
                open={openResume}
                setOpen={setOpenResume}
            />
        </>
    );
}