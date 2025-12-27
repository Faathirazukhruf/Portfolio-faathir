import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

// Images
import img1 from "../assets/v17-m1.png";
import img2 from "../assets/web3 (1).png";
import img3 from "../assets/cryptotracker.png";
import img4 from "../assets/ylc.png";
import img5 from "../assets/todolistfaathir.png";
import img6 from "../assets/Cover Majalengkaweb.png";
import img7 from "../assets/covergameberangberang.png";

const projectsData = [
    {
        id: 1,
        title: "Chill Movie",
        description: "A web application for browsing movies.",
        images: [img1],
        demoLink: "https://missionharisenin-chillmovie.vercel.app/",
        githubLink: "https://github.com/Faathirazukhruf/mission-harisenin-chillmovie"
    },
    {
        id: 2,
        title: "Web3 Dashboard Analysis",
        description: "Web3 (DApps) application dashboard with AI analysis for crypto price, connect wallet integration and information for new crypto project Airdrop.",
        images: [img2],
        demoLink: "https://web3-analysis-dashboard.vercel.app/",
        githubLink: "https://github.com/Faathirazukhruf/Web3-Analysis-Dashboard"
    },
    {
        id: 3,
        title: "Crypto Price Tracker",
        description: "A simple web for tracking crypto price.",
        images: [img3],
        demoLink: "https://cryptotracker-sage.vercel.app/",
        githubLink: "https://github.com/Faathirazukhruf/crypto-tracker-frontend"
    },
    // {
    //     id: 4,
    //     title: "Yourlifechoices Landing Page",
    //     description: "A Landing page for Yourlifechoices company based in Australia.",
    //     images: [img4],
    //     demoLink: "https://yourlifechoices-project.vercel.app/",
    //     githubLink: "https://github.com/Faathirazukhruf/yourlifechoices-project"
    // },
    // {
    //     id: 5,
    //     title: "To-Do List App",
    //     description: "A simple and functional to-do list application.",
    //     images: [img5],
    //     demoLink: "https://faathirazukhruf.github.io/Aplikasi-todolist-faathircompany/to%20do%20list/",
    //     githubLink: "https://github.com/Faathirazukhruf/Aplikasi-todolist-faathircompany"
    // },
    // {
    //     id: 6,
    //     title: "Majalengka Profile",
    //     description: "A profile website for Majalengka city.",
    //     images: [img6],
    //     demoLink: "https://faathirazukhruf.github.io/majalengka-web/Majalengka%20profil%20buatan%20Faathir/",
    //     githubLink: "https://github.com/Faathirazukhruf/majalengka-web"
    // },
    // {
    //     id: 7,
    //     title: "Berang-Berang Game",
    //     description: "A fun and interactive game about Berang-Berang.",
    //     images: [img7],
    //     demoLink: "https://faathirazukhruf.github.io/Gameberangberang/berangberang/",
    //     githubLink: "https://github.com/Faathirazukhruf/Gameberangberang"
    // }
];

import AuroraBackground from './AuroraBackground';

const Projects = () => {
    return (
        <AuroraBackground id="projects" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
                        >
                            <div className="relative h-48 overflow-hidden bg-gray-800">
                                <Carousel
                                    showArrows={true}
                                    showThumbs={false}
                                    infiniteLoop={true}
                                    showStatus={false}
                                    showIndicators={false}
                                    className="h-full"
                                >
                                    {project.images.map((image, idx) => (
                                        <div key={idx} className="h-48 flex items-center justify-center">
                                            <img src={image} alt={project.title} className="object-cover h-full w-full" />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">{project.description}</p>

                                <div className="flex gap-4">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2 text-center text-sm font-medium bg-primary hover:bg-blue-600 text-white rounded-lg transition-colors"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2 text-center text-sm font-medium bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-lg transition-colors"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AuroraBackground>
    );
};

export default Projects;
