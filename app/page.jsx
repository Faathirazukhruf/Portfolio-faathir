import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/Hero';
import AboutSection from '../components/sections/About';
import ExperienceSection from '../components/sections/Experience';
import ProjectsSection from '../components/sections/Projects';
import SkillsSection from '../components/sections/Skills';
import ContactSection from '../components/sections/Contact';
import Footer from '../components/Footer';
import FaathirAI from '../components/FaathirAI';
import { LanguageProvider } from '../components/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
        {/* Floating AI Chatbot */}
        <FaathirAI />
      </main>
    </LanguageProvider>
  );
}
