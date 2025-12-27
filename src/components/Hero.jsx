import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/ppfaathir (1).jpeg';
import pdfFile from '../assets/CVFaathirazukhruffsd.pdf';

import AuroraBackground from './AuroraBackground';

const Hero = () => {
    return (
        <AuroraBackground
            id="home"
            className="min-h-[100svh] md:min-h-screen pt-20 pb-24 md:pb-0 overflow-hidden relative"
        >
            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <div className="inline-block px-4 py-2 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="text-secondary font-mono text-sm">Fullstack Dev & AI Automation</span>
                    </div>

                    {/* Mobile Profile Picture (Visible only on mobile) */}
                    <div className="md:hidden flex justify-center my-6">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-48 h-48"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full animate-spin-slow opacity-70 blur-md" />
                            <div className="absolute inset-2 bg-background rounded-full z-10 overflow-hidden border-4 border-white/10">
                                <img
                                    src={profilePic}
                                    alt="Faathir Azukhruf"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Faathir Azukhruf</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                        Architecting intelligent digital solutions. I bridge the gap between robust fullstack engineering and cutting-edge AI automation to build the future of web.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <a
                            href={pdfFile}
                            download="Faathir_CV.pdf"
                            className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Desktop Profile Picture (Hidden on mobile) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 hidden md:flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full animate-spin-slow opacity-70 blur-md" />
                        <div className="absolute inset-2 bg-background rounded-full z-10 overflow-hidden border-4 border-white/10">
                            <img
                                src={profilePic}
                                alt="Faathir Azukhruf"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </AuroraBackground>
    );
};

export default Hero;
