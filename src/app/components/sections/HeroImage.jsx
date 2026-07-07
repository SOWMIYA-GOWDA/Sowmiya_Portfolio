import React from 'react'
import { motion } from "framer-motion"
function HeroImage() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3 }}
            className="flex justify-center"
        >

            <div className="relative">

                {/* Glow */}

                <div className="absolute inset-0 rounded-full bg-blue-500 blur-[100px] opacity-20" />

                {/* Animated Ring */}

                <div className="w-[430px] h-[430px] rounded-full border border-blue-500/20 animate-spin-slow absolute" />

                {/* Glass Circle */}

                <div className="relative w-[400px] h-[400px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">

                    <img
                        src="/Image1.jpeg"
                        alt="Sowmiya"
                        className="w-full h-full object-cover"
                    />

                </div>

            </div>

        </motion.div>
    )
}

export default HeroImage