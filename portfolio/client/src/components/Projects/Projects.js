import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import Navigation from '../Navigation/Navigation';
import './Projects.css';


class Projects extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Projects">
        <div>
          <p>GiveMeMyMoney</p>
          <p className="project-box">Projects</p>
        </div>
        <div>
          <p>Notey</p>
          <p className="project-box">Projects</p>
        </div>
        <div>
          <p>Movies</p>              
          <p className="project-box">Projects</p>
        </div>
      </div>
     );
  }
}
 
export default Projects;