import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming & Computer Science",
    subtitle: "Engineering Foundation",
    level: "Core",
    skills: [
      "C",
      "C++",
      "Python",
      "JavaScript",
      "PHP",
      "C#",
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "DBMS",
      "Operating Systems",
    ],
  },

  {
    title: "Full-Stack Engineering",
    subtitle: "Building Production Applications",
    level: "Active",
    skills: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Laravel",
      "REST APIs",
      "MySQL",
      "SQLite",
      "SQLAlchemy",
      "Authentication",
      "API Integration",
      "Responsive Design",
    ],
  },

  {
    title: "Linux & Systems",
    subtitle: "Systems Engineering",
    level: "Active",
    skills: [
      "Linux",
      "Ubuntu",
      "Linux Command Line",
      "Operating Systems",
      "Kernel Concepts",
      "Memory Management",
      "File Systems",
      "Shell Concepts",
      "Systems Programming",
      "Assembly",
      "NASM",
      "GCC",
      "QEMU",
      "Make",
    ],
  },

  {
    title: "Cybersecurity",
    subtitle: "Defensive & Ethical Security",
    level: "Building",
    skills: [
      "Cybersecurity Fundamentals",
      "Ethical Hacking",
      "Networking",
      "TCP/IP",
      "OSI Model",
      "Web Security",
      "OWASP Concepts",
      "API Security",
      "Secure Coding",
      "Authorized Network Reconnaissance",
      "Nmap",
      "Python Sockets",
      "Host / Port / Service Discovery",
      "Password Analysis",
      "Entropy Estimates",
      "Security Findings & Risk Scoring",
      "API Health Monitoring",
      "Authentication",
      "Authorization",
      "Security Testing",
      "Security Automation",
    ],
  },

  {
    title: "AI & Data",
    subtitle: "Artificial Intelligence",
    level: "Building",
    skills: [
      "Artificial Intelligence",
      "Machine Learning Fundamentals",
      "Knowledge Representation",
      "Reasoning",
      "AI-Assisted Development",
      "AI Tools",
      "Prompting",
      "Python for AI",
      "Data Analysis",
      "Statistics Fundamentals",
    ],
  },

  {
    title: "Developer Tools",
    subtitle: "Engineering Workflow",
    level: "Core",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "GitHub Pages",
      "API Development",
      "Testing",
      "Pytest",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Render",
      "Deployment",
    ],
  },

  {
    title: "Game Development",
    subtitle: "Interactive Systems",
    level: "Building",
    skills: [
      "Unity",
      "C#",
      "3D Game Systems",
      "Physics Concepts",
      "Android Targets",
      "PC Targets",
    ],
  },

  {
    title: "Creative & Media",
    subtitle: "Visual Storytelling",
    level: "Active",
    skills: [
      "Video Editing",
      "Basic Animation",
      "Motion Graphics",
      "Visual Storytelling",
      "Short-Form Content",
      "Thumbnail & Visual Design",
      "Presentation Design",
      "Digital Content Creation",
    ],
  },

  {
    title: "Professional",
    subtitle: "Communication & Collaboration",
    level: "Core",
    skills: [
      "Technical Writing",
      "Content Writing",
      "Copywriting",
      "Time Management",
      "Communication",
      "Collaboration",
      "Networking",
      "Leadership",
    ],
  },
];

const advancedSkills = [
  {
    number: "01",
    title: "Cloud & DevOps",
    description:
      "Moving from local development toward production infrastructure and reliable deployment workflows.",
    technologies: [
      "Docker",
      "Containerization",
      "AWS",
      "Azure",
      "GCP",
      "CI/CD",
      "DevOps",
      "Monitoring",
      "Logging",
    ],
  },

  {
    number: "02",
    title: "Advanced Backend Engineering",
    description:
      "Building scalable APIs, authentication systems and production-ready backend architectures.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "API Security",
      "Testing",
      "Scalable APIs",
    ],
  },

  {
    number: "03",
    title: "System Design",
    description:
      "Learning how real-world software systems are designed for reliability, scalability and maintainability.",
    technologies: [
      "System Design",
      "Scalable Architecture",
      "Database Design",
      "Caching",
      "Load Balancing",
      "Microservices",
      "Distributed Systems",
      "Production Practices",
    ],
  },

  {
    number: "04",
    title: "Advanced Cybersecurity",
    description:
      "Developing security knowledge through authorized labs, defensive engineering and security-focused projects.",
    technologies: [
      "Web Security",
      "OWASP Top 10",
      "API Security",
      "Penetration Testing",
      "Security Automation",
      "Vulnerability Analysis",
      "Incident Response",
      "CTF Learning",
      "Security Writeups",
    ],
  },
];

const learningRoadmap = [
  {
    phase: "NOW",
    title: "Job-Ready Engineering",
    items: [
      "DSA",
      "JavaScript",
      "React",
      "Backend Development",
      "SQL",
      "Git & GitHub",
      "Linux",
      "Projects",
    ],
  },

  {
    phase: "NEXT",
    title: "Advanced Development",
    items: [
      "Node.js",
      "Express.js",
      "Docker",
      "Cloud",
      "CI/CD",
      "Testing",
      "System Design",
    ],
  },

  {
    phase: "SPECIALIZE",
    title: "Security Engineering",
    items: [
      "Networking",
      "OWASP",
      "Web Security",
      "API Security",
      "Secure Coding",
      "Security Labs",
      "Security Automation",
    ],
  },

  {
    phase: "EXPAND",
    title: "AI + Systems + Open Source",
    items: [
      "Machine Learning",
      "Linux Internals",
      "Operating Systems",
      "Open Source",
      "Systems Programming",
      "Advanced Projects",
    ],
  },
];

export default function Skills() {
  return (
    <main className="skills-page" id="skills">
      {/* =========================
          HEADER
      ========================== */}
      <section className="skills-hero">
        <motion.div
          className="skills-hero-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow">
            TECHNICAL PROFILE
          </p>

          <h1>
            Skills that
            <span> build real systems.</span>
          </h1>

          <p>
            My technical journey combines software engineering, full-stack
            development, Linux, cybersecurity, artificial intelligence and
            open-source technology.
          </p>
        </motion.div>
      </section>

      {/* =========================
          SKILL MATRIX
      ========================== */}
      <section className="skills-section">
        <div className="skills-container">

          <div className="skills-section-heading">
            <div>
              <p className="section-eyebrow">01 / FOUNDATION</p>
              <h2>Technical Skill Matrix</h2>
            </div>

            <p>
              A structured view of the technologies and engineering concepts
              currently used, practiced or actively developed.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.article
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                <div className="skill-card-top">
                  <div>
                    <span className="skill-number">
                      0{index + 1}
                    </span>

                    <h3>{group.title}</h3>

                    <p>{group.subtitle}</p>
                  </div>

                  <span className="skill-level">
                    {group.level}
                  </span>
                </div>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          ADVANCED ENGINEERING
      ========================== */}
      <section className="advanced-section">
        <div className="skills-container">

          <div className="skills-section-heading">
            <div>
              <p className="section-eyebrow">
                02 / ADVANCED TRACK
              </p>

              <h2>
                Where I'm
                <span> heading next.</span>
              </h2>
            </div>

            <p>
              The next layer of my engineering roadmap focuses on production
              systems, cloud infrastructure, security engineering and scalable
              architecture.
            </p>
          </div>

          <div className="advanced-grid">
            {advancedSkills.map((item, index) => (
              <motion.article
                className="advanced-card"
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <div className="advanced-number">
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="advanced-tech">
                  {item.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CAREER ROADMAP
      ========================== */}
      <section className="roadmap-section">
        <div className="skills-container">

          <div className="skills-section-heading">
            <div>
              <p className="section-eyebrow">
                03 / LEARNING ROADMAP
              </p>

              <h2>
                Learn.
                <span> Build. Specialize.</span>
              </h2>
            </div>

            <p>
              A practical progression from strong engineering fundamentals
              toward advanced software and security roles.
            </p>
          </div>

          <div className="roadmap">
            {learningRoadmap.map((stage, index) => (
              <motion.div
                className="roadmap-item"
                key={stage.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="roadmap-marker">
                  <span>{index + 1}</span>
                </div>

                <div className="roadmap-content">
                  <div className="roadmap-title">
                    <span>{stage.phase}</span>
                    <h3>{stage.title}</h3>
                  </div>

                  <div className="roadmap-skills">
                    {stage.items.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          ENGINEERING PHILOSOPHY
      ========================== */}
      <section className="skills-philosophy">
        <div className="skills-container">
          <motion.div
            className="philosophy-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow">
              ENGINEERING APPROACH
            </p>

            <h2>
              Skills are useful.
              <br />
              <span>Proof is stronger.</span>
            </h2>

            <p>
              I focus on turning what I learn into working projects,
              documentation, experiments and real engineering experience.
              Certificates support the profile, but projects and
              problem-solving demonstrate the skill.
            </p>

            <div className="philosophy-points">
              <span>Learn</span>
              <span>→</span>
              <span>Build</span>
              <span>→</span>
              <span>Test</span>
              <span>→</span>
              <span>Deploy</span>
              <span>→</span>
              <span>Improve</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
