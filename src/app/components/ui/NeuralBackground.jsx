"use client";

import { useMemo } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Must be defined OUTSIDE the component — ParticlesProvider throws if this
// function's reference changes between renders ("init callback must be stable").
const initEngine = async (engine) => {
    await loadSlim(engine);
};

export default function NeuralBackground() {
    const options = useMemo(
        () => ({
            fullScreen: false,

            background: {
                color: { value: "transparent" },
            },

            fpsLimit: 120,

            particles: {
                number: {
                    value: 90,
                    density: { enable: true, area: 900 },
                },

                color: {
                    value: ["#3B82F6", "#818CF8", "#60A5FA", "#A78BFA"],
                },

                links: {
                    enable: true,
                    distance: 140,
                    color: "#60A5FA",
                    opacity: 0.15,
                    width: 1,
                    triangles: { enable: true, opacity: 0.02 },
                },

                move: {
                    enable: true,
                    speed: 0.6,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: { default: "bounce" },
                },

                opacity: {
                    value: { min: 0.15, max: 0.5 },
                    animation: {
                        enable: true,
                        speed: 0.6,
                        sync: false,
                        startValue: "random",
                    },
                },

                size: {
                    value: { min: 1, max: 3.5 },
                    animation: {
                        enable: true,
                        speed: 1.5,
                        sync: false,
                        startValue: "random",
                    },
                },
            },

            interactivity: {
                events: {
                    onHover: { enable: true, mode: "grab" },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 180,
                        links: { opacity: 0.45 },
                    },
                },
            },

            detectRetina: true,
        }),
        []
    );

    return (
        <ParticlesProvider init={initEngine}>
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.12), transparent 55%), " +
                            "radial-gradient(circle at 80% 70%, rgba(129,140,248,0.10), transparent 55%)",
                        pointerEvents: "none",
                    }}
                />
                <Particles
                    id="tsparticles"
                    options={options}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                    }}
                />
            </div>
        </ParticlesProvider>
    );
}