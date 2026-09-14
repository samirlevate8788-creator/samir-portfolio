import { motion } from "framer-motion";

const focusAreas = [
  {
    number: "01",
    title: "Software Engineering",
    text: "Building practical software with strong programming, problem-solving and engineering fundamentals.",
  },
  {
    number: "02",
    title: "Full-Stack Development",
    text: "Developing responsive applications and gradually moving toward production-ready backend, API and database systems.",
  },
  {
    number: "03",
    title: "Cybersecurity",
    text: "Exploring Linux, networking, web security, secure coding and authorized security testing.",
  },
  {
    number: "04",
    title: "AI & Technology",
    text: "Learning artificial intelligence and applying AI tools and concepts where they strengthen real projects.",
  },
  {
    number: "05",
    title: "Linux & Systems",
    text: "Exploring operating systems, kernel concepts, memory, filesystems and systems programming through AstraOS.",
  },
  {
    number: "06",
    title: "Open Source",
    text: "Building AstraOS as an educational open-source initiative and learning through collaborative development.",
  },
];

const engineeringStack = [
  "C / C++",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "REST APIs",
  "MySQL",
  "Linux",
  "Git",
  "GitHub",
  "AI",
  "Cybersecurity",
];

export default function About() {
  return (
    <main className="about-page" id="about">

      {/* =========================
          ABOUT HERO
      ========================== */}
      <section className="about-hero">
        <div className="about-container">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow">
              01 / ABOUT
            </p>

            <h1>
              Engineering is
              <span> more than code.</span>
            </h1>

            <p className="about-intro">
              I'm Samir Levate, a Computer Science & Engineering student
              focused on building real software, understanding how systems
              work and continuously developing skills across software
              engineering, cybersecurity, AI and open source.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =========================
          PROFILE
      ========================== */}
      <section className="about-profile">
        <div className="about-container about-profile-grid">

          {/* LEFT */}
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow">
              THE ENGINEER
            </p>

            <h2>
              Learn the technology.
              <br />
              <span>Then build with it.</span>
            </h2>

            <p>
              My approach is simple: learn a technology, understand the
              fundamentals behind it, build something practical and improve
              through experimentation.
            </p>

            <p>
              My current journey combines programming, web development,
              Linux, artificial intelligence, cybersecurity and open-source
              development.
            </p>

            <p>
              I'm particularly interested in understanding both sides of
              software — building applications and understanding the systems
              underneath them.
            </p>
          </motion.div>

          {/* RIGHT ENGINEERING CARD */}
          <motion.div
            className="engineering-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="engineering-card-top">
              <span>ENGINEERING PROFILE</span>
              <span>2026 →</span>
            </div>

            <div className="engineering-terminal">
              <p>
                <b>$</b> profile --current
              </p>

              <p className="terminal-green">
                software_engineering
              </p>

              <p>
                <b>$</b> focus
              </p>

              <p className="terminal-blue">
                full_stack
                <br />
                cybersecurity
                <br />
                artificial_intelligence
                <br />
                linux_systems
                <br />
                open_source
              </p>

              <p>
                <b>$</b> objective
              </p>

              <p className="terminal-purple">
                build → learn → improve
              </p>

              <p>
                <b>$</b> status
              </p>

              <p className="terminal-green">
                actively_building
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================
          FOCUS AREAS
      ========================== */}
      <section className="about-focus">
        <div className="about-container">

          <div className="about-section-heading">
            <div>
              <p className="section-eyebrow">
                02 / FOCUS AREAS
              </p>

              <h2>
                What I'm
                <span> building toward.</span>
              </h2>
            </div>

            <p>
              A multidisciplinary engineering path connecting application
              development, systems, security and emerging technology.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <motion.article
                className="focus-card"
                key={area.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                <span className="focus-number">
                  {area.number}
                </span>

                <h3>{area.title}</h3>

                <p>{area.text}</p>

                <span className="focus-arrow">
                  ↗
                </span>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* =========================
          CURRENT STACK
      ========================== */}
      <section className="about-stack">
        <div className="about-container">

          <div className="stack-card">

            <div className="stack-heading">
              <div>
                <p className="section-eyebrow">
                  03 / CURRENT STACK
                </p>

                <h2>
                  Technologies
                  <span> I work with.</span>
                </h2>
              </div>

              <p>
                A snapshot of the technologies currently forming my
                engineering foundation.
              </p>
            </div>

            <div className="engineering-stack">
              {engineeringStack.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          CAREER DIRECTION
      ========================== */}
      <section className="career-direction">
        <div className="about-container">

          <motion.div
            className="career-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="section-eyebrow">
                04 / CAREER DIRECTION
              </p>

              <h2>
                From student
                <br />
                <span>to software engineer.</span>
              </h2>
            </div>

            <div className="career-path">

              <div>
                <strong>01</strong>
                <span>Strong CS Fundamentals</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Real-World Projects</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Advanced Engineering</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Security Specialization</span>
              </div>

              <div>
                <strong>05</strong>
                <span>Professional Experience</span>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
