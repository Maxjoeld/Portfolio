import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Home-title">
        Hello,<br /> 
        I'm Maximo Delarosa
        <div className="Home-subtext">
        <p>Software Developer/</p>
        <p> Graphic Designer</p> 
        </div>
        <Link to='/contact'>
        <button className="Contact-button">
          Contact me
        </button>
        </Link>
      </div>
     );
  }
}
 
export default Home;