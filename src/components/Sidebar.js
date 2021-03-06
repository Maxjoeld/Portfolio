import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';
import linkedIn from './linkedin.png';

class Sidebar extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Sidebar">
        {/* <div className="slideout">
          <span />
          <span />
          <span />
        </div>  */}
        <div className="bar">
          <a href="https://www.linkedin.com/in/maximo-delarosa/" target="_blank"  rel="noopener noreferrer">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/maxjoeld" target="_blank"  rel="noopener noreferrer"><i className="fab fa-github two"></i></a>
          <a href="https://medium.com/@mjd809" target="_blank"  rel="noopener noreferrer"><i className="fab fa-medium three"></i></a>
        </div>
      </div>
     );
  }
}

export default Sidebar;
