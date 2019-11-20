import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import './App.css';

class Home extends Component {
  state = {  }
  render() { 
    return (
      <div className="Home">
        <div className="Home-title">
          Hello,
          <br />
          I'm Maximo de la Rosa
          <div className="Home-subtext">
            <p>Software Developer</p>
            {/* <p>Graphic Designer</p>
            <p>/Hardware Consultant</p> */}
          </div>
          <a
            href="https://www.linkedin.com/in/maximo-delarosa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="Contact-button">Contact me</button>
          </a>
        </div>
        <div className="Home-box">
          <p className="Homelogo">
            M<span style={{ marginLeft: "-170px" }}>D</span>
          </p>
        </div>
        <div className="nav-arrows">
          <NavLink style={{ color: "white" }} to="/skills">
            <i
              style={{ cursor: "pointer" }}
              className="fas fa-arrow-right fa-fw pulse"
            />
          </NavLink>
        </div>
      </div>
    );
  }
}
 
export default withRouter(Home);