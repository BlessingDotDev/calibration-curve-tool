import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="header">
      <div className="container header__content">
        <h1 className="logo">PlotSci</h1>

        {/* Desktop Nav */}
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>

          <div
            className="dropdown"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button>Resources ▾</button>
            {dropdown && (
              <div className="dropdown-menu">
                <a href="#">Docs</a>
                <a href="#">API</a>
              </div>
            )}
          </div>

          <button className="btn-primary">Get Started</button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#">Features</a>
          <a href="#">How it works</a>
        </div>
      )}
    </header>
  );
}