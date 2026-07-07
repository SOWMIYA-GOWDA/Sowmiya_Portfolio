"use client";

import NeuralBackground from "../ui/NeuralBackground";
import ScrollIndicator from "../ui/ScrollIndicator";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {


    return (
        <>
            <section
                id="home"
                className="relative min-h-screen overflow-hidden "
            >
                {/* Background */}


                {/* Content */}
                <div className="relative mt-14 z-10 max-w-7xl mx-auto min-h-screen grid lg:grid-cols-2 items-center gap-16 px-6">
                    <HeroContent />
                    <HeroImage />
                </div>
                <ScrollIndicator />
            </section>
        </>
    );
}