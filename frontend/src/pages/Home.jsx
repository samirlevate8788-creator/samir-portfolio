import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Mail,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import SocialIcon from "../components/SocialIcon";

const focusAreas = ["Full-stack", "Defensive security", "AI & systems", "Open source"];

export default function Home() {
  return (
    <main className="home-page">
      <div className="home-shell">
        <section className="home-hero" aria-labelledby="home-title">
          <motion.div
            className="home-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="home-presence">
              <span className="presence-dot" />
              <span>AVAILABLE FOR INTERNSHIPS</span>
              <span className="presence-divider">//</span>
              <span>BUILDING ASTRAOS</span>
            </div>

            <p className="home-command"><span>$</span> whoami</p>
            <h1 id="home-title">
              Samir
              <span>Levate<span className="title-cursor">_</span></span>
            </h1>
            <p className="home-role">SOFTWARE DEVELOPER <i>·</i> SECURITY-MINDED BUILDER</p>
            <p className="home-summary">
              B.Tech CSE student turning what I learn into useful software—from
              full-stack products and defensive security tools to Linux systems
              and open-source projects.
            </p>

            <div className="home-actions">
              <Link to="/projects" className="cyber-button cyber-button-primary">
                Explore projects <ArrowUpRight size={17} />
              </Link>
              <Link to="/about" className="cyber-button cyber-button-quiet">
                About me <ArrowDownRight size={17} />
              </Link>
            </div>

            <div className="home-socials" aria-label="Social profiles">
              <a href="https://github.com/samirlevate8788-creator" target="_blank" rel="noreferrer">
                <SocialIcon name="github" size={16} /> <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/samir-levate/" target="_blank" rel="noreferrer">
                <SocialIcon name="linkedin" size={16} /> <span>LinkedIn</span>
              </a>
              <a href="mailto:sameerlewate8788@gmail.com">
                <Mail size={16} /> <span>Email</span>
              </a>
            </div>

            <div className="home-focus-row" aria-label="Areas of focus">
              {focusAreas.map((area) => <span key={area}>{area}</span>)}
            </div>
          </motion.div>

          <motion.div
            className="home-visual"
            initial={{ opacity: 0, scale: 0.97, x: 14 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          >
            <div className="visual-index"><span>FIG. 01</span><span>PROFILE // 2026</span></div>

            <div className="portrait-window">
              <div className="portrait-window-bar">
                <div className="window-lights"><i /><i /><i /></div>
                <span>samir-levate/profile.png</span>
                <span className="window-lock"><ShieldCheck size={14} /> PUBLIC</span>
              </div>
              <div className="portrait-image-wrap">
                <img
                  className="portrait-image"
                  src="/images/samir-linkedin-portrait.png"
                  alt="Samir Levate at a developer workspace"
                  fetchPriority="high"
                />
                <div className="portrait-image-shade" />
                <div className="portrait-corner portrait-corner-tl" />
                <div className="portrait-corner portrait-corner-br" />
                <div className="portrait-label">
                  <span className="presence-dot" /> PROFILE ACTIVE
                </div>
                <div className="portrait-nameplate">
                  <span>BUILD // LEARN // REPEAT</span>
                  <strong>SAMIR LEVATE</strong>
                </div>
              </div>
            </div>

            <div className="visual-bottom-row">
              <div className="terminal-window" aria-label="Developer terminal illustration">
                <div className="terminal-window-top">
                  <span><Terminal size={13} /> session.sh</span>
                  <span className="terminal-live"><i /> LIVE</span>
                </div>
                <div className="terminal-window-body">
                  <p><b>$</b> focus --now</p>
                  <p className="terminal-output"><Code2 size={13} /> software · security · systems</p>
                  <p><b>$</b> status <span className="terminal-ready">building<span className="blink-cursor">_</span></span></p>
                </div>
              </div>

              <Link className="reel-window" to="/projects" aria-label="See the project showcase">
                <img src="/images/project-reel.gif" alt="Animated AegisOne project dashboard preview" />
                <span className="reel-caption">PROJECT REEL <ArrowUpRight size={13} /></span>
              </Link>
            </div>

            <img
              className="github-portrait-stamp"
              src="/images/samir-github-profile.jpg"
              alt="Samir Levate's GitHub profile portrait"
              loading="lazy"
            />
            <div className="visual-coordinate">AMRAVATI, INDIA</div>
          </motion.div>
        </section>

        <div className="home-bottomline">
          <span>01 / 12 PAGES</span>
          <span>MULTI-PAGE PORTFOLIO <i>·</i> USE THE NAV TO EXPLORE</span>
          <span>INDIA <i>·</i> BUILDING IN PUBLIC</span>
        </div>
      </div>
    </main>
  );
}
