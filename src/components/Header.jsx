import React from "react";
import logoImg from "../images/education-logo.png";
import UserImg from "../images/user.png";

import { HeaderWrapper, ProfileLink, NavListWrapper } from "./style";

import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavListWrapper className="navList">
        <NavLink className="logoImage nav-link" to="https://arbisoft.com/">
          <img src={logoImg} alt="logo" />
        </NavLink>
      </NavListWrapper>
      <ProfileLink className="nav-item dropdown ">
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
      </ProfileLink>
    </HeaderWrapper>
  );
};

export default Header;
