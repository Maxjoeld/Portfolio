import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './App.css';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Home">
        <div className="Home-title">
          Hello,<br /> 
          I'm Maximo De La Rosa
          <div className="Home-subtext">
            <p>Software Developer/</p>
            <p>Graphic Designer</p>
            <p>/Hardware Consultant</p>
          </div>
          <Link to='/contact'>
            <button className="Contact-button">
              Contact me
            </button>
          </Link>
        </div>
        {/* <div className="nav-arrows">
          <NavLink style={{ color: "rgb(159, 159, 159)"}} to="/About">
            <i style={{ cursor: 'pointer'}}className="fas fa-arrow-right fa-fw pulse" />
          </NavLink>
        </div> */}
      </div>
     );
  }
}
 
export default Home;