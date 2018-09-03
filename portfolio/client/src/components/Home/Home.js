import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Sidebar from '../Sidebar';
import './App.css';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <Navigation />
        <div className="Container">
          <Sidebar />
          <div className="Home-title">
            Hello,<br /> 
            I'm Maximo Delarosa
            <div className="Home-subtext">
            <p>Software Developer/</p>
            <p> Graphic Designer</p> 
            </div>
            <button className="Contact-button">
              Contact me
            </button>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Home;