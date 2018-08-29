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
          <NavLink to ="/">Home</NavLink>
          <NavLink to ="/about">About</NavLink>
          <NavLink to ="/skills">Skills</NavLink>
          <NavLink to ="/projects">My Work</NavLink>
          <NavLink to ="/contact">Contact</NavLink>
        </div>
      </div>
     );
  }
}
 
export default withRouter(Navigation);