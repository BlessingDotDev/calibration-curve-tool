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
          <img className="user-icon" src={userIcon} alt="user-icon" />
        </div>

        <div className="box-icon">
          <img className="user-icon" src={menuIcon} alt="menu-icon" />
        </div>
      </nav>
    </header>
  );
}

export default Header;