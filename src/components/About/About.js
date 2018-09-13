import React, { Component } from 'react';
import me from './me.jpg';

import './About.css';

class About extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="About">
        <div className="About-box">
          <p className="About-title">About Me</p>
          <p className="About-para">I first found interest in web development when I studying 
            Graphic Design in college. There were several courses that 
            I took that involved designing web applications using HTML, 
            CSS and javascript. Once I graduated I quickly 
            realized that I did not only want to design 
            applications but actually understand what was going on 
            under the hood. So I began to look for any  
            any software engineering opportunities and was honored to 
            be accepted as an intern at Union Square Park Capital management. 
            My eagerness to learn more about computer science and web development 
            led me to leave the internship and join Lambda School , a 
            7 month bootcamp that taught me all of the technologies that I know.
          </p>
        </div>
        <img src={me} className="About-img" alt="img" />
      </div>
     );
  }
}
 
export default About;