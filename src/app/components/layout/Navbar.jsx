"use client";

import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled
                ? "backdrop-blur-xl bg-[#050816]/70 border-b border-white/10 shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
                {/* Logo */ }
<div
  className="
    p-2 rounded-full
    bg-white/5 backdrop-blur-md
    border border-blue-400/20
    shadow-[0_0_25px_rgba(59,130,246,0.25)]
  "
>
  <img
  src="/Sacred_S_Minimalist_Logo-removebg-preview.png"
  alt="Sowmiya"
  className="
h-10 w-10
[filter:drop-shadow(0_0_3px_rgba(255,255,255,0.8))_drop-shadow(0_0_10px_rgba(255,255,255,0.35))]
"
/>
</div>

                {/* Navigation */}

                <nav className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Resume */}

                <a
                    href="#contact"
                    className="hidden md:flex px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition text-white font-semibold shadow-lg"
                >
                    Contact
                </a>
            </div>
        </header>
    );
}