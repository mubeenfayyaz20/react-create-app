import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebarList">
        <li className="nav-link">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to={"/learning-objective"}>Learning Objective</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to={"/question-bank"}>Question bank</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
