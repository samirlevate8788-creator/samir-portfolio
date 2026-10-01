import { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

import Navbar from "./components/Navbar";
import CyberBackdrop from "./components/CyberBackdrop";
import SocialIcon from "./components/SocialIcon";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Experience from "./pages/Experience";
import OpenSource from "./pages/OpenSource";
import Articles from "./pages/Articles";
import Education from "./pages/Education";
import Achievements from "./pages/Achievements";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import "./styles/global.css";
import "./styles/articles.css";
import "./styles/education.css";
import "./styles/achievements.css";
import "./styles/resume.css";
import "./styles/contact.css";
import "./styles/cyber.css";

const pageTitles = {
  "/": "Samir Levate // Portfolio",
  "/about": "About // Samir Levate",
  "/skills": "Skills // Samir Levate",
  "/projects": "Projects // Samir Levate",
  "/experience": "Experience // Samir Levate",
  "/certifications": "Certifications // Samir Levate",
  "/open-source": "Open source // Samir Levate",
  "/articles": "Writing // Samir Levate",
  "/education": "Education // Samir Levate",
  "/achievements": "Achievements // Samir Levate",
  "/resume": "Resume // Samir Levate",
  "/contact": "Contact // Samir Levate",
};

function RouteStage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pageTitles[location.pathname] || pageTitles["/"];
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className="route-stage"
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/education" element={<Education />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Link className="footer-brand" to="/" aria-label="Samir Levate home">
          SL<span>//</span>
        </Link>
        <p className="footer-note">
          Build. Learn. Secure. Share.
          <span> A student developer exploring systems and defensive security.</span>
        </p>
        <nav className="footer-links" aria-label="Social links">
          <a href="https://github.com/samirlevate8788-creator" target="_blank" rel="noreferrer" aria-label="GitHub">
            <SocialIcon name="github" size={17} />
          </a>
          <a href="https://www.linkedin.com/in/samir-levate/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <SocialIcon name="linkedin" size={17} />
          </a>
          <a href="mailto:sameerlewate8788@gmail.com" aria-label="Email">
            <Mail size={17} />
          </a>
          <Link to="/contact" aria-label="Contact page">
            <ArrowUpRight size={17} />
          </Link>
        </nav>
        <small>© {new Date().getFullYear()} Samir Levate</small>
      </div>
    </footer>
  );
}

function SiteFrame() {
  return (
    <div className="cyber-site">
      <CyberBackdrop />
      <div className="cyber-grid-overlay" aria-hidden="true" />
      <Navbar />
      <RouteStage />
      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteFrame />
    </BrowserRouter>
  );
}
