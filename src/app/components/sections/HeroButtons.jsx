"use client";

import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaDownload,
    FaFolderOpen,
    FaEnvelope,
} from "react-icons/fa";
import MagneticButton from "../ui/MagneticButton";

const buttonVariants = {
    initial: {
        scale: 1,
    },
    hover: {
        scale: 1.05,
        y: -4,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15,
        },
    },
};

export default function HeroButtons({ setOpenResume }) {
    return (
        <div className="mt-10 flex flex-wrap gap-5">

            {/* Projects */}

            <motion.a

                href="#projects"
                rel="noopener noreferrer"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/30"
            >
                <FaDownload />

                View Projects

                <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                    }}
                >
                    <FaArrowRight />
                </motion.span>
            </motion.a>

            {/* Resume */}


            <MagneticButton

                onClick={() => setOpenResume(true)}

                className="px-7 py-4 rounded-full border border-white/10 hover:border-blue-500 transition cursor-pointer"

            >
                <FaFolderOpen />
                View Resume


            </MagneticButton>


        </div>
    );
}