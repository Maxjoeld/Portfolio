import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './Contact.css';

class Contact extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <Navigation />
        <div className="Container">
          <div className="Contact">
            <p>Contact Me RIGHT MEOW</p>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Contact;