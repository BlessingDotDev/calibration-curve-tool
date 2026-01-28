import { Link } from "react-router";
import "./Header.css";
import logo from "../assets/images/logo/plot-sci.png";
import menuIcon from "../assets/images/icons/menu.svg";
import userIcon from "../assets/images/icons/user.svg";


function Header({varient}) {
  return (
    <header className={`site-header ${varient}-header`}>
      <Link to="/">
       <img className="logo" src={logo} alt="" />
      </Link>

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