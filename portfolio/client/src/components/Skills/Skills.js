import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './Skills.css'

class Skills extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <Navigation />
        <div className="Container">
          <div className="Skills">
            <div className="Skills-box">
              <p className="Skills-title">Skills</p>
              <p className="Skills-text">I’ve built several projects with different technologies. I’ve used React/React native as 
                the front-end framework for all of my apps. More technologies that I used are 
                listed below react, react native, redux, css/sass, node, express, 
                mongoDB, SQL,mocha, chai, python, django, C, and graphQL
              </p>
            </div>
            <div className="Project">
              <div className="Project-box">Project one</div>
              <div className="Project-box">Project two</div>
              <div className="Project-box">Project three</div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Skills;