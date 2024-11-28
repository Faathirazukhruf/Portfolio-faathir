import React, { useState, useRef, useEffect } from 'react';
import './Portofolio.css';
import profilePic from '../assets/ppfaathir (1).jpeg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS carousel
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdfFile from '../assets/Curriculum Vitae Faathirazukhruf.pdf';
import img1 from "../assets/v17-m1.png";
import img2 from "../assets/todolistfaathir.png"; 
import img3 from "../assets/Cover Majalengkaweb.png"; 
import img4 from "../assets/covergameberangberang.png";

const Portofolio = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleEmailClick = () => {
    window.location.href = 'mailto:muhammadfaathir004@gmail.com';
  };

  const handleMouseEnter = () => {
    setIsAnimating(true);
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
  };

  const skills = [
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'HTML5',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS3',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Express.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'Bootstrap',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    }
  ];

  const sections = [
  {
    id: 'home',
    backgroundColor: 'bg-blue',
    content: (
      <div className="content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1 className="section-title">Faathir azukhruf</h1>
        <p className="section-description">Fullstack Developer</p>
        <a href={pdfFile} download="Faathir_CV.pdf" className="download-button">
          Download CV
        </a>
      </div>
    ),
  },
    {
      id: 'about',
      backgroundColor: 'bg-purple',
      content: (
        <div className="content-about">
          <h1 className="section-about">About Me</h1>
          <div className="columns"> 
            <div className="column left-column">
              <p>I am a passionate Fullstack Developer with expertise in JavaScript, Python, HTML, CSS, and a variety of programming frameworks such as React.js, Node.js, Bootstrap, Tailwind, MySQL, and Next.js. Additionally, I am proficient in operating Linux. My enthusiasm for technology has led me to explore fields like AI, machine learning, deep learning, blockchain, and cybersecurity, with a particular focus on backend development and data management. However, I also have strong frontend skills, particularly with React.js and other frontend frameworks.</p>
            </div>
            <div className="column right-column">
              <p>I am always eager to learn and explore new technologies because I believe the future is shaped by innovation. I'm adaptable and open to continuous learning, yet I remain focused and diligent in my work. Having completed numerous projects, I am confident in my ability to contribute effectively in various roles. And I am also a graduate of Harisenin.com, a Fullstack Developer bootcamp and one of the top bootcamps in Indonesia.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'skills',
      backgroundColor: 'bg-green',
      content: (
        <div className="content">
          <h1 className="section-title">Skills</h1>
          <p className="section-description">Check out my programming skills.</p>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="skill-item"
              >
                <img 
                  src={skill.logo} 
                  alt={`${skill.name} logo`}
                  className="skill-logo"
                />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'Projects',
      backgroundColor: 'bg-red',
      content: (
        <div className="content">
          <h1 className="section-title">Projects</h1>
          <p className="section-description">Explore my projects as I grow in Web development.</p>

          <div className="carousel-container">
            <Carousel
              showArrows={true}
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
              useKeyboardArrows={true}
              autoPlay={true}
              interval={3000}
              transitionTime={600}
              swipeable={true}
              emulateTouch={true}
              dynamicHeight={true}
            >
              <div>
                <div onClick={(e) => {
                  e.stopPropagation();
                  window.open("https://missionharisenin-chillmovie.vercel.app/", "_blank");
                }}>
                  <img src={img1} alt="Project 1" />
                </div>
                <div className="legend">
                  <h3 className="legend-title">Chill Movie</h3>
                  <p className="legend-desc">A web application for browsing movies.</p>
                </div>
              </div>

              <div>
                <div onClick={(e) => {
                  e.stopPropagation();
                  window.open("https://faathirazukhruf.github.io/Aplikasi-todolist-faathircompany/to%20do%20list/", "_blank");
                }}>
                  <img src={img2} alt="Project 2" />
                  <p className="legend">To-do List App - Personal Task Manager</p>
                </div>
                <div className="legend">
                  <h3 className="legend-title">To-Do List App</h3>
                  <p className="legend-desc">A simple and functional to-do list application.</p>
                </div>
              </div>

              <div>
                <div onClick={(e) => {
                  e.stopPropagation();
                  window.open("https://faathirazukhruf.github.io/majalengka-web/Majalengka%20profil%20buatan%20Faathir/", "_blank");
                }}>
                  <img src={img3} alt="Project 3" />
                  <p className="legend">Majalengka Profile Website</p>
                </div>
                <div className="legend">
                  <h3 className="legend-title">Majalengka Profile</h3>
                  <p className="legend-desc">A profile website for Majalengka city.</p>
                </div>
              </div>

              <div>
                <div onClick={(e) => {
                  e.stopPropagation();
                  window.open("https://faathirazukhruf.github.io/Gameberangberang/berangberang/", "_blank");
                }}>
                  <img src={img4} alt="Project 4" />
                  <p className="legend">Berang-Berang Game</p>
                </div>
                <div className="legend">
                  <h3 className="legend-title">Berang-Berang Game</h3>
                  <p className="legend-desc">A fun and interactive game about Berang-Berang.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      backgroundColor: 'bg-red',
      content: (
        <div className="contact-wrapper">
          <div className="content">
            <h1 className="section-title">Contact</h1>
            <p className="section-description">Let's collaborate! Reach out to discuss your project ideas.</p>
            <div className="social-links-container">
              <a href="mailto:muhammadfaathir004@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" alt="Gmail" className="social-icon" />
              </a>
              <a href="https://wa.me/6283148486316" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="WhatsApp" className="social-icon" />
              </a>
              <a href="https://instagram.com/Faathirazukhruf" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/faathir-azukhruf-61335b307" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://github.com/Faathirazukhruf" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="social-icon" />
              </a>
            </div>
          </div>
          <footer className="footer">
            <p>© {new Date().getFullYear()} Faathirazukhruf. All rights reserved.</p>
          </footer>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      const delta = e.deltaY;

      if (delta > 0 && activeSection < sections.length - 1) {
        scrollToSection(activeSection + 1);
      } else if (delta < 0 && activeSection > 0) {
        scrollToSection(activeSection - 1);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => window.removeEventListener('wheel', handleScroll);
  }, [activeSection]);

  const scrollToSection = (index) => {
    setActiveSection(index);
    sectionRefs.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleDotClick = (index) => {
    scrollToSection(index);
  };

  return (
  <>
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Faathirazukhruf
        </h1>
        
        <button
          onClick={handleEmailClick}
          className="email-button text-white hover:text-blue-200 transition-colors duration-200 flex items-center gap-2"
          aria-label="Send email"
        >
          <img 
            src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" 
            alt="Gmail" 
            className="w-8 h-8"
          />
        </button>
      </div>
    </nav>

      <div className="portfolio">
        <div className="navigation-dots">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`dot ${activeSection === index ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="sections">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`section ${section.backgroundColor}`}
            >
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portofolio;