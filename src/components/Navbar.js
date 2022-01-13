import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <NavLink exact to="/">
            À propos
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/project">
            Mes projects
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
