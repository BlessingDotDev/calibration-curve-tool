import "./Header.css";
import logo from "../assets/images/logo/plot-sci.png";
import menuIcon from "../assets/images/icons/menu.svg";
import userIcon from "../assets/images/icons/user.svg";


function Header() {
  return (
    <header className="site-header">
      <img className="logo" src={logo} alt="" />

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