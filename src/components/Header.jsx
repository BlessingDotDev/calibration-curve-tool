import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./Header.css";
import Button from "../UIcomponents/Button";
import logo from "../assets/images/logo/logo.png";

function Header({ varient }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    
  }, [])

  return (
    <header className={`${scrolled ? 'scrolled-header' : 'site-header'} ${varient}-header `}>
      <Link to="/">
        <div className="logo-section">
          <img className="logo" src={logo} alt="" />

          <p className="logo-name">
            Plot
            <span className="logo-halfname">
              Sci
            </span>
          </p>
        </div>
      </Link>

      <nav className="link-section">
        <Link className="link" to="/plotting">
          <button className="cali-button">
            CALIBRATION CURVE
          </button>
        </Link>
      </nav>

      <nav className="icon-section">
        <div className="box-icon">
          <i className="bx bx-user icon"></i>
        </div>

        <div onClick={() => setMenuOpen(!menuOpen)} className="box-icon">
          <i className="bx bx-menu icon" ></i>
        </div>

        {
          menuOpen && (
            <div className="menu">
              <div className="title-section">
                <p className="menu-title">Menu</p>
                <i
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="bx bx-x x-icon"></i>
              </div>

              <div className="mobile-nav-links" >
                <Link to="/" className="menu-row">
                  <i className="bx bx-user m-icon"></i>
                  <p>Login</p>
                </Link>
                <Link to="/" className="menu-row">
                  <i className="bx bx-home m-icon"></i>
                  <p>Home</p>
                </Link>
                <Link to="/" className="menu-row">
                  <i className="bx bx-data m-icon"></i>
                  <p>calibration tool</p>
                </Link>
              </div>

              <div className="btn-section">
                <Button />
              </div>
            </div>
          )}
      </nav>

      {/* overlay */}
      {menuOpen && <div className="menu-overlay"></div>}
    </header>
  );
}

export default Header;