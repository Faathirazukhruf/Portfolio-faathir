'use client';

import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-start">
        <p className="font-mono text-[10px] text-muted/50">
          {t.footer.copyright.replace('{year}', currentYear)}
        </p>
      </div>
    </footer>
  );
}
