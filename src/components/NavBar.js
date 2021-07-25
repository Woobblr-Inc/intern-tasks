import React from "react";
import { Link } from "react-router-dom";
import "./NavStyle.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <h3>To-Do-List</h3>
      <ul className="nav-links">
        <Link to="/" className="NavUnderline">
          <li>Home</li>
        </Link>
        <Link to="/todo" className="NavUnderline">
          <li>To-Do</li>
        </Link>
        <Link to="/about" className="NavUnderline">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
