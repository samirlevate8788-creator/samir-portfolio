
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  ShieldCheck,
  Terminal,
  Layers3,
  LockKeyhole,
  Search,
  Gamepad2,
  Globe,
  Server,
  Cpu,
} from "lucide-react";

const projects = [
  /* =========================================================
     01 — AEGISONE
     ========================================================= */

  {
    id: "01",
    featured: true,
    title: "AegisOne",
    category: "Cybersecurity • Full Stack • AI",
    status: "PHASE 1 COMPLETE",
    role: "Founder & Developer",
    icon: ShieldCheck,

    description:
      "AI-powered cybersecurity and digital-risk platform focused on security visibility, risk analysis, asset management and defensive security workflows.",

    problem:
      "Build a practical cybersecurity platform that combines security concepts with modern full-stack engineering.",

    solution:
      "Designed and deployed a production-oriented security platform with a FastAPI backend, browser dashboard, REST APIs, automated testing and cloud deployment.",

    stack: [
      "Python",
      "FastAPI",
      "REST API",
      "JavaScript",
      "CORS",
      "Swagger",
      "Testing",
      "GitHub",
      "Render",
    ],

    features: [
      "Security dashboard",
      "Asset management",
      "Risk analysis",
      "Security findings",
      "REST API",
      "Swagger / OpenAPI",
      "Automated testing",
      "Production deployment",
    ],

    proof: [
      "9/9 Tests Passed",
      "Production API",
      "Swagger Docs",
    ],

    github:
      "https://github.com/samirlevate8788-creator/AegisOne",

    demo:
      "https://aegisone-frontend.onrender.com",

    api:
      "https://aegisone-rngk.onrender.com/docs",
  },

  /* =========================================================
     02 — SECURECHECK
     ========================================================= */

  {
    id: "02",
    featured: true,
    title: "SecureCheck",
    category: "Cybersecurity • Web Security",
    status: "LIVE • v1.0.0",
    role: "Developer",

    icon: LockKeyhole,

    description:
      "A browser-based password-security analyzer designed to make password strength, entropy and security characteristics easier to understand.",

    problem:
      "Create an educational security tool that explains password strength instead of showing only a simple score.",

    solution:
      "Built a responsive cybersecurity interface with password analysis, strength scoring, entropy estimation, security checks and password-generation controls.",

    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Security Logic",
      "Entropy Modeling",
      "GitHub Pages",
    ],

    features: [
      "Password strength score",
      "Entropy analysis",
      "Character-set analysis",
      "Crack-time estimation",
      "Security checklist",
      "Password generator",
      "Show / hide controls",
      "Responsive cybersecurity UI",
    ],

    proof: [
      "Live Application",
      "v1.0.0 Released",
      "Functional Validation",
    ],

    github:
      "https://github.com/samirlevate8788-creator/securecheck-password-analyze",

    demo:
      "https://samirlevate8788-creator.github.io/securecheck-password-analyze/",
  },

  /* =========================================================
     03 — LINUX SYSTEM LAB
     ========================================================= */

  {
    id: "03",
    featured: true,
    title: "Linux System Lab",
    category: "Linux • Cybersecurity • Ethical Hacking",
    status: "SECURITY LAB",
    role: "Security & Systems Learner",

    icon: Terminal,

    description:
      "A hands-on Kali Linux lab focused on Linux administration, command-line operations, networking and foundational cybersecurity experimentation in a controlled environment.",

    problem:
      "Develop practical understanding of Linux systems and cybersecurity concepts through hands-on laboratory work.",

    solution:
      "Explored Kali Linux administration, filesystem permissions, users and groups, networking, Bash scripting and security-oriented tools in a controlled learning environment.",

    stack: [
      "Kali Linux",
      "Linux",
      "Bash",
      "Nmap",
      "Wireshark",
      "Metasploit",
      "VirtualBox",
    ],

    features: [
      "Linux administration",
      "Filesystem & permissions",
      "User & group management",
      "Network configuration",
      "Bash scripting",
      "Security-tool exploration",
      "Vulnerability-scanning concepts",
      "Command-line practice",
    ],

    proof: [
      "Kali Linux Lab",
      "Security Research",
      "Systems Learning",
    ],

    github:
      "https://github.com/samirlevate8788-creator",
  },

  /* =========================================================
     04 — MINI NETWORK SCANNER
     ========================================================= */

  {
    id: "04",
    featured: false,
    title: "Mini Network Scanner",
    category: "Cybersecurity • Networking",
    status: "PROJECT",
    role: "Developer",

    icon: Search,

    description:
      "A lightweight cybersecurity learning project focused on network discovery and scanning concepts.",

    problem:
      "Understand practical networking and scanning concepts through a controlled cybersecurity project.",

    solution:
      "Developed as a practical learning project around network discovery, scanning concepts and cybersecurity fundamentals.",

    stack: [
      "Python",
      "Networking",
      "Cybersecurity",
      "Network Scanning",
    ],

    features: [
      "Network discovery",
      "Scanning concepts",
      "Networking fundamentals",
      "Security experimentation",
    ],

    proof: [
      "Cybersecurity",
      "Networking",
      "Practical Project",
    ],

    github:
      "https://github.com/samirlevate8788-creator",
  },

  /* =========================================================
     05 — ASTRAOS
     ========================================================= */

  {
    id: "05",
    featured: true,
    title: "AstraOS",
    category: "Operating Systems • Open Source",
    status: "ACTIVE DEVELOPMENT",
    role: "Founder & Project Lead",

    icon: Cpu,

    description:
      "An educational open-source operating-system initiative exploring boot processes, kernel concepts, memory management, file systems and systems programming.",

    problem:
      "Make low-level operating-system concepts easier to explore through practical development, documentation and open-source collaboration.",

    solution:
      "Created an open-source roadmap covering bootloader development, kernel concepts, memory management, file systems, drivers, shell development and future GUI work.",

    stack: [
      "C",
      "C++",
      "Assembly",
      "NASM",
      "GCC",
      "Linux",
      "QEMU",
      "Make",
      "Git",
    ],

    features: [
      "Bootloader concepts",
      "Kernel development",
      "Memory management",
      "File-system concepts",
      "Systems programming",
      "Shell concepts",
      "QEMU experimentation",
      "Open-source documentation",
    ],

    proof: [
      "Open Source",
      "Systems Project",
      "Founder-led",
    ],

    github:
      "https://github.com/samirlevate8788-creator/AstraOS",

    demo:
      "https://samirlevate8788-creator.github.io/AstraOS-/index.html",
  },

  /* =========================================================
     06 — PERSONAL PORTFOLIO
     ========================================================= */

  {
    id: "06",
    featured: false,
    title: "Personal Portfolio Website",
    category: "Frontend • Web Development",
    status: "LIVE",
    role: "Designer & Developer",

    icon: Code2,

    description:
      "A responsive professional portfolio designed to showcase software engineering, cybersecurity, AI, projects, certifications and technical learning.",

    problem:
      "Create a professional technical identity that communicates skills and practical work beyond a traditional resume.",

    solution:
      "Built a responsive portfolio experience with dedicated sections for projects, skills, certifications, experience, education, resume and contact.",

    stack: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "GitHub Pages",
    ],

    features: [
      "Responsive design",
      "Project showcase",
      "Technical skills",
      "Certifications",
      "Resume center",
      "Contact section",
      "Social links",
    ],

    proof: [
      "Live Portfolio",
      "Responsive Web",
      "GitHub Pages",
    ],

    github:
      "https://github.com/samirlevate8788-creator",

    demo:
      "https://samirlevate8788-creator.github.io/portfolio/",
  },

  /* =========================================================
     07 — SOLAPUR PG FINDER
     ========================================================= */

  {
    id: "07",
    featured: false,
    title: "Solapur PG Finder",
    category: "Web Application",
    status: "PROJECT",
    role: "Developer",

    icon: Globe,

    description:
      "A student-focused web application designed to help students discover PG accommodation options in Solapur.",

    problem:
      "Students moving to Solapur need an easier way to discover and compare PG accommodation information.",

    solution:
      "Created a responsive web experience focused on presenting accommodation information through a student-friendly interface.",

    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Web Development",
    ],

    features: [
      "Student-focused interface",
      "PG discovery",
      "Structured information",
      "Responsive layout",
    ],

    proof: [
      "Real-World Use Case",
      "Responsive Web",
    ],

    github:
      "https://github.com/samirlevate8788-creator",
  },

  /* =========================================================
     08 — IPL CRICKET GAME
     ========================================================= */

  {
    id: "08",
    featured: false,
    title: "IPL Cricket Game",
    category: "JavaScript • Game Development",
    status: "PROJECT",
    role: "Developer",

    icon: Gamepad2,

    description:
      "An interactive browser-based cricket game created to practice JavaScript logic, dynamic scoring and interactive UI development.",

    problem:
      "Create an engaging browser game while improving JavaScript logic and interactive interface development.",

    solution:
      "Implemented dynamic scoring, match logic, overs, wickets and responsive gameplay using browser technologies.",

    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Game Logic",
      "Responsive UI",
    ],

    features: [
      "Dynamic scoring",
      "Match logic",
      "Overs",
      "Wickets",
      "Interactive gameplay",
      "Responsive UI",
    ],

    proof: [
      "JavaScript",
      "Game Logic",
      "Interactive UI",
    ],

    github:
      "https://github.com/samirlevate8788-creator",
  },

  /* =========================================================
     09 — TIC TAC TOE
     ========================================================= */

  {
    id: "09",
    featured: false,
    title: "Tic Tac Toe",
    category: "JavaScript • Game Development",
    status: "PROJECT",
    role: "Developer",

    icon: Gamepad2,

    description:
      "A responsive two-player browser game demonstrating JavaScript logic, DOM interaction and game-state handling.",

    problem:
      "Build a simple interactive game while practicing DOM manipulation, logical conditions and state management.",

    solution:
      "Implemented player turns, winner detection, draw handling and restart functionality.",

    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "DOM",
      "Game Logic",
    ],

    features: [
      "Two-player gameplay",
      "Winner detection",
      "Draw detection",
      "Player turns",
      "Restart functionality",
      "Responsive design",
    ],

    proof: [
      "JavaScript",
      "DOM",
      "Game Logic",
    ],

    github:
      "https://github.com/samirlevate8788-creator",
  },
];

/* =========================================================
   PROJECT STATS
   ========================================================= */

const stats = [
  ["09", "Projects"],
  ["03", "Cybersecurity Flagships"],
  ["05+", "Technical Domains"],
  ["01", "Open-source OS"],
];

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function Projects() {
  const flagship = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  return (
    <main className="projects-page" id="projects">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="projects-hero">

        <div className="projects-container">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <p className="section-eyebrow">
              04 / PROJECTS
            </p>

            <h1>
              Projects that
              <span> prove the work.</span>
            </h1>

            <p className="projects-hero-text">
              A growing portfolio of software engineering,
              cybersecurity, systems, AI, web and interactive
              technology projects.
            </p>

          </motion.div>


          <div className="project-stats">

            {stats.map(([number, label]) => (

              <div key={label}>

                <strong>
                  {number}
                </strong>

                <span>
                  {label}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CYBERSECURITY / FLAGSHIP
          ===================================================== */}

      <section className="featured-projects">

        <div className="projects-container">

          <div className="projects-heading">

            <div>

              <p className="section-eyebrow">
                01 / FLAGSHIP BUILDS
              </p>

              <h2>
                Engineering
                <span> in depth.</span>
              </h2>

            </div>

            <p>
              Security, systems and software projects with
              the strongest combination of ownership,
              technical depth and engineering scope.
            </p>

          </div>


          <div className="featured-grid">

            {flagship.map((project, index) => (

              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          COMPLETE ARCHIVE
          ===================================================== */}

      <section className="all-projects">

        <div className="projects-container">

          <div className="projects-heading">

            <div>

              <p className="section-eyebrow">
                02 / COMPLETE ARCHIVE
              </p>

              <h2>
                Everything
                <span> I've built.</span>
              </h2>

            </div>

            <p>
              Practical applications, experiments and
              projects demonstrating different parts of
              my technical journey.
            </p>

          </div>


          <div className="project-list">

            {archive.map((project, index) => (

              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGINEERING PROCESS
          ===================================================== */}

      <section className="project-process">

        <div className="projects-container">

          <div className="process-card">

            <div>

              <p className="section-eyebrow">
                03 / ENGINEERING PROCESS
              </p>

              <h2>
                Think.
                <br />
                <span>Build. Test. Ship.</span>
              </h2>

            </div>


            <div className="process-steps">

              <ProcessStep
                icon={<Layers3 size={20} />}
                number="01"
                title="Understand"
                text="Define the problem, users and technical requirements."
              />

              <ProcessStep
                icon={<Code2 size={20} />}
                number="02"
                title="Build"
                text="Turn the idea into maintainable software and working systems."
              />

              <ProcessStep
                icon={<ShieldCheck size={20} />}
                number="03"
                title="Test"
                text="Validate functionality, reliability and security-oriented behavior."
              />

              <ProcessStep
                icon={<Terminal size={20} />}
                number="04"
                title="Ship"
                text="Deploy, document and continuously improve the result."
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({
  project,
  index,
  featured = false,
}) {

  const Icon = project.icon;

  return (

    <motion.article

      className={`project-card ${
        featured ? "featured-card" : ""
      }`}

      initial={{
        opacity: 0,
        y: 30,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.15,
      }}

      transition={{
        duration: 0.55,
        delay: index * 0.06,
      }}

    >

      {/* TOP */}

      <div className="project-card-top">

        <div className="project-id">
          {project.id}
        </div>

        <span className="project-status">
          {project.status}
        </span>

      </div>


      {/* ICON */}

      <div className="project-icon">
        <Icon size={23} />
      </div>


      {/* CATEGORY */}

      <p className="project-category">
        {project.category}
      </p>


      {/* TITLE */}

      <h3>
        {project.title}
      </h3>


      {/* ROLE */}

      <p className="project-role">
        {project.role}
      </p>


      {/* DESCRIPTION */}

      <p className="project-description">
        {project.description}
      </p>


      {/* PROOF */}

      <div className="project-proof">

        {project.proof.map((item) => (

          <span key={item}>
            ✓ {item}
          </span>

        ))}

      </div>


      <div className="project-divider" />


      {/* CASE STUDY */}

      <div className="project-case-study">

        <div>

          <span>
            PROBLEM
          </span>

          <p>
            {project.problem}
          </p>

        </div>


        <div>

          <span>
            SOLUTION
          </span>

          <p>
            {project.solution}
          </p>

        </div>

      </div>


      {/* FEATURES */}

      <div className="project-features">

        <span>
          KEY FEATURES
        </span>

        <div>

          {project.features.map((feature) => (

            <span key={feature}>
              {feature}
            </span>

          ))}

        </div>

      </div>


      {/* TECH STACK */}

      <div className="project-tech">

        {project.stack.map((technology) => (

          <span key={technology}>
            {technology}
          </span>

        ))}

      </div>


      {/* LINKS */}

      <div className="project-actions">

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-link primary-project-link"
        >
          GitHub
          <ArrowUpRight size={16} />
        </a>


        {project.demo && (

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            Live Demo
            <ExternalLink size={15} />
          </a>

        )}


        {project.api && (

          <a
            href={project.api}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            API Docs
            <ExternalLink size={15} />
          </a>

        )}

      </div>

    </motion.article>
  );
}


/* =========================================================
   PROCESS STEP
   ========================================================= */

function ProcessStep({
  icon,
  number,
  title,
  text,
}) {

  return (

    <div className="process-step">

      <div className="process-icon">
        {icon}
      </div>

      <div>

        <span>
          {number}
        </span>

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

    </div>
  );
}
