import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

function Header({ loggedIn, onLogout, email }) {
  if (loggedIn) {
    return (
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <div className="header__userinfo">
          {" "}
          <p className="header__text">{email}</p>
          <button onClick={() => onLogout()} className="header__link">
            Выйти
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <NavLink
        activeClassName={`header__link_type_disabled`}
        className={"header__link"}
        to={"/sign-up"}
      >
        Регистрация
      </NavLink>
      <NavLink
        activeClassName="header__link_type_disabled"
        className={"header__link"}
        to={"/sign-in"}
      >
        Войти
      </NavLink>
    </header>
  );
}

export default Header;
