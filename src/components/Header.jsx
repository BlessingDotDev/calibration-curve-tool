import { useState } from "react";
import { Link } from "react-router";
import "./Header.css";
import logo from "../assets/images/logo/logo.png";

function Header({ varient }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`site-header ${varient}-header`}>
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
              <p className="menu-title">Menu</p>

              <div >
                <Link to="/" className="menu-row">
                  <i className="bx bx-home m-icon"></i>
                  <p>Home</p>
                </Link>
              </div>
            </div>
      )}
      </nav>
    </header>
  );
}

export default Header;