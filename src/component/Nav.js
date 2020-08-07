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
          <li className="Home">Home</li>
        </Link>
        <Link style={navStyle} to="/Resume">
          <li className="Resume">Resume</li>
        </Link>
        <Link style={navStyle} to="/Page2">
        <li className="Page2">Projects & Involvements</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;
