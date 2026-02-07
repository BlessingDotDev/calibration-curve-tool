import { Link } from "react-router";
import "./Header.css";
import logo from "../assets/images/logo/logo.png";

function Header({ varient }) {
  return (
    <header className={`site-header ${varient}-header`}>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
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

        <div className="box-icon">
          <i className="bx bx-menu icon" ></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;