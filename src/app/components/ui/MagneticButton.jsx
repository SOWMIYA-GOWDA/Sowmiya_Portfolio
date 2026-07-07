"use client";

import { motion } from "framer-motion";
import useMagnetic from "../../hooks/useMagnetic";

export default function MagneticButton({
    children,
    className = "",
    href,
    onClick,
    strength = 10,
}) {
    const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic({ strength });

    return (
        <motion.a
            ref={ref}
            href={href}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }} // framer-motion composes this with scale below into one transform
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
            }}
            className={`inline-flex items-center justify-center will-change-transform ${className}`}
        >
            {children}
        </motion.a>
    );
}