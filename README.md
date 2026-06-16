# 🌐 Faathir's Personal Portfolio (v2.0)

Welcome to the newly revamped, AI-integrated personal portfolio of **Faathir Azukhruf**. This project showcases my expertise as a **Full Stack Developer** and **AI Automation Engineer**, built using a modern stack and a "Brutalist Tech-Core" design aesthetic.

## ✨ Key Features

- **Brutalist Tech-Core Design**: A sleek, dark-mode, terminal-inspired glassmorphic UI.
- **Dual-Language i18n**: Full internationalization (English and Indonesian) built dynamically using React Context and custom dictionaries.
- **Faathir AI (Intelligent Chatbot)**: An integrated Gemini 2.5 Flash-powered conversational AI. Secure against prompt injection, acting as a personal assistant that answers questions about my projects and experience.
- **Fully Responsive**: Mobile-first approach ensuring a beautiful, uncompromised layout across all devices.
- **Interactive Widgets**: Includes an AirDrop-style connection popup, live system metrics, and terminal bash simulations.
- **Micro-Animations**: Powered by Framer Motion for smooth scroll effects and component transitions.

## 🚀 Technologies Used

### Frontend Architecture
- **Next.js (App Router)**: Fast, server-rendered React framework.
- **Tailwind CSS**: Utility-first CSS framework for rapid, highly-customized styling.
- **Framer Motion**: Production-ready declarative animations.
- **Lucide React**: Beautiful and consistent iconography.

### AI Integration
- **Google Generative AI (Gemini)**: Powers the conversational AI chatbot directly in the browser.

### Infrastructure & State
- **React Context API**: For global state management (Language preference).
- **Vercel**: Deployment platform optimized for Next.js.

## 📁 Folder Structure

```bash
.
├── app
│   ├── globals.css        # Global CSS variables and Tailwind imports
│   ├── layout.jsx         # Root layout
│   └── page.jsx           # Main portfolio landing page
├── components
│   ├── sections/          # Hero, About, Experience, Projects, Skills, Contact
│   ├── FloatingWidgets.jsx# Airdrop, Metrics, Terminal widgets
│   ├── FaathirAI.jsx      # The integrated Gemini chatbot
│   ├── Navbar.jsx         # Sticky navigation and language toggle
│   ├── Footer.jsx         # Minimal footer
│   └── LanguageContext.jsx# i18n Provider
├── dictionaries
│   ├── en.js              # English translations
│   └── id.js              # Indonesian translations
├── public
│   └── (static assets and images)
├── tailwind.config.js     # Custom brutalist color tokens and theme
└── package.json
```

## 📄 Setup Instructions

To run this project locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/Faathirazukhruf/Portfolio-faathir.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Portfolio-faathir
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Setup Environment Variables:
   Create a `.env.local` file in the root directory and add your Gemini API Key.
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and visit:
   ```bash
   http://localhost:3000
   ```

## 🤝 Let's Connect!

Available for new collaborations, AI projects, ERP systems, and freelance work. 

- **Email**: muhammadfaathir004@gmail.com
- **WhatsApp**: +62 831 4848 6316
- **Instagram**: [@faathirazukhruf](https://instagram.com/faathirazukhruf)
- **LinkedIn**: [Faathir Azukhruf](https://linkedin.com/in/faathirazukhruf)
- **GitHub**: [Faathirazukhruf](https://github.com/Faathirazukhruf)

---
*Architecting intelligent digital solutions. I bridge the gap between robust fullstack engineering and cutting-edge AI automation.*
