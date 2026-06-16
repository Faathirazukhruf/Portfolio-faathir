'use client';
import { motion } from 'framer-motion';
import { AirdropWidget } from '../FloatingWidgets';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// WhatsApp SVG icon (lucide doesn't have it)
function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function ContactSection() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      label: t.contact.email,
      value: 'muhammadfaathir004@gmail.com',
      href: 'mailto:muhammadfaathir004@gmail.com',
      icon: <Mail size={18} />,
      color: '#001EFF',
    },
    {
      label: t.contact.linkedin,
      value: 'linkedin.com/in/faathirazukhruf',
      href: 'https://linkedin.com/in/faathirazukhruf',
      icon: <Linkedin size={18} />,
      color: '#00FF41',
    },
    {
      label: t.contact.github,
      value: 'github.com/Faathirazukhruf',
      href: 'https://github.com/Faathirazukhruf',
      icon: <Github size={18} />,
      color: '#7C3AED',
    },
    {
      label: t.contact.phone,
      value: '+62 831 4848 6316',
      href: 'https://wa.me/6283148486316',
      icon: <WhatsAppIcon size={18} />,
      color: '#25D366',
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <p
          className="font-serif font-black text-[20vw] leading-none select-none opacity-[0.02]"
          aria-hidden="true"
        >
          CONTACT
        </p>
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
          <p className="font-mono text-[10px] tracking-[0.4em] text-primary uppercase mb-4">{t.contact.tag}</p>
          <h2 className="font-serif text-5xl md:text-7xl font-black text-text leading-none">
            {t.contact.title1}<br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>
              {t.contact.title2}
            </span>
          </h2>
          <p className="font-mono text-sm text-muted mt-6 max-w-lg">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact links with icons */}
          <div className="space-y-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') || link.href.startsWith('https') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center justify-between glass-panel px-6 py-5 group hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={{
                      background: `${link.color}15`,
                      border: `1px solid ${link.color}30`,
                      color: link.color,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-widest mb-0.5" style={{ color: link.color }}>
                      {link.label}
                    </p>
                    <p className="font-mono text-sm text-text group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                </div>
                {/* Arrow */}
                <span
                  className="font-mono text-xl group-hover:translate-x-1.5 transition-transform duration-300"
                  style={{ color: link.color }}
                >
                  →
                </span>
              </motion.a>
            ))}
          </div>

          {/* Right: AirDrop widget + status */}
          <div className="flex flex-col gap-6">
            <AirdropWidget />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass-panel p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyber animate-pulse" />
                <span className="font-mono text-[9px] text-muted tracking-widest">{t.contact.currentStatus}</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-muted">{t.contact.position}</span>
                  <span className="font-mono text-xs text-cyber">{t.contact.positionValue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-muted">{t.contact.location}</span>
                  <span className="font-mono text-xs text-text">{t.contact.locationValue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-muted">{t.contact.workType}</span>
                  <span className="font-mono text-xs text-text">{t.contact.workTypeValue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-muted">{t.contact.expertise}</span>
                  <span className="font-mono text-xs text-primary">{t.contact.expertiseValue}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
