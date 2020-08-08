import React, { Component } from "react";
import Github from '../Pictures/github.png'
import Linkdin from '../Pictures/linkdin.png'
import Gmail from '../Pictures/gmail.png'



export class Home extends Component {
  render() {
    return (
      <div>
        <a
          href="https://github.com/hamaylafzal"
          target="_https://github.com/hamaylafzal"
        >
          <img src={Github} alt="github link" />
        </a>
        <a
          href="http://www.linkedin.com/in/hamayl-afzal"
          target="_http://www.linkedin.com/in/hamayl-afzal"
        >
          <img src={Linkdin} alt="Linkdin" />
        </a>
        <a
          href="hamaylafzal_2023@depauw.edu"
          target="_hamaylafzal_@023@depauw.edu"
        >
          <img src={Gmail} alt="gmail" />
        </a>
      </div>
    );
  }
}

export default Home;
