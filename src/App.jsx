import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

// Code snippets for the IDE window
const snippets = {
  about: {
    name: 'AboutMe.js',
    content: (
      <div className="font-mono text-sm leading-relaxed text-ide-text">
        <div><span className="text-ide-keyword">const</span> <span className="text-ide-variable">developer</span> <span className="text-ide-keyword">=</span> {'{'}</div>
        <div className="pl-6"><span className="text-ide-component">name</span>: <span className="text-ide-string">'Princess Morera Orbillo'</span>,</div>
        <div className="pl-6"><span className="text-ide-component">role</span>: <span className="text-ide-string">'Software Engineer'</span>,</div>
        <div className="pl-6"><span className="text-ide-component">education</span>: <span className="text-ide-string">'4th Year Computer Science'</span>,</div>
        <div className="pl-6"><span className="text-ide-component">focus</span>: [<span className="text-ide-string">'UI/UX'</span>, <span className="text-ide-string">'Frontend'</span>],</div>
        <div className="pl-6"><span className="text-ide-component">quote</span>: <span className="text-ide-string">'Transforming challenges into opportunities'</span></div>
        <div>{'}'};</div>
        <br />
        <div className="text-ide-comment">{'// Current Status'}</div>
        <div><span className="text-ide-variable">developer</span>.<span className="text-ide-function">isReadyForWork</span>(); <span className="text-ide-comment">{'// Returns true'}</span></div>
      </div>
    )
  },
  expertise: {
    name: 'tech_stack.json',
    content: (
      <div className="font-mono text-sm leading-relaxed text-ide-text">
        <div>{'{'}</div>
        <div className="pl-6"><span className="text-ide-component">"languages"</span>: [<span className="text-ide-string">"C#"</span>, <span className="text-ide-string">"TypeScript"</span>, <span className="text-ide-string">"JavaScript"</span>, <span className="text-ide-string">"Python"</span>, <span className="text-ide-string">"Java"</span>, <span className="text-ide-string">"C++"</span>],</div>
        <div className="pl-6"><span className="text-ide-component">"frontend"</span>: [<span className="text-ide-string">"React"</span>, <span className="text-ide-string">"Blazor"</span>, <span className="text-ide-string">"Tailwind CSS"</span>, <span className="text-ide-string">"Fluent UI"</span>],</div>
        <div className="pl-6"><span className="text-ide-component">"backend"</span>: [<span className="text-ide-string">"ASP.NET Core"</span>, <span className="text-ide-string">".NET 10"</span>, <span className="text-ide-string">"Node.js"</span>, <span className="text-ide-string">"PHP"</span>],</div>
        <div className="pl-6"><span className="text-ide-component">"cloud_db"</span>: [<span className="text-ide-string">"Azure"</span>, <span className="text-ide-string">"SQL"</span>, <span className="text-ide-string">"Cosmos DB"</span>, <span className="text-ide-string">"Oracle"</span>],</div>
        <div className="pl-6"><span className="text-ide-component">"tools"</span>: [<span className="text-ide-string">"Git"</span>, <span className="text-ide-string">"Azure DevOps"</span>, <span className="text-ide-string">"Teams Toolkit"</span>]</div>
        <div>{'}'}</div>
      </div>
    )
  },
  projects: {
    name: 'Projects.jsx',
    content: (
      <div className="font-mono text-sm leading-relaxed text-ide-text">
        <div><span className="text-ide-keyword">import</span> {'{'} <span className="text-ide-variable">useState</span> {'}'} <span className="text-ide-keyword">from</span> <span className="text-ide-string">'react'</span>;</div>
        <br />
        <div><span className="text-ide-keyword">export default function</span> <span className="text-ide-function">Projects</span>() {'{'}</div>
        <div className="pl-6"><span className="text-ide-keyword">return</span> (</div>
        <div className="pl-12">{'<'}<span className="text-ide-tag">div</span> <span className="text-ide-component">className</span>=<span className="text-ide-string">"grid"</span>{'>'}</div>
        <div className="pl-16 text-ide-comment">{'/* Ticket Booking, Donut Munchies, Kumpas */'}</div>
        <div className="pl-16">{'<'}<span className="text-ide-tag">ProjectCard</span> <span className="text-ide-component">data</span>=<span className="text-ide-keyword">{'{'}</span><span className="text-ide-variable">selectedWork</span><span className="text-ide-keyword">{'}'}</span> {'/>'}</div>
        <div className="pl-12">{'</'}<span className="text-ide-tag">div</span>{'>'}</div>
        <div className="pl-6">);</div>
        <div>{'}'}</div>
      </div>
    )
  },
  contact: {
    name: 'contact.css',
    content: (
      <div className="font-mono text-sm leading-relaxed text-ide-text">
        <div className="text-ide-comment">/* Get in touch */</div>
        <div><span className="text-ide-variable">.contact-me</span> {'{'}</div>
        <div className="pl-6"><span className="text-ide-component">email</span>: <span className="text-ide-string">"orbilloprincessmorera@gmail.com"</span>;</div>
        <div className="pl-6"><span className="text-ide-component">linkedin</span>: <span className="text-ide-string">"in/princess-orbillo"</span>;</div>
        <div className="pl-6"><span className="text-ide-component">github</span>: <span className="text-ide-string">"@princessorbillo"</span>;</div>
        <div className="pl-6"><span className="text-ide-component">status</span>: <span className="text-ide-function">openToOpportunities</span>();</div>
        <div>{'}'}</div>
      </div>
    )
  },
  certifications: {
    name: 'certifications.yml',
    content: (
      <div className="font-mono text-sm leading-relaxed text-ide-text">
        <div className="text-ide-comment"># Verified Credentials</div>
        <div><span className="text-ide-tag">certifications</span>:</div>
        
        <div className="pl-6"><span className="text-ide-keyword">-</span> <span className="text-ide-component">name</span>: <span className="text-ide-string">"Microsoft Azure AI"</span></div>
        <div className="pl-8"><span className="text-ide-component">issuer</span>: <span className="text-ide-string">"TESDA"</span></div>
        <div className="pl-8"><span className="text-ide-component">year</span>: <span className="text-ide-keyword">2025</span></div>
        <br/>
        <div className="pl-6"><span className="text-ide-keyword">-</span> <span className="text-ide-component">name</span>: <span className="text-ide-string">"Fundamentals of CSS"</span></div>
        <div className="pl-8"><span className="text-ide-component">issuer</span>: <span className="text-ide-string">"TESDA"</span></div>
        <div className="pl-8"><span className="text-ide-component">year</span>: <span className="text-ide-keyword">2025</span></div>
        <br/>
        <div className="pl-6"><span className="text-ide-keyword">-</span> <span className="text-ide-component">name</span>: <span className="text-ide-string">"IT Specialist Python"</span></div>
        <div className="pl-8"><span className="text-ide-component">issuer</span>: <span className="text-ide-string">"American Council on Education"</span></div>
        <div className="pl-8"><span className="text-ide-component">year</span>: <span className="text-ide-keyword">2024</span></div>
      </div>
    )
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  // Smooth scroll progress for IDE window parallax
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, mass: 0.5 });

  // Custom Physics Cursor
  const cursorX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.5 });
  const cursorXFast = useSpring(0, { stiffness: 500, damping: 25, mass: 0.1 });
  const cursorYFast = useSpring(0, { stiffness: 500, damping: 25, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      cursorXFast.set(e.clientX);
      cursorYFast.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY, cursorXFast, cursorYFast]);

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
    { title: "Microsoft Artificial Intelligence Course (Azure AI)", issuer: "TESDA", year: "2025" },
    { title: "Fundamentals of CSS Course", issuer: "TESDA", year: "2025" },
    { title: "IT Specialist Python", issuer: "American Council on Education", year: "2024" },
    { title: "NDG Linux Essentials", issuer: "Cisco Networking Academy", year: "2024" },
    { title: "IT Specialist Java", issuer: "American Council on Education", year: "2023" },
  ];

  const projects = [
    { title: "Nomis Plus Dashboard", role: "Full Stack Dev (Software Developer Intern)", desc: "Enterprise dashboard built with Blazor WebAssembly, ASP.NET Core (.NET 10), and Tailwind CSS using a secure BFF pattern. It leverages Vertical Slice Architecture to deliver a highly scalable, secure, and performant web experience for complex data management and administrative workflows.", link: "https://placehold.co/600x400/1e293b/ffffff?text=Nomis+Plus+Dashboard" },
    { title: "Nomis HelpDesk for Teams", role: "Bot and App Dev (Software Developer Intern)", desc: "A Microsoft Teams app integrating React, Fluent UI, and Microsoft Bot Framework with Azure AD and Graph. It provides seamless conversational capabilities and rich Adaptive Cards within Teams, backed by Azure Cosmos DB and Application Insights for comprehensive telemetry and intelligent routing.", link: "https://placehold.co/600x400/1e293b/ffffff?text=Nomis+HelpDesk" },
    { title: "Ticket Booking Site", role: "UI/UX Design", desc: "Designed the UI/UX as part of an application for a local startup. This project focused on creating a seamless, intuitive booking flow for end-users, ensuring that the interface was both visually appealing and highly functional across various devices and screen sizes.", link: "https://intet.dashnexpages.net/Portfolio/ticket.jpg" },
    { title: "Donut Munchies", role: "Web Design", desc: "A web design concept highlighting a sweet, modern e-commerce experience. The primary goal was to create a vibrant, engaging storefront that balances playful aesthetics with robust shopping cart mechanics and clear calls-to-action for increased conversions.", link: "https://intet.dashnexpages.net/Portfolio/dmhome.jpg" },
    { title: "Kumpas", role: "Mobile App Development", desc: "A sign language translation app translating spoken English into animated FSL and ASL. The application aims to bridge the communication gap for the deaf and hard of hearing by utilizing real-time natural language processing and rendering accurate 3D avatar animations for various sign dialects.", link: "https://intet.dashnexpages.net/Portfolio/kumpasmain.jpg" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-primary flex flex-col md:flex-row relative bg-dot-pattern">
      
      {/* Custom Glow Cursor Effect - Large Vibrant Aura */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-multiply opacity-50 z-0 hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(67, 56, 202, 0.5) 0%, rgba(126, 34, 206, 0.3) 30%, rgba(255,255,255,0) 70%)',
          x: useTransform(cursorX, v => v - 250),
          y: useTransform(cursorY, v => v - 250),
        }}
      />
      
      {/* Left Side - Content */}
      <div className="w-full md:w-1/2 p-8 md:p-24 overflow-y-auto z-10 relative">
        
        <header className="mb-40 mt-12 md:mt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-slate-900 leading-tight">
              Princess M. Orbillo
            </h1>
            <p className="text-xl md:text-2xl text-secondary max-w-md font-medium leading-relaxed">
              Software Engineer, Front-end & App Developer based in the Philippines.
            </p>
          </motion.div>
        </header>

        <motion.section 
          id="about" 
          className="mb-40 relative group"
          onMouseEnter={() => setActiveSection('about')}
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-8 border-b border-gray-200 pb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> 01 / About
          </h2>
          <div className="text-lg leading-relaxed max-w-md space-y-6 text-slate-700 font-medium">
            <p className="group-hover:text-black transition-colors duration-300">I specialize in building robust software architectures and engaging user interfaces, focusing on performance and user satisfaction.</p>
            <p className="text-secondary italic">"Transforming challenges into opportunities through thoughtful technology."</p>
          </div>
        </motion.section>

        <motion.section 
          id="expertise" 
          className="mb-40 relative group"
          onMouseEnter={() => setActiveSection('expertise')}
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-8 border-b border-gray-200 pb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> 02 / Expertise
          </h2>
          <div className="space-y-8 max-w-md">
            {['Frontend Development', 'Software & Mobile', 'Backend & Databases', 'Cloud & Architecture'].map((title, i) => (
              <motion.div key={i} whileHover={{ x: 10 }} className="cursor-default">
                <h3 className="text-xl mb-2 font-bold text-slate-800">{title}</h3>
                <p className="text-secondary font-medium">
                  {i === 0 ? 'React, Blazor, Tailwind, Fluent UI' : 
                   i === 1 ? 'C#, TypeScript, Python, Android Studio' : 
                   i === 2 ? 'ASP.NET Core, .NET 10, SQL, Cosmos DB' :
                   'Azure, Bot Framework, Vertical Slice, Microservices'}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="projects" 
          className="mb-40 relative group"
          onMouseEnter={() => setActiveSection('projects')}
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-8 border-b border-gray-200 pb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> 03 / Selected Work
          </h2>
          <div className="space-y-12 max-w-md">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }} 
                onClick={() => setSelectedProject(project)}
                className="group/item cursor-pointer block p-6 -ml-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all border border-transparent hover:border-blue-100"
              >
                <div className="block">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-800 group-hover/item:text-accent transition-colors">{project.title}</h3>
                    <span className="text-accent opacity-0 group-hover/item:opacity-100 transition-opacity">↗</span>
                  </div>
                  <div className="text-accent font-mono text-xs font-bold mb-3 tracking-wider uppercase bg-blue-50 w-fit px-3 py-1 rounded-full">{project.role}</div>
                  <p className="text-slate-600 font-medium leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="certifications" 
          className="mb-40 relative group"
          onMouseEnter={() => setActiveSection('certifications')}
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-8 border-b border-gray-200 pb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> 04 / Certifications
          </h2>
          <div className="space-y-8 max-w-md">
            {certs.map((cert, idx) => (
              <motion.div key={idx} whileHover={{ x: 10 }} className="cursor-default">
                <h3 className="text-lg mb-1 font-bold text-slate-800">{cert.title}</h3>
                <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                  <span>{cert.issuer}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="contact" 
          className="mb-32 relative group"
          onMouseEnter={() => setActiveSection('contact')}
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-8 border-b border-gray-200 pb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> 05 / Contact
          </h2>
          <div className="flex flex-col gap-6 text-lg font-bold">
            <a href="mailto:orbilloprincessmorera@gmail.com" className="hover:text-accent flex items-center gap-4 transition-colors w-fit group/link">
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">✉</span> Email
            </a>
            <a href="https://www.linkedin.com/in/princess-orbillo-4086602a0/" target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-4 transition-colors w-fit group/link">
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">in</span> LinkedIn
            </a>
            <a href="https://github.com/princessorbillo" target="_blank" rel="noopener noreferrer" className="hover:text-accent flex items-center gap-4 transition-colors w-fit group/link">
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/link:bg-blue-100 transition-colors">{'<>'}</span> GitHub
            </a>
          </div>
        </motion.section>

      </div>

      {/* Right Side - Interactive IDE Window */}
      <div className="hidden md:flex w-1/2 fixed right-0 top-0 bottom-0 items-center justify-center p-12 z-20 pointer-events-none">
        
        {/* Subtle background glow behind IDE */}
        <div className="absolute inset-0 bg-gradient-to-l from-blue-50/50 to-transparent z-0"></div>

        <motion.div 
          style={{ y: smoothY }}
          className="w-full max-w-lg bg-ide-bg rounded-2xl ide-shadow overflow-hidden border border-ide-border flex flex-col relative z-10 pointer-events-auto backdrop-blur-xl bg-white/80"
        >
          
          {/* IDE Mac Window Header */}
          <div className="h-12 bg-white/50 backdrop-blur-md flex items-center px-4 border-b border-ide-border shrink-0">
            <div className="flex gap-2 group cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] hover:brightness-110"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] hover:brightness-110"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] hover:brightness-110"></div>
            </div>
            <div className="mx-auto flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-xs font-mono text-secondary font-medium tracking-wide">
              <span>📄</span> {snippets[activeSection].name}
            </div>
            <div className="w-12"></div> {/* Spacer for centering */}
          </div>

          {/* IDE Content Area */}
          <div className="p-8 flex-1 min-h-[350px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 p-8"
              >
                {snippets[activeSection].content}
              </motion.div>
            </AnimatePresence>
          </div>
          
        </motion.div>
      </div>

      {/* Project Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors"
              >
                ✕
              </button>
              
              {/* Image side */}
              <div className="w-full md:w-3/5 bg-slate-100 h-64 md:h-auto relative flex items-center justify-center p-4">
                <img 
                  src={selectedProject.link} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>

              {/* Info side */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="text-accent font-mono text-xs font-bold mb-4 tracking-wider uppercase bg-blue-50 w-fit px-3 py-1 rounded-full">
                  {selectedProject.role}
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{selectedProject.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {selectedProject.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
