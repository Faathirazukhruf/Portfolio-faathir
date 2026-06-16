'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const skillGroups = [
  {
    category: 'AI & AUTOMATION',
    icon: '🤖',
    color: '#00FF41',
    skills: ['OpenAI API', 'Gemini API', 'Claude', 'Prompt Engineering', 'n8n', 'Hermes agent', 'Conversational AI', 'Workflow Automation', 'Business Process Automation'],
  },
  {
    category: 'BACKEND',
    icon: '⚙️',
    color: '#001EFF',
    skills: ['Node.js', 'Express.js', 'NestJS', 'Laravel', 'REST API', 'PostgreSQL', 'MySQL', 'Prisma', 'Redis'],
  },
  {
    category: 'FRONTEND',
    icon: '🖥️',
    color: '#7C3AED',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Framer Motion', 'Shadcn UI', 'HTML', 'CSS'],
  },
  {
    category: 'DEVOPS & INFRA',
    icon: '🛠️',
    color: '#F97316',
    skills: ['Docker', 'Linux', 'VPS Deployment', 'Git', 'GitHub', 'Postman', 'Vercel'],
  },
  {
    category: 'BLOCKCHAIN & WEB3',
    icon: '⛓️',
    color: '#8B5CF6',
    skills: ['Solidity', 'Web3.js', 'Ethers.js', 'Wagmi', 'RainbowKit', 'MetaMask Integration'],
  },
  {
    category: 'OTHER',
    icon: '🧠',
    color: '#9CA3AF',
    skills: ['System Design', 'ERP Development', 'Business Analysis', 'Technical Documentation', 'Bahasa Indonesia', 'English (Professional)'],
  },
];

export default function SkillsSection() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="relative py-24">
      {/* Background dashed decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none opacity-[0.04]">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.5" strokeDasharray="3 9" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="font-mono text-[10px] tracking-[0.4em] text-primary uppercase mb-4">{t.skills.tag}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-black text-text leading-none">
            {t.skills.title1}<br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>{t.skills.title2}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => {
            const tGroup = t.skills.categories[gi];
            return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: gi * 0.07 }}
              className="glass-panel p-6 group hover:scale-[1.01] transition-transform duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{group.icon}</span>
                <span className="font-mono text-[10px] tracking-[0.25em]" style={{ color: group.color }}>
                  {tGroup.title.toUpperCase()}
                </span>
              </div>
              <div
                className="w-12 h-[1px] mb-5 opacity-50"
                style={{ background: group.color }}
              />
              <div className="flex flex-wrap gap-2">
                {tGroup.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.07 + si * 0.03 }}
                    className="font-mono text-[10px] px-2.5 py-1 bg-white/5 border border-white/8 text-muted rounded-sm hover:text-text hover:border-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
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
