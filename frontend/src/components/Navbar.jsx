import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const primaryLinks = [
  ["Home", "/", true],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
];

const exploreLinks = [
  ["Certifications", "/certifications"],
  ["Open source", "/open-source"],
  ["Articles", "/articles"],
  ["Education", "/education"],
  ["Achievements", "/achievements"],
  ["Resume", "/resume"],
];

function linkClass({ isActive }) {
  return `nav-link${isActive ? " is-active" : ""}`;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const location = useLocation();
  const exploreActive = exploreLinks.some(([, path]) => path === location.pathname);

  const closeMenus = () => {
    setMenuOpen(false);
    setExploreOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="brand-mark" onClick={closeMenus} aria-label="Samir Levate home">
          <span className="brand-monogram">SL</span>
          <span className="brand-wordmark">SAMIR<span>//</span>LEVATE</span>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`site-navigation${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <div className="primary-nav-links">
            {primaryLinks.map(([label, path, exact]) => (
              <NavLink
                key={path}
                to={path}
                end={exact}
                className={linkClass}
                onClick={closeMenus}
              >
                {label}
              </NavLink>
            ))}

            <div className={`explore-menu${exploreOpen ? " is-open" : ""}`}>
              <button
                type="button"
                className={`nav-link explore-trigger${exploreActive ? " is-active" : ""}`}
                aria-haspopup="true"
                aria-expanded={exploreOpen}
                onClick={() => setExploreOpen((open) => !open)}
              >
                More <ChevronDown size={14} />
              </button>
              {exploreOpen && (
                <div className="explore-dropdown">
                  <span className="dropdown-label">Explore the profile</span>
                  {exploreLinks.map(([label, path]) => (
                    <NavLink key={path} to={path} className={linkClass} onClick={closeMenus}>
                      {label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          <NavLink to="/contact" className="nav-contact" onClick={closeMenus}>
            Let’s talk <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
