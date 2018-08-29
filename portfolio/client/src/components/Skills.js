import React, { Component } from 'react';
import Navigation from './Navigation';

class Skills extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Navigation />
        <p>Skills Man </p>
        <div>
          <div className="Project-box">Project one</div>
          <div className="Project-box">Project two</div>
          <div className="Project-box">Project three</div>
        </div>
      </div>
     );
  }
}
 
export default Skills;