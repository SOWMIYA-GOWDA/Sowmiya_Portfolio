"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
    return (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
            <motion.div
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="flex flex-col items-center"
            >
                {/* First Arrow */}

                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                        opacity: [1, 0.3, 1],
                    }}
                    transition={{
                        duration: 1.6,
                        repeat: Infinity,
                    }}
                    className="drop-shadow-[0_0_10px_rgba(255,255,255,.6)]"
                >
                    <polyline points="6 9 12 15 18 9" />
                </motion.svg>

                {/* Second Arrow */}

                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        delay: 0.2,
                    }}
                    className="-mt-6 drop-shadow-[0_0_10px_rgba(255,255,255,.6)]"
                >
                    <polyline points="6 9 12 15 18 9" />
                </motion.svg>
            </motion.div>
        </div>
    );
}