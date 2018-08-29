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
          <NavLink className="Navigation-links" to ="/home"><i class="fas fa-home"></i></NavLink>
          <NavLink className="Navigation-links" to ="/about"><i class="fas fa-user"></i></NavLink>
          <NavLink className="Navigation-links" to ="/skills"><i class="fas fa-cog"></i></NavLink>
          <NavLink className="Navigation-links" to ="/projects"><i class="fas fa-code"></i></NavLink>
          <NavLink className="Navigation-links" to ="/contact"><i class="far fa-envelope"></i></NavLink>
        </div>
      </div>
     );
  }
}
 
export default withRouter(Navigation);