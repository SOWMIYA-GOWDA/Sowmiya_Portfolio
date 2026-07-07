"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 8;       // was 20 — shorter tail
const TRAIL_COLOR = "59, 130, 246";
const LINE_WIDTH_MAX = 3;     // was 6 — thinner head
const LINE_WIDTH_MIN = 0.5;   // was 1 — thinner tail
const IDLE_CLEAR_MS = 300;    // was 500 — clears faster once cursor stops

export default function BlueCursorTrail() {
    const canvasRef = useRef(null);
    const points = useRef([]);
    const rafId = useRef(null);
    const idleTimer = useRef(null);
    const isIdle = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (isCoarsePointer || prefersReducedMotion) return;

        const ctx = canvas.getContext("2d");
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        const resize = () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();
        window.addEventListener("resize", resize);

        const move = (e) => {
            isIdle.current = false;
            points.current.push({ x: e.clientX, y: e.clientY });
            if (points.current.length > TRAIL_LENGTH) {
                points.current.shift();
            }

            clearTimeout(idleTimer.current);
            idleTimer.current = setTimeout(() => {
                isIdle.current = true;
            }, IDLE_CLEAR_MS);
        };

        window.addEventListener("mousemove", move, { passive: true });

        const draw = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            if (isIdle.current && points.current.length > 0) {
                points.current.shift();
            }

            const pts = points.current;

            if (pts.length > 1) {
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.globalCompositeOperation = "lighter";

                for (let i = 1; i < pts.length; i++) {
                    const progress = i / pts.length;
                    const prev = pts[i - 1];
                    const curr = pts[i];

                    const width =
                        LINE_WIDTH_MIN + (LINE_WIDTH_MAX - LINE_WIDTH_MIN) * progress;
                    const alpha = progress * 0.5; // was 0.6 — slightly softer too

                    ctx.beginPath();
                    ctx.moveTo(prev.x, prev.y);

                    const midX = (prev.x + curr.x) / 2;
                    const midY = (prev.y + curr.y) / 2;
                    ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
                    ctx.lineTo(curr.x, curr.y);

                    ctx.strokeStyle = `rgba(${TRAIL_COLOR}, ${alpha})`;
                    ctx.lineWidth = width;
                    ctx.shadowColor = `rgba(${TRAIL_COLOR}, 0.8)`;
                    ctx.shadowBlur = 6; // was 10 — tighter glow
                    ctx.stroke();
                }

                const head = pts[pts.length - 1];
                ctx.beginPath();
                ctx.arc(head.x, head.y, LINE_WIDTH_MAX * 0.9, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${TRAIL_COLOR}, 0.9)`;
                ctx.shadowColor = `rgba(${TRAIL_COLOR}, 1)`;
                ctx.shadowBlur = 8; // was 14
                ctx.fill();
            }

            rafId.current = requestAnimationFrame(draw);
        };
        rafId.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("resize", resize);
            clearTimeout(idleTimer.current);
            if (rafId.current != null) cancelAnimationFrame(rafId.current);
            points.current = [];
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0"
            style={{ zIndex: 99999 }}
        />
    );
}