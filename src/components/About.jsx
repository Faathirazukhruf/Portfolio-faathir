import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'n8n', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/N8n-logo-new.svg' },

    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Solidity', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWDswUFU1HZv0r9jrvC3-mfrUqLp1P8cqZw&s' },

    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },

    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },

    { name: 'LangChain', logo: 'https://assets.streamlinehq.com/image/private/w_34,h_34,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAg1fmZAA0' },
    { name: 'PyTorch', logo: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg' },

    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' }
];

import AuroraBackground from './AuroraBackground';

const About = () => {
    return (
        <AuroraBackground id="about" className="py-20 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="glass rounded-3xl p-8 md:p-12 mb-16 text-gray-300 leading-relaxed space-y-6">
                        <p>
                            I am a passionate <span className="text-white font-semibold">Fullstack Developer</span> with expertise in JavaScript, Python, HTML, CSS, and a variety of programming frameworks such as React.js, Next.js, and Express.js. My technical toolkit extends to database management with PostgreSQL and MySQL, backend integration, and the emerging world of <span className="text-white font-semibold">Web3</span> (Solidity, Web3.js, Ether.js).
                        </p>
                        <p>
                            My enthusiasm for technology drives me to explore <span className="text-secondary font-semibold">AI Automation</span> and machine learning. I believe the future is shaped by intelligent innovation, and I strive to build systems that are not just functional, but smart and efficient. With a background from Harisenin.com bootcamp and numerous hands-on projects, I am ready to deliver high-quality digital solutions.
                        </p>
                    </div>

                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-white mb-2">Technical Skill</h3>
                        <p className="text-gray-400">technologies I command</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: false, amount: 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                className="bg-surface border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all group"
                            >
                                <div className="w-12 h-12 relative grayscale group-hover:grayscale-0 transition-all duration-300">
                                    <img
                                        src={skill.logo}
                                        alt={`${skill.name} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </AuroraBackground>
    );
};

export default About;
