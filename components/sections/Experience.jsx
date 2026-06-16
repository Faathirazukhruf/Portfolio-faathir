'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useLanguage } from '../LanguageContext';

const JarvisCore = dynamic(() => import('../JarvisCore'), { ssr: false });

const experiences = [
  {
    role: 'IT Programmer',
    company: 'PT Dipa Pharmalab Intersains',
    period: 'Aug 2025 – Present',
    location: 'Majalengka, Indonesia',
    type: 'FULL_TIME',
    color: 'primary',
    description: 'Design and develop internal manufacturing systems used across operational departments. Build ERP modules, dashboards, reporting systems, and production management tools. Integrate AI-powered assistants and n8n automation workflows.',
    tags: ['Next.js', 'Laravel', 'MySQL', 'n8n', 'Gemini API'],
  },
  {
    role: 'Full Stack Developer & AI Automation Engineer',
    company: 'Criova',
    period: 'Jan 2026 – Present',
    location: 'Remote',
    type: 'FULL_TIME',
    color: 'cyber',
    description: 'Build AI-powered business systems, ERP workflows, and intelligent automation platforms. Develop conversational AI agents, automation pipelines with Hermes agent and n8n.',
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'n8n', 'Hermes agent'],
  },
  {
    role: 'Full Stack Web3 Developer',
    company: 'Tabriiz',
    period: 'May 2025 – Aug 2025',
    location: 'Remote',
    type: 'CONTRACT',
    color: 'purple-400',
    description: 'Contributed to a Web3 crowdfunding platform focused on tokenization of real-world Islamic projects. Developed smart contracts using Solidity and integrated blockchain-connected features.',
    tags: ['Solidity', 'Web3.js', 'Ethers.js', 'Wagmi', 'Next.js'],
  },
  {
    role: 'Full Stack Developer',
    company: 'CMLabs',
    period: 'Mar 2025 – May 2025',
    location: 'Remote',
    type: 'INTERN',
    color: 'orange-400',
    description: 'Developed internal SEO and analytics tools. Participated in the full software development lifecycle from planning to deployment.',
    tags: ['Laravel', 'React.js', 'PostgreSQL', 'MySQL'],
  },
  {
    role: 'Web Developer Intern',
    company: 'GAOTek Inc.',
    period: 'Feb 2025 – Apr 2025',
    location: 'Remote',
    type: 'INTERN',
    color: 'muted',
    description: 'Developed and maintained WordPress websites for international clients. Improved frontend user experience and website responsiveness.',
    tags: ['PHP', 'WordPress', 'HTML', 'CSS', 'JavaScript'],
  },
];

const colorMap = {
  primary: { border: 'border-primary/50', text: 'text-primary', dot: 'bg-primary', badge: 'bg-primary/10 text-primary border-primary/30' },
  cyber: { border: 'border-cyber/50', text: 'text-cyber', dot: 'bg-cyber', badge: 'bg-cyber/10 text-cyber border-cyber/30' },
  'purple-400': { border: 'border-purple-400/50', text: 'text-purple-400', dot: 'bg-purple-400', badge: 'bg-purple-400/10 text-purple-400 border-purple-400/30' },
  'orange-400': { border: 'border-orange-400/50', text: 'text-orange-400', dot: 'bg-orange-400', badge: 'bg-orange-400/10 text-orange-400 border-orange-400/30' },
  muted: { border: 'border-white/20', text: 'text-muted', dot: 'bg-muted', badge: 'bg-white/5 text-muted border-white/20' },
};

export default function ExperienceSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="font-mono text-[10px] tracking-[0.4em] text-primary uppercase mb-4">{t.experience.tag}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-black text-text leading-none">
            {t.experience.title1}<br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>{t.experience.title2}</span>
          </h2>
        </motion.div>

        {/* Desktop: Two-column sticky layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Sticky JARVIS core */}
          <div className="sticky top-32 flex flex-col items-center gap-6">
            <JarvisCore />
            <div className="glass-panel px-6 py-4 w-full max-w-xs">
              <p className="font-mono text-[9px] text-muted tracking-widest mb-1">ACTIVE_MODULE</p>
              <p className="font-mono text-sm text-cyber">CAREER.TRAJECTORY</p>
              <p className="font-mono text-[10px] text-muted mt-2">5 companies / 2025 – present</p>
            </div>
          </div>

          {/* Right: Scrolling experience cards */}
          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color];
              const tJob = t.experience.jobs[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`glass-panel p-6 border-l-2 ${c.border} hover:scale-[1.01] transition-transform duration-300`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                        <span className={`font-mono text-[9px] tracking-widest ${c.text}`}>{exp.type}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-text">{tJob.role}</h3>
                      <p className={`font-mono text-sm ${c.text} mt-0.5`}>{tJob.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[10px] text-muted">{tJob.date}</p>
                      <p className="font-mono text-[10px] text-muted mt-0.5">{exp.location}</p>
                    </div>
                  </div>
                  <p className="font-mono text-xs text-muted leading-relaxed mb-4">{tJob.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-0.5 border font-mono text-[9px] rounded-sm ${c.badge}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Single column */}
        <div className="lg:hidden space-y-6">
          {experiences.map((exp, i) => {
            const c = colorMap[exp.color];
            const tJob = t.experience.jobs[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className={`glass-panel p-5 border-l-2 ${c.border}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                  <span className={`font-mono text-[9px] tracking-widest ${c.text}`}>{exp.type}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-text">{tJob.role}</h3>
                <p className={`font-mono text-sm ${c.text}`}>{tJob.company}</p>
                <p className="font-mono text-[10px] text-muted mt-1">{tJob.date} · {exp.location}</p>
                <p className="font-mono text-xs text-muted leading-relaxed mt-3 mb-3">{tJob.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className={`px-2 py-0.5 border font-mono text-[9px] rounded-sm ${c.badge}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
