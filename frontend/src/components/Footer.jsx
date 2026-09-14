import React from "react";

const GITHUB =
  "https://github.com/samirlevate8788-creator";

const LINKEDIN =
  "https://www.linkedin.com/in/samir-levate";

const EMAIL =
  "mailto:sameerlewate8788@gmail.com";

const PHONE =
  "tel:+918788696321";

export default function Footer() {
  const year = new Date().getFullYear();

  const exploreLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Certifications", "#certifications"],
  ];

  const moreLinks = [
    ["Experience", "#experience"],
    ["Open Source", "#opensource"],
    ["Articles", "#articles"],
    ["Education", "#education"],
    ["Achievements", "#achievements"],
  ];

  const connectLinks = [
    ["GitHub", GITHUB],
    ["LinkedIn", LINKEDIN],
    ["Email", EMAIL],
    ["Call", PHONE],
  ];

  return (
    <footer className="sl-footer">

      {/* ================================================
          BACKGROUND
      ================================================= */}

      <div className="sl-footer-grid" aria-hidden="true" />

      <div
        className="sl-footer-glow sl-footer-glow-left"
        aria-hidden="true"
      />

      <div
        className="sl-footer-glow sl-footer-glow-right"
        aria-hidden="true"
      />


      {/* ================================================
          MAIN
      ================================================= */}

      <div className="sl-footer-inner">

        {/* ============================================
            BRAND
        ============================================= */}

        <div className="sl-footer-brand">

          <div className="sl-footer-brand-top">

            <div className="sl-footer-logo">
              SL
            </div>

            <div className="sl-footer-brand-info">
              <h3>Samir Levate</h3>

              <p>
                Software Engineering • AI • Cybersecurity • Open Source
              </p>
            </div>

          </div>


          <p className="sl-footer-description">
            Building practical software, exploring systems,
            learning cybersecurity and creating technology
            that solves real-world problems.
          </p>


          {/* Social */}

          <div className="sl-footer-socials">

            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <span>GH</span>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <span>in</span>
            </a>

            <a
              href={EMAIL}
              aria-label="Email"
            >
              <span>@</span>
            </a>

            <a
              href={PHONE}
              aria-label="Call"
            >
              <span>☎</span>
            </a>

          </div>


          {/* Availability */}

          <div className="sl-footer-status">

            <span className="sl-footer-status-dot" />

            <div>
              <strong>
                Open to Opportunities
              </strong>

              <small>
                LET'S BUILD SOMETHING AMAZING
              </small>
            </div>

          </div>

        </div>


        {/* ============================================
            EXPLORE
        ============================================= */}

        <div className="sl-footer-column">

          <h4>Explore</h4>

          {exploreLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
            >
              <span>{label}</span>
              <b>→</b>
            </a>
          ))}

        </div>


        {/* ============================================
            MORE
        ============================================= */}

        <div className="sl-footer-column">

          <h4>More</h4>

          {moreLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
            >
              <span>{label}</span>
              <b>→</b>
            </a>
          ))}

        </div>


        {/* ============================================
            CONNECT
        ============================================= */}

        <div className="sl-footer-column">

          <h4>Connect</h4>

          {connectLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={
                label === "GitHub" || label === "LinkedIn"
                  ? "_blank"
                  : undefined
              }
              rel={
                label === "GitHub" || label === "LinkedIn"
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <span>{label}</span>
              <b>↗</b>
            </a>
          ))}

        </div>


        {/* ============================================
            CTA
        ============================================= */}

        <div className="sl-footer-cta">

          <div className="sl-footer-badge">
            <span>✦</span>
            STAY UPDATED
          </div>

          <h3>
            Let's stay
            <span> in touch</span>
          </h3>

          <p>
            Get updates about new projects,
            articles and opportunities.
          </p>

          <a
            href="#contact"
            className="sl-footer-cta-button"
          >
            <span>Let's Connect</span>

            <b>↗</b>
          </a>

          <small className="sl-footer-no-spam">
            🔒 No spam. Just projects, ideas & opportunities.
          </small>

        </div>

      </div>


      {/* ================================================
          BOTTOM
      ================================================= */}

      <div className="sl-footer-bottom">

        <div className="sl-footer-bottom-left">

          <span>
            © {year} Samir Levate
          </span>

          <i>•</i>

          <span>
            All rights reserved.
          </span>

        </div>


        <div className="sl-footer-bottom-center">

          <span>
            BUILT WITH REACT
          </span>

          <i>•</i>

          <span>
            ALWAYS LEARNING
          </span>

        </div>


        <div className="sl-footer-bottom-right">

          <span>
            TURNING IDEAS INTO IMPACT
          </span>

          <i>•</i>

          <span>
            MADE WITH <strong>♥</strong> IN INDIA
          </span>

        </div>

      </div>

    </footer>
  );
}
