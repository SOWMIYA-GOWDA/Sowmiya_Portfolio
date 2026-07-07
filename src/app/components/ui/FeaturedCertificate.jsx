"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

export default function FeaturedCertificate({ certificate, onOpen }) {

    return (

        <motion.div

            whileHover={{
                y: -8,
                scale: 1.02,
            }}

            transition={{
                duration: .25,
            }}

            className="
            group

            overflow-hidden

            rounded-3xl

            border

            border-white/10

            bg-white/5

            backdrop-blur-xl"

        >


            {/* Content */}

            <div className="p-6">

                {/* Issuer */}

                <span
                    className="
                    inline-flex

                    items-center

                    gap-2

                    rounded-full

                    border

                    border-cyan-500/20

                    bg-cyan-500/10

                    px-3

                    py-1

                    text-xs

                    text-cyan-300"

                >

                    <Award size={14} />

                    {certificate.issuer}

                </span>

                {/* Title */}

                <h3
                    className="
                    mt-5

                    text-xl

                    font-semibold

                    leading-snug

                    text-white"

                >

                    {certificate.title}

                </h3>

                {/* Year */}

                <div
                    className="
                    mt-4

                    flex

                    items-center

                    gap-2

                    text-slate-400"

                >

                    <Calendar size={16} />

                    <span className="text-sm">

                        {certificate.year}

                    </span>

                </div>

                {/* Footer */}

                <div className="mt-6">

                    <button
    onClick={() => onOpen(certificate)}
    className="
    inline-flex

    items-center

    gap-2

    text-sm

    font-medium

    text-cyan-300

    hover:text-cyan-200"

>

    View Certificate

    <ExternalLink size={16} />

</button>

                </div>

            </div>

        </motion.div>

    );

}