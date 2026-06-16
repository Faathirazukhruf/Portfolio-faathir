'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../dictionaries/en';
import { id } from '../dictionaries/id';

const dictionaries = { en, id };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('faathir-lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
      setLang(savedLang);
    }
    setMounted(true);
  }, []);

  const toggleLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('faathir-lang', newLang);
  };

  const t = dictionaries[lang];

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-background" />; 
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
