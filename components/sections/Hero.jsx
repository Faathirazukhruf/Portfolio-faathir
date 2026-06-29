'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { TerminalWidget, MetricsWidget, FilePathWidget } from '../FloatingWidgets';
import { useLanguage } from '../LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber/5 rounded-full blur-[80px]" />
      </div>

      {/* Dashed grid lines */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Typography ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <FilePathWidget />
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tighter text-text"
              >
                {t.hero.name1}
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tighter"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}
              >
                {t.hero.name2}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-2 mt-6 mb-8"
            >
              {t.hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-primary/40 font-mono text-[10px] tracking-widest text-primary uppercase rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="font-mono text-sm text-muted leading-relaxed max-w-md mb-10"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group relative px-8 py-3 bg-primary text-white font-mono text-xs tracking-widest uppercase overflow-hidden hover:scale-[1.02] transition-transform duration-200"
              >
                <span className="relative z-10">{t.hero.viewProjects}</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-white/20 text-text font-mono text-xs tracking-widest uppercase hover:border-primary/60 hover:text-primary transition-all duration-300"
              >
                {t.hero.contactMe}
              </a>
              {/* Download CV */}
              <a
                href="/CV_FAATHIRAZUKHRUF_FULLSTACKAIENGINEER.pdf"
                download
                className="group flex items-center gap-2 px-6 py-3 border border-cyber/50 text-cyber font-mono text-xs tracking-widest uppercase hover:bg-cyber/10 transition-all duration-300"
              >
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  className="group-hover:translate-y-0.5 transition-transform duration-200"
                >
                  <path d="M6 1v7M3 6l3 3 3-3M2 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t.hero.downloadCv}
              </a>
            </motion.div>

            {/* Social Links */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex gap-6 mt-10"
            >
              {[
                { label: 'GITHUB', href: 'https://github.com/Faathirazukhruf' },
                { label: 'LINKEDIN', href: 'https://linkedin.com/in/faathirazukhruf' },
                { label: 'EMAIL', href: 'mailto:muhammadfaathir004@gmail.com' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-[0.2em] text-muted hover:text-cyber transition-colors group flex items-center gap-1.5"
                >
                  <span className="w-3 h-[1px] bg-muted group-hover:bg-cyber group-hover:w-5 transition-all" />
                  {link.label}
                </a>
              ))}
            </motion.div> */}
          </div>

          {/* ── Right: Profile Photo + Widgets ── */}
          <div className="relative flex items-center justify-center h-[520px] mt-12 lg:mt-0">
            {/* Floating widgets */}
            <TerminalWidget className="absolute -top-16 left-0 md:top-0 md:left-0 rotate-[-2deg] z-10 scale-75 md:scale-100 origin-top-left" />
            <MetricsWidget className="hidden md:block absolute bottom-4 right-0 rotate-[2deg] z-10" />

            {/* Dashed connection lines SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              viewBox="0 0 500 500"
            >
              <line x1="100" y1="100" x2="250" y2="260" stroke="#001EFF" strokeWidth="1" strokeDasharray="6 6" />
              <line x1="380" y1="380" x2="250" y2="260" stroke="#00FF41" strokeWidth="0.8" strokeDasharray="4 8" />
              <circle cx="100" cy="100" r="3" fill="#001EFF" opacity="0.6" />
              <circle cx="380" cy="380" r="3" fill="#00FF41" opacity="0.4" />
            </svg>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20"
            >
              {/* Rotating dashed ring */}
              <div
                className="absolute inset-0 -m-5 rounded-full border border-dashed border-primary/25 animate-spin"
                style={{ animationDuration: '22s' }}
              />
              {/* Static outer ring */}
              <div className="absolute inset-0 -m-10 rounded-full border border-cyber/10" />

              {/* Photo */}
              <div
                className="relative w-56 h-56 rounded-full overflow-hidden"
                style={{
                  border: '2px solid rgba(0,30,255,0.45)',
                  boxShadow: '0 0 60px rgba(0,30,255,0.25), 0 0 120px rgba(0,30,255,0.1)',
                }}
              >
                <Image
                  src="/ppfaathir.jpeg"
                  alt="Mochamad Faathir Azukhruf Siswandi"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 256px"
                />
                {/* Subtle cyber gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Pill label under photo */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap glass-panel px-4 py-1.5">
                <p className="font-mono text-[9px] tracking-[0.25em] text-cyber">{t.hero.online}</p>
              </div>
            </motion.div>

            {/* Status card — right side */}
            <div className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 glass-panel px-4 py-3 rotate-[1.5deg] z-10">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-cyber animate-pulse" />
                <span className="font-mono text-[9px] text-muted tracking-widest">{t.hero.statusFeed}</span>
              </div>
              <p className="font-mono text-[10px] text-cyber">{t.hero.status1}</p>
              <p className="font-mono text-[10px] text-primary mt-1">{t.hero.status2}</p>
              <p className="font-mono text-[10px] text-muted mt-1">{t.hero.status3}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-muted">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted to-transparent" />
      </motion.div> */}
    </section>
  );
}
