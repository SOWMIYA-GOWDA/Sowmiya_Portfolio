"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, Award } from "lucide-react";

export default function CertificateModal({
    certificate,
    isOpen,
    onClose,
}) {

    if (!certificate) return null;

    return (

        <AnimatePresence>

            {isOpen && (

                <motion.div

                    initial={{ opacity: 0 }}

                    animate={{ opacity: 1 }}

                    exit={{ opacity: 0 }}

                    onClick={onClose}

                    className="
                    fixed

                    inset-0

                    z-[9999]

                    flex

                    items-center

                    justify-center

                    bg-black/80

                    backdrop-blur-md

                    p-6"

                >

                    <motion.div

                        initial={{
                            scale: .9,
                            opacity: 0,
                            y: 20,
                        }}

                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0,
                        }}

                        exit={{
                            scale: .9,
                            opacity: 0,
                        }}

                        transition={{
                            duration: .3,
                        }}

                        onClick={(e) => e.stopPropagation()}

                        className="
                        relative

                        w-full

                        max-w-5xl

                        overflow-hidden

                        rounded-3xl

                        border

                        border-white/10

                        bg-[#08111F]

                        shadow-2xl"

                    >

                        {/* Close */}

                        <button

                            onClick={onClose}

                            className="
                            absolute

                            right-5

                            top-5

                            z-20

                            rounded-full

                            bg-white/10

                            p-3

                            text-white

                            transition

                            hover:bg-red-500"

                        >

                            <X size={20} />

                        </button>

                        {/* Certificate Image */}

                        <div className="bg-[#050816]">

                            <img

                                src={certificate.certificate}

                                alt={certificate.title}

                                className="
                                w-full

                                max-h-[70vh]

                                object-contain"

                            />

                        </div>

                        {/* Footer */}

                        <div className="border-t border-white/10 p-8">

                            <div className="flex flex-wrap items-center justify-between gap-6">

                                <div>

                                    <span
                                        className="
                                        inline-flex

                                        items-center

                                        gap-2

                                        rounded-full

                                        border

                                        border-cyan-500/20

                                        bg-cyan-500/10

                                        px-4

                                        py-2

                                        text-xs

                                        text-cyan-300"

                                    >

                                        <Award size={14} />

                                        {certificate.issuer}

                                    </span>

                                    <h2
                                        className="
                                        mt-5

                                        text-3xl

                                        font-bold

                                        text-white"

                                    >

                                        {certificate.title}

                                    </h2>

                                </div>

                                <div
                                    className="
                                    flex

                                    items-center

                                    gap-3

                                    rounded-2xl

                                    border

                                    border-white/10

                                    bg-white/5

                                    px-5

                                    py-3"

                                >

                                    <Calendar
                                        size={18}
                                        className="text-cyan-400"
                                    />

                                    <span className="text-slate-300">

                                        {certificate.year}

                                    </span>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>

    );

}