import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const nav__style = {
    color: "white"
  };

  return (
    <div>
      <nav>
        <Link style={nav__style} to="/">
          <h3>Logo</h3>
        </Link>
        <ul className="nav__links">
          <Link style={nav__style} to="/about">
            <li>About</li>
          </Link>
          <Link style={nav__style} to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
