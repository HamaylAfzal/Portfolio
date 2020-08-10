import React from "react";
import Pdf from '../component/HamaylAfzal.pdf'
import Github from "../Pictures/github.png";
import Linkdin from "../Pictures/linkdin.png";
import Gmail from "../Pictures/gmail.png";
import "./picture.css";

function Nav() {
  const navStyle = {
    color: "white",
    
  };
  

  return (
    <div>
    <nav>
      <ul >
        <a className="Resume"  style={navStyle} href = {Pdf} target = "_HamaylAfzal.pdf">Resume</a>

      </ul>
      </nav>

      <a
          href="https://github.com/hamaylafzal"
          target="_https://github.com/hamaylafzal"
        >
          <img src={Github} className="github" alt="github link" />
        </a>
        <a
          href="http://www.linkedin.com/in/hamayl-afzal"
          target="_http://www.linkedin.com/in/hamayl-afzal"
        >
          <img src={Linkdin} className="linkdin" alt="Linkdin" />
        </a>
        <a
          href="hamaylafzal_2023@depauw.edu"
          target="_hamaylafzal_2023@depauw.edu"
        >
          <img src={Gmail} className="gmail" alt="gmail" />
        </a>
</div>
  );
}

export default Nav;
