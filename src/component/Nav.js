import React from "react";
import Pdf from "../component/HamaylAfzal.pdf";
import Github from "../Pictures/github.png";
import Linkdin from "../Pictures/linkdin.png";
import Gmail from "../Pictures/gmail.png";
import "./picture.css";

const Nav = (props) => (
  <header className="Nav-bar">
    <nav className="Nav-BarResume">
      <div>
        <a className="Resume" href={Pdf} target="_HamaylAfzal.pdf">
          Resume
        </a>
      </div>

      <div className="spacer" />
      <div className="Nav-BarItems">
        <ul>
          <li>
            <a
              href="https://github.com/hamaylafzal"
              target="_https://github.com/hamaylafzal"
            >
            <img src={Github} className="picture" alt="github link" /> 
            </a>
          </li>

          <li>
            <a
              href="http://www.linkedin.com/in/hamayl-afzal"
              target="_http://www.linkedin.com/in/hamayl-afzal"
            >
            <img src={Linkdin} className="picture" alt="Linkdin" /> 
            </a>
          </li>

          <li>
            <a
              href="hamaylafzal_2023@depauw.edu"
              target="_hamaylafzal_2023@depauw.edu"
            >
            <img src={Gmail} className="picture" alt="gmail" /> 
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Nav;
