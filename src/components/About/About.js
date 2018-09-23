import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import me from './me.jpg';


import './About.css';

class About extends Component {
  state = {  }
  render() { 
    return (

      <div className="About">
        <div className="About-box">
          <p className="About-title">About Me</p>
          <p className="About-para">
            I developed an interest in web development while studying Graphic Design
            as an undergraduate student. After taking several courses involving 
            creating web applications using HTML, CSS and Javascript, 
            I realized that I wanted to understand what was going on under the hood as well. 
            In an effort to do this, I obtained an internship at Union Square 
            Park Capital Management as a software engineer. 
            My eagerness to learn more about computer science and 
            web development then led me to join Lambda School, 
            through which I mastered the technologies that I know. 
          </p>
        </div>
        {/* <div className="About-imgdiv"> */}

          <img src={me} className="About-img" alt="img" />
        {/* </div> */}
        <div className="about-arrows">
          <NavLink style={{ color: "rgb(159, 159, 159)"}} to="/skills">
            <i style={{ cursor: 'pointer'}}className="fas fa-arrow-right fa-fw pulse" />
          </NavLink>
        </div>
      </div>
     );
  }
}
 
export default About;