import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection }) => {
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const links = useMemo(
        () => [
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' },
        ],
        []
    );

    // track scroll for navbar style
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // lock body scroll when mobile menu open
    useEffect(() => {
        if (!isOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, [isOpen]);

    // close mobile menu when switching to desktop
    useEffect(() => {
        const onResize = () => {
            if (window.matchMedia('(min-width: 768px)').matches) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', onResize, { passive: true });
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const scrollToSection = useCallback((href) => {
        const id = href.replace('#', '');
        if (!id) return;

        const el = document.getElementById(id);
        if (!el) return;

        const navHeight = navRef.current?.offsetHeight ?? 0;
        const extraGap = 12; // sedikit jarak biar enak
        const top =
            el.getBoundingClientRect().top + window.pageYOffset - navHeight - extraGap;

        // update URL hash without jump
        window.history.replaceState(null, '', href);

        window.scrollTo({
            top,
            behavior: 'smooth',
        });
    }, []);

    const handleNavClick = useCallback(
        (e, href) => {
            e.preventDefault();

            // tutup menu dulu (kalau mobile)
            setIsOpen(false);

            // tunggu 1 frame biar layout settle, baru scroll (lebih stabil di mobile)
            requestAnimationFrame(() => {
                setTimeout(() => scrollToSection(href), 10);
            });
        },
        [scrollToSection]
    );

    return (
        <nav
            ref={navRef}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-background/80 backdrop-blur-md py-4 shadow-lg'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="text-2xl font-bold font-mono tracking-tighter text-white"
                >
                    Faathir<span className="text-primary">.azukhruf</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === link.href.substring(1)
                                    ? 'text-primary'
                                    : 'text-gray-300'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen((v) => !v)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <div className="relative w-6 h-5">
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                            className="absolute top-0 left-0 w-full h-0.5 bg-current transform origin-center transition-all duration-300"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                            className="absolute top-[9px] left-0 w-full h-0.5 bg-current transition-all duration-300"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-center transition-all duration-300"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-white/10 overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`block text-xl font-medium tracking-wide transition-colors ${activeSection === link.href.substring(1)
                                            ? 'text-primary'
                                            : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
