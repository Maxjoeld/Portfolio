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
            <p className="Contact-title">Contact Me</p>
            <p className="Contact-subtext">If you have any questions, please feel free to contact me</p>
            <form className="Contact-Form">
            <input
              className="Contact-Name"
              placeholder="Name"
              name="title"
              type="text"
              onChange={this.handleInputChange}
              maxLength="32"
              required
            />
            {/* <br /> */}
            <input
              className="Contact-Subject"
              placeholder="Subject"
              name="title"
              type="text"
              onChange={this.handleInputChange}
              maxLength="32"
              required
            />
            <textarea
              className="Contact-message"
              placeholder="Message"
              name="content"
              type="text"
              onChange={this.handleInputChange}
              required
            />
            <br />
            <button
              onClick={e => this.handleSubmit(e)}
              className="Contact-submit"
              type="submit"
            >
              Send
            </button>
          </form>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Contact;