'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

// Mini terminal window widget
export function TerminalWidget({ className = '' }) {
  const lines = [
    { txt: '> initializing FAATHIR.SYS...', color: 'text-muted' },
    { txt: '> loading AI modules ✓', color: 'text-cyber' },
    { txt: '> connecting n8n workflows ✓', color: 'text-cyber' },
    { txt: '> JARVIS online.', color: 'text-primary' },
  ];
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= lines.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 900);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className={`glass-panel p-4 w-64 ${className}`}
    >
      {/* Terminal title bar */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-cyber/70" />
        <span className="font-mono text-[9px] text-muted ml-2 tracking-wider">TERMINAL — bash</span>
      </div>
      <div className="space-y-1.5">
        {lines.slice(0, visible).map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className={`font-mono text-[10px] ${line.color}`}
          >
            {line.txt}
          </motion.p>
        ))}
        {visible < lines.length && (
          <span className="inline-block w-1.5 h-3 bg-cyber animate-pulse" />
        )}
      </div>
    </motion.div>
  );
}

// System metrics widget
export function MetricsWidget({ className = '' }) {
  const metrics = [
    { label: 'UPTIME', value: '2y 4m', color: 'bg-cyber' },
    { label: 'PROJECTS', value: '12+', color: 'bg-primary' },
    { label: 'AI OPS', value: '99%', color: 'bg-purple-500' },
    { label: 'COMMITS', value: '1.2K+', color: 'bg-orange-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className={`glass-panel p-4 w-52 ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-cyber animate-pulse" />
        <span className="font-mono text-[9px] text-muted tracking-widest">SYS.METRICS</span>
      </div>
      <div className="space-y-2">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between">
            <span className="font-mono text-[9px] text-muted">{m.label}</span>
            <div className="flex items-center gap-2">
              <div className={`w-12 h-0.5 ${m.color} rounded-full opacity-40`} />
              <span className={`font-mono text-[10px] font-bold text-text`}>{m.value}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// File path / breadcrumb widget
export function FilePathWidget({ className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.3, duration: 0.5 }}
      className={`glass-panel px-3 py-2 flex items-center gap-1.5 ${className}`}
    >
      <span className="font-mono text-[9px] text-muted">~/</span>
      <span className="font-mono text-[9px] text-primary">faathir</span>
      <span className="font-mono text-[9px] text-muted">/</span>
      <span className="font-mono text-[9px] text-cyber">portfolio</span>
      <span className="font-mono text-[9px] text-muted">/</span>
      <span className="font-mono text-[9px] text-text">index.jsx</span>
      <div className="w-1 h-3 bg-text/50 animate-pulse ml-1" />
    </motion.div>
  );
}

// AirDrop-style contact popup
export function AirdropWidget({ className = '' }) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-panel p-4 w-56 text-center ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 mx-auto mb-2 flex items-center justify-center">
        <span className="text-lg">🛜</span>
      </div>
      <p className="font-mono text-[9px] text-muted tracking-widest mb-0.5">{t.contact.airdrop.title}</p>
      <p className="font-mono text-[11px] text-text font-bold">{t.contact.airdrop.subtitle}</p>
      <p className="font-mono text-[9px] text-muted mt-1">muhammadfaathir004@gmail.com</p>
      <div className="mt-3 flex gap-2">
        <button className="flex-1 py-1.5 rounded-lg bg-white/5 font-mono text-[9px] text-muted hover:bg-white/10 transition-colors">
          {t.contact.airdrop.decline}
        </button>
        <a
          href="https://wa.me/6283148486316"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-1.5 rounded-lg bg-primary font-mono text-[9px] text-white hover:bg-primary/80 transition-colors flex items-center justify-center"
        >
          {t.contact.airdrop.accept}
        </a>
      </div>
    </motion.div>
  );
}
