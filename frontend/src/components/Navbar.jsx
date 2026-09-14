import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        SAMIR<span>.DEV</span>
      </a>

      <div className={`nav-links ${open ? "mobile-open" : ""}`}>
        {links.map(([name, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
      </div>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>

      <button className="mobile-menu" onClick={() => setOpen(!open)}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </nav>
  );
}
