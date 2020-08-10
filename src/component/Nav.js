import React from "react";
import { Link } from "react-router-dom";
import Pdf from '../component/HamaylAfzal.pdf'

function Nav() {
  const navStyle = {
    color: "white",
    
  };
  

  return (
    <nav>
      <ul className="nav-links">
        <a className="Resume"  style={navStyle} href = {Pdf} target = "_HamaylAfzal.pdf">Resume</a>

        <Link style={navStyle} to="/Page2">
        <li className="Page2">Projects</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;
