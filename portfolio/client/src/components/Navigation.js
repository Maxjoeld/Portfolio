import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import './Navigation.css';

class Navigation extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Navigation">
        <div className="Navigation-logo">Logo goes here</div>
        <div className="Navigation-icons">
          <NavLink className="Navigation-links" to ="/home"><i class="fas fa-home"></i>Home</NavLink>
          <NavLink className="Navigation-links" to ="/about">About</NavLink>
          <NavLink className="Navigation-links" to ="/skills">Skills</NavLink>
          <NavLink className="Navigation-links" to ="/projects">My Work</NavLink>
          <NavLink className="Navigation-links" to ="/contact">Contact</NavLink>
        </div>
      </div>
     );
  }
}
 
export default withRouter(Navigation);