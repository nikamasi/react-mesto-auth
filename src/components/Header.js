import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header({ isLogged, navItems }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  function onClick() {
    setMenuIsOpen(!menuIsOpen);
  }

  useEffect(() => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }
  }, [isLogged]);

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="логотип Место Россия"
        ></img>
      </Link>

      <nav
        className={`header__nav ${isLogged ? "header__hidden-menu" : ""} ${
          menuIsOpen ? "header__hidden-menu_active" : ""
        }`}
      >
        {navItems}
      </nav>

      {isLogged ? (
        <div
          className={`menu-button ${
            menuIsOpen ? "menu-button_close" : "menu-button_burger"
          }`}
          onClick={onClick}
        >
          <span class="menu-button__bar" />
          <span class="menu-button__bar" />
          <span class="menu-button__bar" />
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}

export default Header;
