import React from 'react'
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
            className="mt-12 flex gap-6"
        >
            <a
                href="https://github.com/SOWMIYA-GOWDA"
                target="_blank"
                className="text-2xl text-gray-400 hover:text-blue-500 transition"
            >
                <FaGithub />
            </a>

            <a
                href="https://linkedin.com"
                target="_blank"
                className="text-2xl text-gray-400 hover:text-blue-500 transition"
            >
                <FaLinkedin />
            </a>
        </motion.div>
    )
}

export default SocialLinks