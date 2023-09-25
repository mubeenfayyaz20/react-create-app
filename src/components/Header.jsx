import React from "react";
import logoImg from "../images/education-logo.png";
import UserImg from "../images/user.png";

import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerWrapper">
      <ul className="navList">
        <li className="nav-item">
          <NavLink className="logoImage nav-link" to="https://arbisoft.com/">
            <img src={logoImg} alt="logo" />
          </NavLink>
        </li>
      </ul>
      <li className="nav-item dropdown profileLink">
        <NavLink
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={UserImg} alt=" user" /> Profile
        </NavLink>
        <ul className="dropdown-menu">
          <li>
            <Link to="/" className="dropdown-item">
              Mubeen Fayyaz
            </Link>
          </li>
          <li>
            <Link to="/" className="dropdown-item">
              Setting
            </Link>
          </li>
          <li>
            <Link to="/" className="dropdown-item">
              Logout
            </Link>
          </li>
        </ul>
      </li>
    </header>
  );
};

export default Header;
