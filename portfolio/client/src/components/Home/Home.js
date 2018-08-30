import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './App.css';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <Navigation />
        {/* <div> */}
          <div className="Home-header">
            <div className="Home-title">
              Hello,<br /> 
              I'm Maximo Delarosa
              <button className="Contact-button">
                Contact me
              </button>
            </div>
          </div>
        {/* </div> */}
      </div>
     );
  }
}
 
export default Home;