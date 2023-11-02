import React from "react";
import { NavLink } from "react-router-dom";

import { SidebarWrapper, SidebarList } from "./style.ts";
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarList>
        <li className="nav-link">
          <NavLink to="add-new-events">Add New Events</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="all-events">All Events</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="events-calender">Event Calender</NavLink>
        </li>
      </SidebarList>
    </SidebarWrapper>
  );
};

export default Sidebar;
