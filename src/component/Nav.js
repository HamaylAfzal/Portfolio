import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/Resume">
          <li>Resume</li>
        </Link>
        <Link style={navStyle} to="/Page2">
          <li>Projects and Involvements</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;
