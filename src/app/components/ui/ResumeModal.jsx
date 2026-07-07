"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    FaDownload,
    FaTimes,
    FaPrint,
    FaExternalLinkAlt,
} from "react-icons/fa";

export default function ResumeModal({ open, setOpen }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", handleKey);

        return () => window.removeEventListener("keydown", handleKey);
    }, [setOpen]);

    const handlePrint = () => {
        const printWindow = window.open("/resume.pdf");

        if (printWindow) {
            printWindow.onload = () => {
                printWindow.print();
            };
        }
    };

    if (!open) return null;

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{
                            scale: 0.9,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.35,
                            ease: "easeOut",
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-6xl rounded-3xl border border-white/10 bg-[#0B1120]/80 backdrop-blur-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}

                        <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">

                            <div>

                                <h2 className="text-3xl font-bold text-white">
                                    Resume Preview
                                </h2>

                                <p className="mt-1 text-sm text-slate-400">
                                    View, download, or print my resume.
                                </p>

                            </div>

                            <button
                                onClick={() => setOpen(false)}
                                className="rounded-full p-3 bg-white/5 hover:bg-red-500 transition"
                            >
                                <FaTimes className="text-white" />
                            </button>

                        </div>

                        {/* Resume */}

                        <div className="p-6">

                            <iframe
                                src="/resume.pdf"
                                title="Resume"
                                className="w-full h-[70vh] rounded-2xl border border-white/10 bg-white"
                            />

                        </div>

                        {/* Footer */}

                        <div className="flex flex-wrap justify-end gap-4 border-t border-white/10 p-6">

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition"
                            >
                                <FaExternalLinkAlt />

                                Open
                            </a>

                            <a
                                href="/resume.pdf"
                                download
                                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105 transition"
                            >
                                <FaDownload />

                                Download
                            </a>

                            <button
                                onClick={handlePrint}
                                className="flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-6 py-3 font-medium text-white hover:bg-blue-500/20 transition"
                            >
                                <FaPrint />

                                Print
                            </button>

                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}