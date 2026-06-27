import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

// ─── IDE Code Snippets (Dark Catppuccin Theme) ───
const snippets = {
  about: {
    name: 'AboutMe.js',
    icon: '⚡',
    content: [
      { line: 'const', cls: 'text-ide-keyword', rest: [{ text: ' developer', cls: 'text-ide-variable' }, { text: ' = {', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: 'name', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: "'Princess Morera Orbillo'", cls: 'text-ide-string' }, { text: ',', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: 'role', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: "'Software Engineer'", cls: 'text-ide-string' }, { text: ',', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: 'education', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: "'4th Year Computer Science'", cls: 'text-ide-string' }, { text: ',', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: 'focus', cls: 'text-ide-component' }, { text: ': [', cls: 'text-ide-text' }, { text: "'UI/UX'", cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: "'Frontend'", cls: 'text-ide-string' }, { text: '],', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: 'quote', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: "'Transforming challenges into opportunities'", cls: 'text-ide-string' }] },
      { text: '};', cls: 'text-ide-text' },
      { empty: true },
      { text: '// Current Status', cls: 'text-ide-comment' },
      { parts: [{ text: 'developer', cls: 'text-ide-variable' }, { text: '.', cls: 'text-ide-text' }, { text: 'isReadyForWork', cls: 'text-ide-function' }, { text: '(); ', cls: 'text-ide-text' }, { text: '// Returns true', cls: 'text-ide-comment' }] },
    ]
  },
  expertise: {
    name: 'tech_stack.json',
    icon: '📦',
    content: [
      { text: '{', cls: 'text-ide-text' },
      { indent: 2, parts: [{ text: '"languages"', cls: 'text-ide-component' }, { text: ': [', cls: 'text-ide-text' }, { text: '"C#"', cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: '"TypeScript"', cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: '"JavaScript"', cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: '"Python"', cls: 'text-ide-string' }, { text: '],', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: '"frontend"', cls: 'text-ide-component' }, { text: ': [', cls: 'text-ide-text' }, { text: '"React"', cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: '"Blazor"', cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: '"Tailwind"', cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: '"Fluent UI"', cls: 'text-ide-string' }, { text: '],', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: '"backend"', cls: 'text-ide-component' }, { text: ': [', cls: 'text-ide-text' }, { text: '"ASP.NET Core"', cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: '".NET 10"', cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: '"Node.js"', cls: 'text-ide-string' }, { text: '],', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: '"cloud_db"', cls: 'text-ide-component' }, { text: ': [', cls: 'text-ide-text' }, { text: '"Azure"', cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: '"SQL"', cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: '"Oracle"', cls: 'text-ide-string' }, { text: '],', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: '"tools"', cls: 'text-ide-component' }, { text: ': [', cls: 'text-ide-text' }, { text: '"Git"', cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: '"Azure DevOps"', cls: 'text-ide-string' }, { text: ', ', cls: 'text-ide-text' }, { text: '"Teams Toolkit"', cls: 'text-ide-string' }, { text: ']', cls: 'text-ide-text' }] },
      { text: '}', cls: 'text-ide-text' },
    ]
  },
  projects: {
    name: 'Projects.jsx',
    icon: '🚀',
    content: [
      { parts: [{ text: 'import', cls: 'text-ide-keyword' }, { text: ' { ', cls: 'text-ide-text' }, { text: 'useState', cls: 'text-ide-variable' }, { text: ' } ', cls: 'text-ide-text' }, { text: 'from', cls: 'text-ide-keyword' }, { text: " 'react'", cls: 'text-ide-string' }, { text: ';', cls: 'text-ide-text' }] },
      { empty: true },
      { parts: [{ text: 'export default function', cls: 'text-ide-keyword' }, { text: ' Projects', cls: 'text-ide-function' }, { text: '() {', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: 'return', cls: 'text-ide-keyword' }, { text: ' (', cls: 'text-ide-text' }] },
      { indent: 4, parts: [{ text: '<', cls: 'text-ide-text' }, { text: 'div', cls: 'text-ide-tag' }, { text: ' className', cls: 'text-ide-component' }, { text: '=', cls: 'text-ide-text' }, { text: '"grid"', cls: 'text-ide-string' }, { text: '>', cls: 'text-ide-text' }] },
      { indent: 6, text: '/* Nomis, Alejo, Kumpas, Donut Munchies */', cls: 'text-ide-comment' },
      { indent: 6, parts: [{ text: '<', cls: 'text-ide-text' }, { text: 'ProjectCard', cls: 'text-ide-tag' }, { text: ' data', cls: 'text-ide-component' }, { text: '={', cls: 'text-ide-text' }, { text: 'selectedWork', cls: 'text-ide-variable' }, { text: '} />', cls: 'text-ide-text' }] },
      { indent: 4, parts: [{ text: '</', cls: 'text-ide-text' }, { text: 'div', cls: 'text-ide-tag' }, { text: '>', cls: 'text-ide-text' }] },
      { indent: 2, text: ');', cls: 'text-ide-text' },
      { text: '}', cls: 'text-ide-text' },
    ]
  },
  contact: {
    name: 'contact.css',
    icon: '💬',
    content: [
      { text: '/* Get in touch */', cls: 'text-ide-comment' },
      { parts: [{ text: '.contact-me', cls: 'text-ide-variable' }, { text: ' {', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: 'email', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: '"orbilloprincessmorera@gmail.com"', cls: 'text-ide-string' }, { text: ';', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: 'linkedin', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: '"in/princess-orbillo"', cls: 'text-ide-string' }, { text: ';', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: 'github', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: '"@princessorbillo"', cls: 'text-ide-string' }, { text: ';', cls: 'text-ide-text' }] },
      { indent: 2, parts: [{ text: 'status', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: 'openToOpportunities', cls: 'text-ide-function' }, { text: '();', cls: 'text-ide-text' }] },
      { text: '}', cls: 'text-ide-text' },
    ]
  },
  certifications: {
    name: 'certifications.yml',
    icon: '🏆',
    content: [
      { text: '# Verified Credentials', cls: 'text-ide-comment' },
      { parts: [{ text: 'certifications', cls: 'text-ide-tag' }, { text: ':', cls: 'text-ide-text' }] },
      { empty: true },
      { indent: 2, parts: [{ text: '-', cls: 'text-ide-keyword' }, { text: ' name', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: '"TOPCIT Level 5 Passer"', cls: 'text-ide-string' }] },
      { indent: 3, parts: [{ text: 'issuer', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: '"TOPCIT"', cls: 'text-ide-string' }] },
      { indent: 3, parts: [{ text: 'year', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: '2026', cls: 'text-ide-keyword' }] },
      { empty: true },
      { indent: 2, parts: [{ text: '-', cls: 'text-ide-keyword' }, { text: ' name', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: '"Microsoft Azure AI"', cls: 'text-ide-string' }] },
      { indent: 3, parts: [{ text: 'issuer', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: '"TESDA"', cls: 'text-ide-string' }] },
      { indent: 3, parts: [{ text: 'year', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: '2025', cls: 'text-ide-keyword' }] },
      { empty: true },
      { indent: 2, parts: [{ text: '-', cls: 'text-ide-keyword' }, { text: ' name', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: '"IT Specialist Python"', cls: 'text-ide-string' }] },
      { indent: 3, parts: [{ text: 'issuer', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: '"ACE"', cls: 'text-ide-string' }] },
      { indent: 3, parts: [{ text: 'year', cls: 'text-ide-component' }, { text: ': ', cls: 'text-ide-text' }, { text: '2024', cls: 'text-ide-keyword' }] },
    ]
  }
};

// ─── IDE Code Line Renderer ───
function CodeLine({ data, lineNum }) {
  if (data.empty) {
    return (
      <div className="flex">
        <span className="text-ide-lineNum w-8 text-right mr-4 select-none text-xs">{lineNum}</span>
        <span>&nbsp;</span>
      </div>
    );
  }
  
  const indent = data.indent ? 'pl-' + (data.indent * 4) : '';
  
  if (data.parts) {
    return (
      <div className="flex">
        <span className="text-ide-lineNum w-8 text-right mr-4 select-none text-xs">{lineNum}</span>
        <span className={indent}>
          {data.parts.map((p, i) => <span key={i} className={p.cls}>{p.text}</span>)}
        </span>
      </div>
    );
  }
  
  if (data.rest) {
    return (
      <div className="flex">
        <span className="text-ide-lineNum w-8 text-right mr-4 select-none text-xs">{lineNum}</span>
        <span className={indent}>
          <span className={data.cls}>{data.line}</span>
          {data.rest.map((p, i) => <span key={i} className={p.cls}>{p.text}</span>)}
        </span>
      </div>
    );
  }
  
  return (
    <div className="flex">
      <span className="text-ide-lineNum w-8 text-right mr-4 select-none text-xs">{lineNum}</span>
      <span className={`${data.cls} ${indent}`}>{data.text}</span>
    </div>
  );
}

// ─── Main App ───
function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // default dark
  });
  const containerRef = useRef(null);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Smooth scroll progress for IDE window parallax
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, mass: 0.5 });

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Custom Physics Cursor
  const cursorX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'expertise', 'projects', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.4) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const certs = [
    { title: "The Test of Practical Competency in ICT (TOPCIT) Level 5 Passer", issuer: "TOPCIT", year: "2026" },
    { title: "Microsoft Artificial Intelligence Course (Azure AI)", issuer: "TESDA", year: "2025" },
    { title: "Fundamentals of CSS Course", issuer: "TESDA", year: "2025" },
    { title: "IT Specialist Python", issuer: "American Council on Education", year: "2024" },
    { title: "NDG Linux Essentials", issuer: "Cisco Networking Academy", year: "2024" },
    { title: "IT Specialist Java", issuer: "American Council on Education", year: "2023" },
  ];

  const projects = [
    { title: "Nomis Plus Dashboard", year: "2026", role: "Full Stack Dev (Software Developer Intern)", desc: "Enterprise dashboard built with Blazor WebAssembly, ASP.NET Core (.NET 10), and Tailwind CSS using a secure BFF pattern. It leverages Vertical Slice Architecture to deliver a highly scalable, secure, and performant web experience for complex data management and administrative workflows.", link: "https://placehold.co/600x400/1e293b/ffffff?text=Nomis+Plus+Dashboard" },
    { title: "Alejo Electrical Supply", year: "2026", role: "Frontend Developer", desc: "A modern web presence and e-commerce application for an electrical supply store. Built to showcase products, streamline customer inquiries, and highlight business services with an engaging and responsive interface.", link: "/alejo.png", url: "https://alejo-electrical-supply.vercel.app/" },
    { title: "Nomis HelpDesk for Teams", year: "2025", role: "Bot and App Dev (Software Developer Intern)", desc: "A Microsoft Teams app integrating React, Fluent UI, and Microsoft Bot Framework with Azure AD and Graph. It provides seamless conversational capabilities and rich Adaptive Cards within Teams, backed by Azure SQL and Application Insights for comprehensive telemetry and intelligent routing.", link: "https://placehold.co/600x400/1e293b/ffffff?text=Nomis+HelpDesk" },
    { title: "Kumpas", year: "2025", role: "Mobile App Development", desc: "A sign language translation app translating spoken English into animated FSL and ASL. The application aims to bridge the communication gap for the deaf and hard of hearing by utilizing real-time natural language processing and rendering accurate 3D avatar animations for various sign dialects.", link: "https://intet.dashnexpages.net/Portfolio/kumpasmain.jpg" },
    { title: "Ticket Booking Site", year: "2023", role: "UI/UX Design", desc: "Designed the UI/UX as part of an application for a local startup. This project focused on creating a seamless, intuitive booking flow for end-users, ensuring that the interface was both visually appealing and highly functional across various devices and screen sizes.", link: "https://intet.dashnexpages.net/Portfolio/ticket.jpg" },
    { title: "Donut Munchies", year: "2023", role: "Web Design", desc: "A web design concept highlighting a sweet, modern e-commerce experience. The primary goal was to create a vibrant, engaging storefront that balances playful aesthetics with robust shopping cart mechanics and clear calls-to-action for increased conversions.", link: "https://intet.dashnexpages.net/Portfolio/dmhome.jpg" }
  ];

  const sectionLabels = {
    about: '01',
    expertise: '02',
    projects: '03',
    certifications: '04',
    contact: '05',
  };

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col md:flex-row relative">
      
      {/* ── Theme Toggle ── */}
      <motion.button
        className="theme-toggle"
        onClick={() => setIsDark(!isDark)}
        whileTap={{ scale: 0.9 }}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isDark ? 'sun' : 'moon'}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            {isDark ? '☀️' : '🌙'}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Atmospheric Background Layers */}
      <div className="bg-mesh" />
      <div className="bg-grid-pattern fixed inset-0 z-0 pointer-events-none" />
      <div className="noise-overlay" />

      {/* Custom Glow Cursor Effect */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full opacity-30 z-0 hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(6, 182, 212, 0.2) 40%, rgba(255,255,255,0) 70%)',
          x: useTransform(cursorX, v => v - 300),
          y: useTransform(cursorY, v => v - 300),
        }}
      />
      
      {/* ════ Left Side — Content ════ */}
      <div className="w-full md:w-1/2 p-8 md:px-20 md:py-24 overflow-y-auto z-10 relative">
        
        {/* ── Hero ── */}
        <header className="mb-36 mt-12 md:mt-0">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="status-badge mb-8">
              <span className="dot" />
              Open to Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.05]">
              <span className="gradient-text">Princess M.</span>
              <br />
              <span className="text-primary">Orbillo</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-md font-medium leading-relaxed">
              Software Engineer, Front-end & App Developer based in the Philippines.
            </p>
          </motion.div>
        </header>

        {/* ── About ── */}
        <motion.section 
          id="about" 
          className="mb-36 relative group"
          onMouseEnter={() => setActiveSection('about')}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-bar" />
          <h2 className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-8 pb-3 border-b border-surface-border flex items-center gap-3">
            <span className="text-accent font-bold">{sectionLabels.about}</span>
            <span className="w-6 h-[1px] bg-muted" />
            About
          </h2>
          <div className="text-lg leading-relaxed max-w-md space-y-6 text-secondary font-medium">
            <p className="group-hover:text-primary transition-colors duration-500">I specialize in building software applications and user interfaces, with a focus on performance and user satisfaction.</p>
            <p className="text-muted italic border-l-2 border-accent/30 pl-4">"Transforming challenges into opportunities through thoughtful technology."</p>
          </div>
        </motion.section>

        {/* ── Expertise ── */}
        <motion.section 
          id="expertise" 
          className="mb-36 relative group"
          onMouseEnter={() => setActiveSection('expertise')}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-bar" />
          <h2 className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-8 pb-3 border-b border-surface-border flex items-center gap-3">
            <span className="text-accent font-bold">{sectionLabels.expertise}</span>
            <span className="w-6 h-[1px] bg-muted" />
            Expertise
          </h2>
          <div className="space-y-6 max-w-md">
            {[
              { title: 'Frontend Development', tech: 'React · Blazor · Tailwind · Fluent UI' },
              { title: 'Software & Mobile', tech: 'C# · TypeScript · Python · Android Studio' },
              { title: 'Backend & Databases', tech: 'ASP.NET Core · .NET 10 · SQL' },
              { title: 'Cloud & Architecture', tech: 'Azure · Bot Framework · Vertical Slice · Microservices' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 8 }} 
                className="glass-card p-5 cursor-default"
              >
                <h3 className="text-base font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-secondary text-sm font-mono">{item.tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Projects ── */}
        <motion.section 
          id="projects" 
          className="mb-36 relative group"
          onMouseEnter={() => setActiveSection('projects')}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-bar" />
          <h2 className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-8 pb-3 border-b border-surface-border flex items-center gap-3">
            <span className="text-accent font-bold">{sectionLabels.projects}</span>
            <span className="w-6 h-[1px] bg-muted" />
            Selected Work
          </h2>
          <div className="space-y-4 max-w-md">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.01 }} 
                onClick={() => setSelectedProject(project)}
                className="glass-card p-6 cursor-pointer group/item"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary group-hover/item:text-accent transition-colors duration-300">{project.title}</h3>
                  <motion.span 
                    className="text-accent text-lg"
                    initial={{ opacity: 0, x: -5 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >↗</motion.span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {project.role}
                  </span>
                  <span className="text-muted font-mono text-xs">{project.year}</span>
                </div>
                <p className="text-secondary text-sm leading-relaxed line-clamp-2">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Certifications ── */}
        <motion.section 
          id="certifications" 
          className="mb-36 relative group"
          onMouseEnter={() => setActiveSection('certifications')}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-bar" />
          <h2 className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-8 pb-3 border-b border-surface-border flex items-center gap-3">
            <span className="text-accent font-bold">{sectionLabels.certifications}</span>
            <span className="w-6 h-[1px] bg-muted" />
            Certifications
          </h2>
          <div className="space-y-3 max-w-md">
            {certs.map((cert, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ x: 6 }} 
                className="glass-card p-4 cursor-default flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-accent text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted font-medium">
                    <span>{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-muted/50" />
                    <span>{cert.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Contact ── */}
        <motion.section 
          id="contact" 
          className="mb-32 relative group"
          onMouseEnter={() => setActiveSection('contact')}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-bar" />
          <h2 className="text-xs font-mono text-secondary uppercase tracking-[0.2em] mb-8 pb-3 border-b border-surface-border flex items-center gap-3">
            <span className="text-accent font-bold">{sectionLabels.contact}</span>
            <span className="w-6 h-[1px] bg-muted" />
            Contact
          </h2>
          <div className="flex flex-col gap-3 max-w-md">
            {[
              { href: "mailto:orbilloprincessmorera@gmail.com", icon: "✉", label: "Email", external: false },
              { href: "https://www.linkedin.com/in/princess-orbillo-4086602a0/", icon: "in", label: "LinkedIn", external: true },
              { href: "https://github.com/princessorbillo", icon: "<>", label: "GitHub", external: true },
            ].map((link, i) => (
              <motion.a 
                key={i}
                href={link.href} 
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                whileHover={{ x: 6 }}
                className="glass-card p-4 flex items-center gap-4 group/link cursor-pointer"
              >
                <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-sm group-hover/link:bg-accent/20 transition-colors">
                  {link.icon}
                </span>
                <span className="font-bold text-primary group-hover/link:text-accent transition-colors">{link.label}</span>
                <span className="ml-auto text-muted opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
              </motion.a>
            ))}
          </div>
        </motion.section>

      </div>

      {/* ════ Right Side — IDE Window ════ */}
      <div className="hidden md:flex w-1/2 fixed right-0 top-0 bottom-0 items-center justify-center p-12 z-20 pointer-events-none">
        
        {/* Subtle ambient glow behind IDE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <motion.div 
          style={{ y: smoothY }}
          className="w-full max-w-lg bg-ide-bg rounded-2xl ide-shadow ide-glow-border overflow-hidden border border-ide-border flex flex-col relative z-10 pointer-events-auto"
        >
          
          {/* IDE Top Bar */}
          <div className="h-11 bg-ide-topbar flex items-center px-4 border-b border-ide-border shrink-0">
            <div className="flex gap-2 group cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-125 transition-all" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-125 transition-all" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-125 transition-all" />
            </div>
            <div className="mx-auto flex items-center gap-2 px-3 py-1 rounded-md bg-surface text-xs font-mono text-ide-text/60 font-medium tracking-wide">
              <span>{snippets[activeSection].icon}</span> 
              <span>{snippets[activeSection].name}</span>
            </div>
            <div className="w-12" />
          </div>

          {/* IDE Content */}
          <div className="p-6 flex-1 min-h-[380px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 p-6 font-mono text-sm leading-relaxed"
              >
                {snippets[activeSection].content.map((line, i) => (
                  <CodeLine key={i} data={line} lineNum={i + 1} />
                ))}
                {/* Blinking cursor */}
                <div className="flex mt-0.5">
                  <span className="text-ide-lineNum w-8 text-right mr-4 select-none text-xs">
                    {snippets[activeSection].content.length + 1}
                  </span>
                  <span className="w-[2px] h-4 bg-accent cursor-blink" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* IDE Status Bar */}
          <div className="h-6 bg-ide-topbar border-t border-ide-border flex items-center px-4 text-[10px] font-mono text-ide-text/40 gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
              UTF-8
            </span>
            <span>Ln {snippets[activeSection].content.length}, Col 1</span>
            <span className="ml-auto">Spaces: 2</span>
          </div>
          
        </motion.div>
      </div>

      {/* ════ Project Modal ════ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface-card rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row relative border border-surface-border shadow-2xl shadow-accent/5"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-sm"
              >
                ✕
              </button>
              
              {/* Image side */}
              <div className="w-full md:w-1/2 bg-background h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={selectedProject.link} 
                  alt={selectedProject.title} 
                  className="w-full h-full md:absolute md:inset-0 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-surface-card/10" />
              </div>

              {/* Info side */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center min-h-[350px]">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {selectedProject.role}
                  </span>
                  <span className="text-muted font-mono text-xs">{selectedProject.year}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-primary mb-4">{selectedProject.title}</h3>
                <p className="text-sm text-secondary leading-relaxed mb-6">
                  {selectedProject.desc}
                </p>
                {selectedProject.url && (
                  <a 
                    href={selectedProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm w-fit transition-all duration-300
                      bg-gradient-to-r from-accent to-accent-cyan text-white
                      hover:shadow-lg hover:shadow-accent/30 hover:scale-105"
                  >
                    Visit Website <span>↗</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
