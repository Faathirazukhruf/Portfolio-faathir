import React, { useState, useEffect } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import profilePic from '../assets/ppfaathir (1).jpeg';
import pdfFile from '../assets/CV FAATHIRAZUKHRUF.pdf';
import './Portofolio.css';
import img1 from "../assets/v17-m1.png";
import img2 from "../assets/todolistfaathir.png";
import img3 from "../assets/Cover Majalengkaweb.png";
import img4 from "../assets/covergameberangberang.png";

const Projects = [
  {
    id: 1,
    title: "Chill Movie",
    description: "A web application for browsing movies.",
    images: [img1],
    demoLink: "https://missionharisenin-chillmovie.vercel.app/",
    githubLink: "https://github.com/Faathirazukhruf/mission-harisenin-chillmovie"
  },
  {
    id: 2,
    title: "To-Do List App",
    description: "A simple and functional to-do list application.",
    images: [img2],
    demoLink: "https://faathirazukhruf.github.io/Aplikasi-todolist-faathircompany/to%20do%20list/",
    githubLink: "https://github.com/Faathirazukhruf/Aplikasi-todolist-faathircompany"
  },
  {
    id: 3,
    title: "Majalengka Profile",
    description: "A profile website for Majalengka city.",
    images: [img3],
    demoLink: "https://faathirazukhruf.github.io/majalengka-web/Majalengka%20profil%20buatan%20Faathir/",
    githubLink: "https://github.com/Faathirazukhruf/majalengka-web"
  },
  {
    id: 4,
    title: "Berang-Berang Game",
    description: "A fun and interactive game about Berang-Berang.",
    images: [img4],
    demoLink: "https://faathirazukhruf.github.io/Gameberangberang/berangberang/",
    githubLink: "https://github.com/Faathirazukhruf/Gameberangberang"
  }
];

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
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'Postman',
    logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
  }
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio">
      <header className="header">
        <div className="logo">FaathirAzukhruf</div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="hamburger"></span>
          </button>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h1>Hi, I'm Faathir Azukhruf</h1>
          <p>Fullstack Developer</p>
          <div className="hero-buttons">
            <a href={pdfFile} download="Faathir_CV.pdf" className="btn primary">
              Download CV
            </a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a passionate Fullstack Developer with expertise in JavaScript, Python, HTML, CSS, and a variety of programming frameworks or tools such as React.js, Express.js, IBM loopback, Node.js, Bootstrap, Tailwind, PostgreSql, MySQL, and Postman. Additionally, I am proficient in operating Linux. My enthusiasm for technology has led me to explore fields like AI, machine learning, deep learning, blockchain, and cybersecurity, with a particular focus on backend development and data management. However, I also have strong frontend skills, particularly with React.js and other frontend frameworks.
              </p>
              <p>
                I am always eager to learn and explore new technologies because I believe the future is shaped by innovation. I'm adaptable and open to continuous learning, yet I remain focused and diligent in my work. Having completed numerous projects, I am confident in my ability to contribute effectively in various roles. And I am also a graduate of Harisenin.com, a Fullstack Developer bootcamp and one of the top bootcamps in Indonesia.
              </p>
              <div className="Skills">
                <h1 className="section-title">Skills</h1>
                <p className="section-description">Check out my programming skills.</p>
                <div className="skills-grid">
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {Projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-images">
                  <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
                    {project.images.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn small">View Project</a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn small secondary">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Feel free to reach out to me through any of these channels:</p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="icon-email"></i>
                  <p>muhammadfaathir004@gmail.com</p>
                </div>
                <div className="contact-item">
                  <i className="icon-phone"></i>
                  <p>+62 83148486316</p>
                </div>
                <div className="contact-item">
                  <i className="icon-location"></i>
                  <p>Majalengka, Indonesia</p>
                </div>
              </div>
              <div className="social-links-container">
                <h4 className="social-heading">Let's connect with me!</h4>
                <div className="social-icons-container">
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
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Faathir Azukhruf. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
