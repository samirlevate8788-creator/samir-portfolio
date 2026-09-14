import { ArrowUpRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const tags = [
  "Software Engineering",
  "Cybersecurity",
  "AI & Technology",
  "Open Source",
];

export default function Home() {
  return (
    <main>
      {/* =========================
          HERO
      ========================== */}
      <section className="hero" id="home">
        <div className="hero-content">

          {/* STATUS */}
          <motion.div
            className="status"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span />
            Building & Exploring Technology
          </motion.div>

          {/* EYEBROW */}
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            SOFTWARE ENGINEERING • CYBERSECURITY • AI
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm
            <span>Samir Levate.</span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I build software,
            <br />
            explore security & technology.
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A Computer Science & Engineering student focused on software
            development, cybersecurity, artificial intelligence, systems and
            open-source technology.
          </motion.p>

          {/* ACTIONS */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >

            {/* PROJECTS */}
            <a href="#projects" className="primary-btn">
              Explore My Work
              <ArrowUpRight size={17} />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/samirlevate8788-creator"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              <span className="social-icon github-icon">
                GH
              </span>
              GitHub
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/samir-levate-a2647a357"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              <span className="social-icon linkedin-icon">
                in
              </span>
              LinkedIn
            </a>

          </motion.div>

          {/* TAGS */}
          <motion.div
            className="hero-tags"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </motion.div>

        </div>

        {/* =========================
            TERMINAL VISUAL
        ========================== */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >

          {/* GRID */}
          <div className="grid" />

          {/* TERMINAL */}
          <div className="terminal">

            {/* TERMINAL TOP */}
            <div className="terminal-top">

              <div className="terminal-dots">
                <i />
                <i />
                <i />
              </div>

              <span>
                <Terminal size={13} />
                samir@portfolio
              </span>

            </div>

            {/* TERMINAL BODY */}
            <div className="terminal-body">

              <p>
                <b>$</b> whoami
              </p>

              <p className="green">
                samir-levate
              </p>

              <p>
                <b>$</b> role
              </p>

              <p className="blue">
                software_engineer
                <br />
                security_enthusiast
                <br />
                technology_builder
              </p>

              <p>
                <b>$</b> interests
              </p>

              <p className="purple">
                AI / Linux / Open Source / Security
              </p>

              <p>
                <b>$</b> status
              </p>

              <p className="green">
                building...
              </p>

              <p className="cursor-line">
                <b>$</b> _
              </p>

            </div>
          </div>

          {/* ORBITS */}
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

        </motion.div>
      </section>

      {/* =========================
          IDENTITY STRIP
      ========================== */}
      <section className="identity-strip">

        <div>
          <strong>SOFTWARE</strong>
          <span>Engineering</span>
        </div>

        <div>
          <strong>SECURITY</strong>
          <span>Cybersecurity</span>
        </div>

        <div>
          <strong>AI</strong>
          <span>Artificial Intelligence</span>
        </div>

        <div>
          <strong>OSS</strong>
          <span>Open Source</span>
        </div>

      </section>
    </main>
  );
}
