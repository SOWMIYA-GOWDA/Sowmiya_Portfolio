"use client";

import { useRef } from "react";
import {
    motion,
    useTransform,
    useMotionTemplate,
} from "framer-motion";
import SkillCategory from "./SkillCategory";

export default function StickyCard({
    category,
    i,
    progress,
    range,
    targetScale,
}) {
    const container = useRef(null);

    // Scale exactly like Skiper
    const scale = useTransform(
        progress,
        range,
        [1, targetScale]
    );

    // Fade previous cards slightly
    const opacity = useTransform(
        progress,
        range,
        [1, 0.9]
    );

    // Slight blur for depth
    const blur = useTransform(
    progress,
    range,
    [0, 3]
);

const filter = useMotionTemplate`blur(${blur}px)`;

    // Optional tiny rotation
    const rotate = useTransform(
        progress,
        range,
        [0, -2]
    );

    return (
        <div
            ref={container}
            className="
            sticky
            top-0
            flex
            h-screen
            items-center
            justify-center
            "
        >
            <motion.div
                style={{
                    scale,
                    opacity,
                    rotateX: rotate,

                    // 👇 This creates the exact stacked spacing
                    top: `calc(-5vh + ${i * 28 + 180}px)`,

                   filter,
                }}
                className="
                relative
                -top-1/4
                origin-top

                w-full
                max-w-5xl

                px-6

                will-change-transform
                "
            >
                <SkillCategory
                    category={category}
                />
            </motion.div>
        </div>
    );
}