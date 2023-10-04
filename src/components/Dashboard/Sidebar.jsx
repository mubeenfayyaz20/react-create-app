import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebarList">
        <li className="nav-link">
          <NavLink to="add-new-events">Add New Events</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="all-events">All Events</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
