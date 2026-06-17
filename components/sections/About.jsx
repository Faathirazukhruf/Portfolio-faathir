'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import Image from 'next/image';

const certifications = [
  {
    title: 'Full Stack Web Developer Bootcamp',
    issuer: 'Harisenin.com',
    period: 'Aug – Dec 2024',
    credential: 'bit.ly/FaathirFSDBATCH13HARISENINCERTIFICATE',
    stack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'Next.js'],
    color: '#001EFF',
  },
  {
    title: 'Fundamental Cyber Security',
    issuer: 'Coding Studio',
    period: 'Jun 2024',
    credential: 'member.codingstudio.id/certificate/77F14E6635-77F13ED4A6-77E570D3D8',
    stack: ['Cyber Security', 'Network Security'],
    color: '#00FF41',
  },
];

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header & Summary */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-12 lg:mb-16"
            >
              <p className="font-mono text-[10px] tracking-[0.4em] text-primary uppercase mb-4">{t.about.tag}</p>
              <h2 className="font-serif text-5xl md:text-6xl font-black text-text leading-none">
                {t.about.title1}<br />
                <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>
                  {t.about.title2}
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="font-mono text-sm text-muted leading-relaxed">
                {t.about.p1}
              </p>
              <p className="font-mono text-sm text-muted leading-relaxed">
                {t.about.p2}
              </p>
              <p className="font-mono text-sm text-muted leading-relaxed">
                {t.about.p3}
              </p>
              <p className="font-mono text-sm text-muted leading-relaxed">
                {t.about.p4}
              </p>
              <p className="font-mono text-sm text-muted leading-relaxed">
                {t.about.p5}
              </p>
              <p className="font-mono text-sm text-muted leading-relaxed">
                {t.about.p6}
              </p>
            </motion.div>

            {/* Education section temporarily hidden as requested
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 glass-panel p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-mono text-[9px] text-muted tracking-widest">{t.about.education.tag}</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-text">{t.about.education.school}</h4>
              <p className="font-mono text-xs text-primary mt-1">{t.about.education.degree}</p>
              <p className="font-mono text-xs text-muted mt-0.5">{t.about.education.location}</p>
            </motion.div>
            */}
          </div>

          {/* Right: Photo & Certifications */}
          <div>
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 relative w-full aspect-video md:aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden glass-panel flex items-center justify-center p-4"
            >
              <div className="relative w-full h-full">
                <Image 
                  src="/Faathiranime.png" 
                  alt="Faathir Animation" 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-[9px] tracking-widest text-muted uppercase mb-5">{t.about.certifications.tag}</p>
              <div className="space-y-5">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="glass-panel p-6 border-l-2 hover:scale-[1.01] transition-transform duration-300"
                    style={{ borderColor: cert.color + '60' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: cert.color }} />
                      <span className="font-mono text-[9px]" style={{ color: cert.color }}>{cert.period}</span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-text">{cert.title}</h4>
                    <p className="font-mono text-xs mt-1" style={{ color: cert.color }}>{cert.issuer}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {cert.stack.map((s) => (
                        <span key={s} className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-muted rounded-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`https://${cert.credential}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[9px] mt-3 block hover:opacity-70 transition-opacity"
                      style={{ color: cert.color }}
                    >
                      → {t.about.certifications.viewCertificate || 'VIEW_CERTIFICATE'}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
