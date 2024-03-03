import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <NavLink
          to="/home"
          style={({ isActive }) => ({
            background: isActive ? '#ddd' : '',
          })}
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/history" style={({ isActive }) => ({
            background: isActive ? '#ddd' : '',
          })}>History</NavLink>
      </div>
    </nav>
  );
};
