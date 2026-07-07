"use client";

import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export default function useMagnetic({
    strength = 30,
    springConfig = { stiffness: 150, damping: 15, mass: 0.1 },
} = {}) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Springs smooth out the raw mouse delta instead of snapping 1:1
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const rect = ref.current.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;

        x.set(relX / strength);
        y.set(relY / strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return { ref, x: springX, y: springY, handleMouseMove, handleMouseLeave };
}