import { useLocation } from "react-router-dom";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header({ onLogout, email, isLogged }) {
  const location = useLocation();
  let path = location.pathname;
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  function onClick() {
    setMenuIsOpen(!menuIsOpen)
  }

  useEffect(() => {
    if (menuIsOpen) {
      setMenuIsOpen(false)
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
      <nav className={`header__nav ${path === "/" ? "header__hidden-menu": ""} ${menuIsOpen ? "header__hidden-menu_active" : ""}`}>
        {isLogged ? (
          <>
            <p className="header__nav-element">{email}</p>
            <button
              className="header__nav-element header__nav-element_dark link"
              onClick={onLogout}
            >
              Выйти
            </button>
          </>
        ) : (
          <Link
            to={path === "/sign-up" ? "/sign-in" : "/sign-up"}
            className="header__nav-element link"
          >
            {path === "/sign-up" ? "Войти" : "Регистрация"}
          </Link>
        )}
      </nav>
      {path === "/" ? (<div className={`menu-button ${menuIsOpen? "menu-button_close" : "menu-button_burger"}`} onClick={onClick}>
        <span class="menu-button__bar" />
        <span class="menu-button__bar" />
        <span class="menu-button__bar" />
      </div>) : <></>}

    </header>
  );
}

export default Header;
