import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./picture.css";
import background from "../Pictures/background.jpg";
import women from "../Pictures/women.png";

export class Home extends Component {
  render() {
    const navStyle = {
      color: "white",
    };
    return (
      <div>
        <h1 className="intro"> G' Day!!</h1>
        <h2 className="body">
         <p>I am Hamayl Afzal an undergradute student
        at DePauw University!!</p>

        I am a Web Developer and my hobbies include Martial Arts and Web Designing. Feel free to connect for a cup of coffee!! 
        
         </h2>
        
        
        
        <Link style={navStyle} to="/Page2">
          <li className="Page2">Projects</li>
        </Link>
        
        
        
        <img src={background} className="background" alt="background" />
        <img src={women} className="women" alt="women" />
        
        
        
        


      </div>
    );
  }
}

export default Home;
