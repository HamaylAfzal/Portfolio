import React, { Component } from "react";
import Github from '../Pictures/github.png'
import Linkdin from '../Pictures/linkdin.png'
import Gmail from '../Pictures/gmail.png'
import './picture.css'
import background from '../Pictures/background.jpg'
import women from '../Pictures/women.png'


export class Home extends Component {
  render() {
    return (
      <div>
     <h1 className="intro"> G' Day!!</h1>
     <h2 className="body"> Bla Bla Bla </h2>
          <img src={background} className="background" alt="background" />
          <img src={women} className="women" alt="women" />
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
          target="_hamaylafzal_@023@depauw.edu"
        >
          <img src={Gmail} className="gmail" alt="gmail" />
        </a>
      </div>
    );
  }
}

export default Home;
