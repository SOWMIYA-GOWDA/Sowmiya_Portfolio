"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const loadingSteps = [
    "Initializing AI Portfolio...",
    "Loading Experience...",
    "Loading Research...",
    "Preparing Intelligence...",
    "Launching..."
];

export default function Loader() {
    const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return true;

    return !sessionStorage.getItem("skip-loader");
});
    const [step, setStep] = useState(0);

    useEffect(() => {
    if (!show) {
        sessionStorage.removeItem("skip-loader");
        return;
    }

    const interval = setInterval(() => {
        setStep((prev) => {
            if (prev < loadingSteps.length - 1) return prev + 1;
            clearInterval(interval);
            return prev;
        });
    }, 400);

    const timer = setTimeout(() => {
        setShow(false);
    }, 2400);

    return () => {
        clearTimeout(timer);
        clearInterval(interval);
    };
}, [show]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-[#050816] flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-[420px]">

                        {/* Logo */}

                        <motion.h1
                            className="text-center text-4xl font-bold text-white mb-12"
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            SOWMIYA
                            <span className="text-blue-500"> AI/ML Engineer</span>
                        </motion.h1>

                        {/* Loading Text */}

                        <motion.p
                            key={step}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="text-gray-300 mb-5 text-center tracking-wide"
                        >
                            {loadingSteps[step]}
                        </motion.p>

                        {/* Progress Bar */}

                        <div className="w-full h-[5px] rounded-full bg-white/10 overflow-hidden">

                            <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 2.2,
                                    ease: "easeInOut",
                                }}
                            />

                        </div>

                        {/* Percentage */}

                        <motion.p
                            className="text-center text-blue-400 mt-5 text-sm tracking-widest"
                            animate={{
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                            }}
                        >
                            AI SYSTEM BOOTING...
                        </motion.p>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}