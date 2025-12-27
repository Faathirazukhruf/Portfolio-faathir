import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-surface relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-8 md:p-16 max-w-5xl mx-auto overflow-hidden relative"
                >
                    {/* Decorative Glow */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
                            <p className="text-gray-400 mb-8 max-w-sm">
                                Interested in Fullstack development, AI automation, or Web3 ? Feel free to reach out. I'm always open to discussing new projects and opportunities.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <span>muhammadfaathir004@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                                        <Phone size={20} />
                                    </div>
                                    <span>+62 83148486316</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent">
                                        <MapPin size={20} />
                                    </div>
                                    <span>Majalengka, Indonesia</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-white mb-6">Find me on</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="mailto:muhammadfaathir004@gmail.com"
                                    className="p-4 bg-background border border-white/5 hover:border-primary/50 rounded-xl flex items-center gap-3 text-gray-400 hover:text-white transition-all group"
                                >
                                    <Mail className="group-hover:text-red-500 transition-colors" />
                                    <span>Email</span>
                                </a>
                                <a
                                    href="https://wa.me/6283148486316"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-background border border-white/5 hover:border-primary/50 rounded-xl flex items-center gap-3 text-gray-400 hover:text-white transition-all group"
                                >
                                    <Phone className="group-hover:text-green-500 transition-colors" />
                                    <span>WhatsApp</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/faathir-azukhruf-61335b307"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-background border border-white/5 hover:border-primary/50 rounded-xl flex items-center gap-3 text-gray-400 hover:text-white transition-all group"
                                >
                                    <Linkedin className="group-hover:text-blue-500 transition-colors" />
                                    <span>LinkedIn</span>
                                </a>
                                <a
                                    href="https://github.com/Faathirazukhruf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-background border border-white/5 hover:border-primary/50 rounded-xl flex items-center gap-3 text-gray-400 hover:text-white transition-all group"
                                >
                                    <Github className="group-hover:text-white transition-colors" />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href="https://instagram.com/Faathirazukhruf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-background border border-white/5 hover:border-primary/50 rounded-xl flex items-center gap-3 text-gray-400 hover:text-white transition-all group"
                                >
                                    <Instagram className="group-hover:text-pink-500 transition-colors" />
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
