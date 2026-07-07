"use client";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative border-t border-white/10 bg-[#050816]">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Top */}

                <div className="flex flex-col md:flex-row justify-between gap-10">

                    {/* Left */}

                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            AI<span className="text-blue-500">Nexus</span>
                        </h2>

                        <p className="mt-4 text-gray-400 max-w-md leading-7">
                            Building intelligent AI solutions through Machine Learning,
                            Computer Vision, LLMs, and AI Agents that solve real-world
                            challenges.
                        </p>
                    </div>

                    {/* Center */}

                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                            <li><a href="#about" className="hover:text-blue-400">About</a></li>
                            <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
                            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                            <li><a href="#research" className="hover:text-blue-400">Research</a></li>
                            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right */}

                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Connect
                        </h3>

                        <div className="flex gap-5 text-2xl">

                            <a
                                href="https://github.com/SOWMIYA-GOWDA"
                                target="_blank"
                                className="text-gray-400 hover:text-blue-500 transition"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/sowmiya-p-gowda-9b7103369"
                                target="_blank"
                                className="text-gray-400 hover:text-blue-500 transition"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="mailto:sowmiyapgowda0504@gmail.com"
                                className="text-gray-400 hover:text-blue-500 transition"
                            >
                                <FaEnvelope />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Divider */}

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

                {/* Bottom */}

                <div className="flex flex-col md:flex-row items-center justify-between gap-5">

                    <p className="text-gray-500 text-sm">
                        © {year} Sowmiya P. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="w-11 h-11 rounded-full border border-blue-500/30 bg-white/5 backdrop-blur-lg hover:bg-blue-600 transition flex items-center justify-center"
                    >
                        <FaArrowUp className="text-white" />
                    </button>

                </div>

            </div>
        </footer>
    );
}