import "./Header.css";
import menuIcon from "../assets/images/icons/menu.svg";
import userIcon from "../assets/images/icons/user.svg";


function Header() {
  return (
    <header className="site-header">
      <button>
        logo
      </button>

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