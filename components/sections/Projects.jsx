'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import Image from 'next/image';

const projects = [
  {
    id: 'dipa-core',
    title: 'Dipa Core',
    subtitle: 'Manufacturing ERP System',
    description: 'Internal manufacturing management platform for PT Dipa Pharmalab Intersains. Full-scale ERP system covering production, inventory, reporting, and department management.',
    status: 'PRODUCTION',
    statusColor: 'cyber',
    features: ['Production management', 'Operational dashboards', 'Reporting system', 'Inventory workflows', 'Department management'],
    stack: ['Next.js', 'TypeScript', 'Laravel', 'Redis', 'REST API', 'MySQL'],
    type: 'ERP_SYSTEM',
    accentColor: '#001EFF',
    internal: true,
    image: '/neo_brutal_dipa_core.png',
  },
  {
    id: 'dipa-ai',
    title: 'Dipa AI',
    subtitle: 'Manufacturing AI Assistant',
    description: 'AI-powered assistant designed to help manufacturing operations by utilizing company operational data. Features WhatsApp integration via Fonnte for automated notifications.',
    status: 'PRODUCTION',
    statusColor: 'cyber',
    features: ['Internal knowledge assistant', 'AI-assisted reporting', 'Automated notifications', 'Workflow automation', 'WhatsApp integration'],
    stack: ['Gemini API', 'n8n', 'Next.js', 'MySQL', 'Laravel', 'Webhook'],
    type: 'AI_ASSISTANT',
    accentColor: '#00FF41',
    internal: true,
    image: '/neo_brutal_dipa_ai.png',
  },
  {
    id: 'criova-erp',
    title: 'Criova ERP',
    subtitle: 'AI-Powered Business Platform',
    description: 'AI-powered ERP business platform focused on automation, operational efficiency, and intelligent workflow systems. Built for Criova with modern AI integration.',
    status: 'LIVE',
    statusColor: 'primary',
    features: ['Full-stack ERP', 'AI integration', 'Workflow automation', 'Business process optimization', 'System architecture'],
    stack: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'n8n', 'Hermes agent'],
    type: 'ERP_SYSTEM',
    accentColor: '#001EFF',
    link: 'https://criova.id',
    internal: false,
    image: 'https://image.thum.io/get/width/600/crop/800/https://criova.id',
  },
  {
    id: 'criova-krayo',
    title: 'Criova Krayo AI',
    subtitle: 'Customer Service Automation',
    description: 'AI-powered customer service and booking automation platform for service businesses. WhatsApp-based interaction flow with automated follow-up systems.',
    status: 'LIVE',
    statusColor: 'primary',
    features: ['Customer onboarding', 'Booking workflows', 'WhatsApp interaction', 'AI-assisted support', 'Automated follow-ups'],
    stack: ['NestJS', 'n8n', 'AI APIs', 'PostgreSQL', 'Next.js'],
    type: 'AI_CHATBOT',
    accentColor: '#7C3AED',
    link: 'https://criova.id/cuci-ac',
    internal: false,
    image: 'https://image.thum.io/get/width/600/crop/800/https://criova.id/cuci-ac',
  },
  {
    id: 'kiro',
    title: 'KIRO',
    subtitle: 'Personal AI Operating System',
    description: 'AI-powered life operating system designed to help users understand, optimize, and improve their lives through intelligent analysis and behavioral tracking.',
    status: 'BETA',
    statusColor: 'purple-400',
    features: ['Daily journaling & reflection', 'Habit tracking', 'Productivity analytics', 'Financial tracking', 'Burnout detection', 'Goal management'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Gemini API', 'TailwindCSS'],
    type: 'LIFE_OS',
    accentColor: '#7C3AED',
    internal: false,
    image: '/neo_brutal_kiro.png',
  },
  {
    id: 'web3-dashboard',
    title: 'Web3 Analysis Dashboard',
    subtitle: 'AI-Powered Blockchain Analytics',
    description: 'AI-powered Web3 analytics dashboard with blockchain integrations. Features MetaMask authentication, crypto tracking, and AI-generated market insights.',
    status: 'LIVE',
    statusColor: 'orange-400',
    features: ['MetaMask authentication', 'Crypto tracking', 'AI market insights', 'Portfolio monitoring'],
    stack: ['Next.js', 'Solidity', 'Web3.js', 'Ethers.js'],
    type: 'WEB3',
    accentColor: '#F97316',
    link: 'https://web3-analysis-dashboard.vercel.app/',
    internal: false,
    image: 'https://image.thum.io/get/width/600/crop/800/https://web3-analysis-dashboard.vercel.app/',
  },
];

const statusConfig = {
  cyber: 'bg-cyber/10 text-cyber border-cyber/30',
  primary: 'bg-primary/10 text-primary border-primary/30',
  'purple-400': 'bg-purple-400/10 text-purple-400 border-purple-400/30',
  'orange-400': 'bg-orange-400/10 text-orange-400 border-orange-400/30',
};

function ProjectCard({ project, index, tProject }) {
  const isLarge = index === 0 || index === 1;
  const sc = statusConfig[project.statusColor] || statusConfig.primary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1 }}
      className={`group relative glass-panel p-6 md:p-8 flex flex-col overflow-hidden
        hover:scale-[1.01] hover:shadow-2xl transition-all duration-300
        ${isLarge ? 'md:col-span-1' : ''}
      `}
    >
      {/* Colored top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
      />

      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 30%, ${project.accentColor}, transparent 70%)` }}
      />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-0.5 border font-mono text-[9px] rounded-sm ${sc}`}>
                {project.status}
              </span>
              <span className="font-mono text-[9px] text-muted border border-white/10 px-2 py-0.5 rounded-sm">
                {project.type}
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-black text-text group-hover:text-white transition-colors">
              {tProject.title}
            </h3>
            <p className="font-mono text-xs mt-1" style={{ color: project.accentColor }}>
              {tProject.type}
            </p>
          </div>
          {project.internal && (
            <span className="font-mono text-[9px] text-muted/60 border border-white/5 px-2 py-0.5 rounded-sm shrink-0">
              INTERNAL
            </span>
          )}
        </div>

        {/* Project Image Placeholder */}
        {project.image && (
          <div 
            className="w-full h-40 sm:h-48 relative mb-6 rounded-sm overflow-hidden border border-white/20 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1"
            style={{ 
              boxShadow: `4px 4px 0px 0px ${project.accentColor}90` 
            }}
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index <= 1}
            />
          </div>
        )}

        <p className="font-mono text-xs text-muted leading-relaxed mb-5">{tProject.description}</p>

        {/* Features */}
        <div className="mb-5 space-y-1.5">
          {project.features.slice(0, 4).map((f) => (
            <div key={f} className="flex items-center gap-2">
              <span className="font-mono text-[9px]" style={{ color: project.accentColor }}>▸</span>
              <span className="font-mono text-[10px] text-muted/80">{f}</span>
            </div>
          ))}
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-muted rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer action */}
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-[10px] tracking-wider hover:opacity-70 transition-opacity group/link mt-2"
            style={{ color: project.accentColor }}
          >
            <span className="w-4 h-[1px] group-hover/link:w-8 transition-all" style={{ background: project.accentColor }} />
            LAUNCH_PROJECT
          </a>
        ) : (
          <div className="flex items-center gap-2 font-mono text-[10px] text-muted/40 mt-2">
            <span className="w-4 h-[1px] bg-muted/30" />
            INTERNAL_DEPLOYMENT
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="font-mono text-[10px] tracking-[0.4em] text-primary uppercase mb-4">{t.projects.tag}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-black text-text leading-none">
            {t.projects.title1}<br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>{t.projects.title2}</span>
          </h2>
          <p className="font-mono text-sm text-muted mt-4 max-w-lg">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} tProject={t.projects.list[index]} />
          ))}
        </div>
      </div>
    </section>
  );
}
