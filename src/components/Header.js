import logo from '../images/logo/logo.svg';
import React from "react";
import '../index.css';

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="лого проекта mesto (Россия)"
      />
    </header>
  )
}

export default Header;