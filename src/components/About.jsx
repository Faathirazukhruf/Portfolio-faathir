import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    // Languages & Web3
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Solidity', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWDswUFU1HZv0r9jrvC3-mfrUqLp1P8cqZw&s' },

    // Frontend & Fullstack
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/white' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },

    // Backend & Frameworks
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Nest.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.simpleicons.org/express/white' },
    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },

    // AI & Automation
    { name: 'n8n', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/N8n-logo-new.svg' },
    { name: 'OpenClaw', logo: 'https://openclaw.ai/favicon.svg' },
    { name: 'LangChain', logo: 'https://assets.streamlinehq.com/image/private/w_34,h_34,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAg1fmZAA0' },
    { name: 'PyTorch', logo: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg' },

    // Database & Infrastructure
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
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
                            I am a passionate <span className="text-white font-semibold">Fullstack Developer</span> with strong expertise in <span className="text-primary font-semibold">JavaScript, Python, HTML, CSS</span>, and modern frameworks such as <span className="text-primary font-semibold">React.js, Next.js, Nest.js, and Express.js</span>. I have hands-on experience in building scalable applications, managing databases (<span className="text-primary font-semibold">PostgreSQL, MySQL</span>), and integrating backend systems, including <span className="text-white font-semibold">Web3</span> technologies (<span className="text-primary font-semibold">Solidity, Web3.js, Ethers.js</span>). Beyond coding, I focus on understanding problems at their core. I am used to analyzing user needs directly, designing system architectures from scratch, and building solutions that are not only functional but also efficient and impactful for businesses.
                        </p>
                        <p>
                            I have experience working on systems in industries such as <span className="text-white font-semibold">healthcare and manufacturing</span>, where reliability, efficiency, and scalability are critical. This experience shaped my mindset to always think in terms of end-to-end solutions, not just features. My current focus is on <span className="text-primary font-semibold">AI-driven systems and automation</span>, including building intelligent chatbots, AI-powered dashboards, and integrating LLMs into real-world applications. I am familiar with tools and concepts such as <span className="text-primary font-semibold">n8n, OpenClaw, AI token optimization, PyTorch, and Retrieval-Augmented Generation (RAG)</span>, enabling me to connect AI capabilities with business needs effectively.
                        </p>
                        <p>
                            I believe technology should solve real problems. That’s why I strive to build systems that improve workflows, increase efficiency, and create meaningful impact. <span className="font-medium text-white italic">Curious to know more about how I think and build things?</span> Feel free to check it out and have a quick chat by clicking <span className="text-primary font-semibold">Faathir AI</span> on the bottom right — it’s a custom AI I built to tell you more about me in a more interactive way.
                        </p>
                    </div>

                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-white mb-2">Technical Skill</h3>
                        <p className="text-gray-400">technologies I command</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: false, amount: 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                className="bg-surface border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all group w-[140px] h-[140px] sm:w-[160px] sm:h-[160px]"
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
