'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const navKeys = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
  }, []);

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 60));
    return () => unsub();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyber animate-pulse" />
          <span className="font-mono text-xs tracking-[0.3em] text-muted uppercase">
            FAATHIR.Azukhruf
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navKeys.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="font-mono text-[10px] tracking-[0.25em] text-muted hover:text-primary transition-colors duration-300 group relative"
            >
              {t.nav[link.key]}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right side: language toggle widget */}
        <div className="hidden md:flex items-center glass-panel p-1 rounded-md">
          <button
            onClick={() => setLang('id')}
            className={`px-3 py-1 font-mono text-[10px] tracking-widest rounded transition-colors duration-300 ${lang === 'id' ? 'bg-primary text-white' : 'text-muted hover:text-white'}`}
          >
            ID
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 font-mono text-[10px] tracking-widest rounded transition-colors duration-300 ${lang === 'en' ? 'bg-primary text-white' : 'text-muted hover:text-white'}`}
          >
            EN
          </button>
        </div>

        {/* Mobile menu indicator */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`h-[1px] transition-all duration-300 ${isOpen ? 'w-5 rotate-45 translate-y-[3.5px] bg-primary' : 'w-5 bg-text'}`} />
          <div className={`h-[1px] transition-all duration-300 ${isOpen ? 'w-5 -rotate-45 -translate-y-[3.5px] bg-primary' : 'w-3 bg-primary'}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-6">
              {navKeys.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-xs tracking-[0.25em] text-muted hover:text-primary transition-colors duration-300"
                >
                  {t.nav[link.key]}
                </a>
              ))}
              
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
                <span className="font-mono text-[10px] tracking-widest text-muted uppercase">Lang:</span>
                <button
                  onClick={() => { setLang('id'); setIsOpen(false); }}
                  className={`px-3 py-1.5 font-mono text-[10px] tracking-widest rounded transition-colors duration-300 ${lang === 'id' ? 'bg-primary text-white' : 'text-muted hover:text-white border border-white/10'}`}
                >
                  ID
                </button>
                <button
                  onClick={() => { setLang('en'); setIsOpen(false); }}
                  className={`px-3 py-1.5 font-mono text-[10px] tracking-widest rounded transition-colors duration-300 ${lang === 'en' ? 'bg-primary text-white' : 'text-muted hover:text-white border border-white/10'}`}
                >
                  EN
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
