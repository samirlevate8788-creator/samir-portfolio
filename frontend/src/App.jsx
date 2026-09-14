import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Terminal } from "lucide-react";

/* =========================================================
   PAGE / SECTION IMPORTS
   ========================================================= */

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

/* =========================================================
   STYLES
   ========================================================= */

import "./styles/global.css";
import "./styles/articles.css";
import "./styles/education.css";
import "./styles/achievements.css";
import "./styles/resume.css";
import "./styles/contact.css";

/*
  IMPORTANT:
  Footer styles are intentionally NOT imported here.
  The footer below uses isolated inline layout styles so
  broad global selectors cannot break it.
*/

/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage =
        scrollHeight > 0
          ? (scrollTop / scrollHeight) * 100
          : 0;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "2px",
        zIndex: 99999,
        background:
          "linear-gradient(90deg, #ffffff, #8b8b8b)",
        transition: "width 0.08s linear",
        pointerEvents: "none",
      }}
    />
  );
}

/* =========================================================
   BACK TO TOP
   ========================================================= */

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.16)",
        background: "rgba(10,10,10,0.92)",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 9990,
        boxShadow: "0 10px 35px rgba(0,0,0,0.35)",
        backdropFilter: "blur(12px)",
      }}
    >
      <ArrowUp size={18} />
    </button>
  );
}

/* =========================================================
   FOOTER
   ========================================================= */

function SiteFooter() {
  const year = new Date().getFullYear();

  const linkStyle = {
    color: "#777",
    textDecoration: "none",
    fontSize: "14px",
    lineHeight: "1.6",
    transition: "color 0.2s ease",
  };

  const socialStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.025)",
    color: "#aaa",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: 600,
  };

  return (
    <footer
      id="site-footer"
      style={{
        width: "100%",
        marginTop: "100px",
        background: "#050505",
        color: "#ffffff",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
      }}
    >
      {/* ===================================================
          FOOTER INNER
      =================================================== */}

      <section
        style={{
          width: "min(1180px, calc(100% - 40px))",
          margin: "0 auto",
          padding: "70px 0 25px",
        }}
      >

        {/* =================================================
            TOP AREA
        ================================================= */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(0, 1.5fr) minmax(220px, 0.8fr) minmax(180px, 0.7fr)",
            gap: "60px",
            alignItems: "start",
          }}
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <article
            style={{
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >

            {/* LOGO */}

            <span
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "13px",
                border:
                  "1px solid rgba(255,255,255,0.18)",
                background:
                  "linear-gradient(145deg,#151515,#070707)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              SL
            </span>

            {/* NAME + ROLE */}

            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "7px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "24px",
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Samir Levate
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}
              >
                Software Engineering • AI • Cybersecurity •
                Open Source
              </p>
            </section>

            {/* DESCRIPTION */}

            <p
              style={{
                margin: 0,
                maxWidth: "470px",
                color: "#777",
                fontSize: "14px",
                lineHeight: 1.8,
              }}
            >
              Building practical software, exploring systems,
              learning cybersecurity and creating technology
              that solves real-world problems.
            </p>

            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <nav
              aria-label="Social links"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "10px",
                marginTop: "4px",
              }}
            >

              <a
                href="https://github.com/samirlevate8788-creator"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={socialStyle}
              >
                GH
              </a>

              <a
                href="https://www.linkedin.com/in/samir-levate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={socialStyle}
              >
                in
              </a>

              <a
                href="mailto:sameerlewate8788@gmail.com"
                aria-label="Email"
                style={socialStyle}
              >
                @
              </a>

              <a
                href="tel:+918788696321"
                aria-label="Phone"
                style={socialStyle}
              >
                ☎
              </a>

              <a
                href="#resume"
                aria-label="Resume"
                style={socialStyle}
              >
                CV
              </a>

            </nav>

            {/* =================================================
                OPPORTUNITY STATUS
            ================================================= */}

            <aside
              style={{
                width: "100%",
                maxWidth: "430px",
                marginTop: "8px",
                padding: "16px 18px",
                border:
                  "1px solid rgba(255,255,255,0.09)",
                borderRadius: "14px",
                background:
                  "rgba(255,255,255,0.025)",
              }}
            >

              <section
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "8px",
                }}
              >

                <span
                  aria-hidden="true"
                  style={{
                    width: "8px",
                    height: "8px",
                    minWidth: "8px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    boxShadow:
                      "0 0 12px rgba(255,255,255,0.45)",
                  }}
                />

                <strong
                  style={{
                    fontSize: "14px",
                    color: "#eee",
                  }}
                >
                  Open to Opportunities
                </strong>

              </section>

              <p
                style={{
                  margin: 0,
                  color: "#666",
                  fontSize: "12px",
                  lineHeight: 1.6,
                }}
              >
                LET'S BUILD SOMETHING AMAZING
              </p>

            </aside>

          </article>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <nav
            aria-label="Explore"
            style={{
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >

            <h3
              style={{
                margin: 0,
                color: "#eee",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Explore
            </h3>

            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >

              <a href="#home" style={linkStyle}>
                Home
              </a>

              <a href="#about" style={linkStyle}>
                About
              </a>

              <a href="#skills" style={linkStyle}>
                Skills
              </a>

              <a href="#projects" style={linkStyle}>
                Projects
              </a>

              <a
                href="#certifications"
                style={linkStyle}
              >
                Certifications
              </a>

            </section>

          </nav>

          {/* =================================================
              MORE
          ================================================= */}

          <nav
            aria-label="More"
            style={{
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >

            <h3
              style={{
                margin: 0,
                color: "#eee",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              More
            </h3>

            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >

              <a
                href="#experience"
                style={linkStyle}
              >
                Experience
              </a>

              <a
                href="#opensource"
                style={linkStyle}
              >
                Open Source
              </a>

              <a
                href="#articles"
                style={linkStyle}
              >
                Articles
              </a>

              <a
                href="#education"
                style={linkStyle}
              >
                Education
              </a>

              <a
                href="#achievements"
                style={linkStyle}
              >
                Achievements
              </a>

              <a
                href="#contact"
                style={linkStyle}
              >
                Contact
              </a>

            </section>

          </nav>

        </section>

        {/* =================================================
            BOTTOM DIVIDER
        ================================================= */}

        <div
          style={{
            width: "100%",
            height: "1px",
            background:
              "rgba(255,255,255,0.07)",
            marginTop: "65px",
          }}
        />

        {/* =================================================
            BOTTOM ROW
        ================================================= */}

        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "25px",
            paddingTop: "24px",
            flexWrap: "wrap",
          }}
        >

          {/* COPYRIGHT */}

          <p
            style={{
              margin: 0,
              color: "#666",
              fontSize: "13px",
              lineHeight: 1.6,
            }}
          >
            © {year} Samir Levate. All rights reserved.
          </p>

          {/* CENTER */}

          <p
            style={{
              margin: 0,
              color: "#555",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            TURNING IDEAS INTO IMPACT
          </p>

          {/* RIGHT */}

          <p
            style={{
              margin: 0,
              color: "#555",
              fontSize: "12px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            BUILT WITH REACT • ALWAYS LEARNING
          </p>

        </section>

        {/* =================================================
            FINAL NAV
        ================================================= */}

        <nav
          aria-label="Footer links"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "28px",
          }}
        >

          <a
            href="#home"
            style={{
              ...linkStyle,
              fontSize: "12px",
            }}
          >
            Home
          </a>

          <span
            style={{
              color: "#333",
            }}
          >
            •
          </span>

          <a
            href="#projects"
            style={{
              ...linkStyle,
              fontSize: "12px",
            }}
          >
            Projects
          </a>

          <span
            style={{
              color: "#333",
            }}
          >
            •
          </span>

          <a
            href="#resume"
            style={{
              ...linkStyle,
              fontSize: "12px",
            }}
          >
            Resume
          </a>

          <span
            style={{
              color: "#333",
            }}
          >
            •
          </span>

          <a
            href="#contact"
            style={{
              ...linkStyle,
              fontSize: "12px",
            }}
          >
            Contact
          </a>

        </nav>

      </section>

      {/* =================================================
          MOBILE OVERRIDE
          Uses CSS media query but DOES NOT affect layout
          selectors from global.css.
      ================================================= */}

      <style>
        {`
          @media (max-width: 850px) {
            #site-footer > section > section:first-child {
              grid-template-columns: 1fr 1fr !important;
              gap: 45px !important;
            }

            #site-footer > section > section:first-child > article {
              grid-column: 1 / -1;
            }
          }

          @media (max-width: 600px) {
            #site-footer > section {
              width: calc(100% - 30px) !important;
              padding-top: 55px !important;
            }

            #site-footer > section > section:first-child {
              grid-template-columns: 1fr !important;
              gap: 35px !important;
            }

            #site-footer > section > section:first-child > article {
              grid-column: auto !important;
            }

            #site-footer > section > section:nth-of-type(3) {
              flex-direction: column !important;
              align-items: flex-start !important;
            }
          }

          #site-footer a:hover {
            color: #ffffff !important;
          }
        `}
      </style>
    </footer>
  );
}

/* =========================================================
   MAIN APP
   ========================================================= */

function App() {
  return (
    <>
      {/* GLOBAL UI */}

      <ScrollProgress />

      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <main>

        {/* HOME */}

        <section id="home">
          <Home />
        </section>

        {/* ABOUT */}

        <section id="about">
          <About />
        </section>

        {/* SKILLS */}

        <section id="skills">
          <Skills />
        </section>

        {/* PROJECTS */}

        <section id="projects">
          <Projects />
        </section>

        {/* CERTIFICATIONS */}

        <section id="certifications">
          <Certifications />
        </section>

        {/* EXPERIENCE */}

        <section id="experience">
          <Experience />
        </section>

        {/* OPEN SOURCE */}

        <section id="opensource">
          <OpenSource />
        </section>

        {/* ARTICLES */}

        <section id="articles">
          <Articles />
        </section>

        {/* EDUCATION */}

        <section id="education">
          <Education />
        </section>

        {/* ACHIEVEMENTS */}

        <section id="achievements">
          <Achievements />
        </section>

        {/* RESUME */}

        <section id="resume">
          <Resume />
        </section>

        {/* CONTACT */}

        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <SiteFooter />

      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <BackToTop />
    </>
  );
}

export default App;
