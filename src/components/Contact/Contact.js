import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Map from './map';
import './Contact.css';

class Contact extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Contact">
        <div className="Contact-Larrow">
          <NavLink style={{ color: "white"}} to="/projects">
            <i style={{ cursor: 'pointer'}}className="fas fa-arrow-left fa-fw pulse" />
          </NavLink>
        </div>
        <div className="Contact-layout">
          <p className="Contact-title">Contact Me</p>
          <p className="Contact-subtext">If you have any questions, please feel free to contact me</p>
          <form className="Contact-Form">
            <div style={{display: 'flex'}}>
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
                className="Contact-Email"
                placeholder="Email"
                name="title"
                type="text"
                onChange={this.handleInputChange}
                maxLength="32"
                required
              />
            </div>
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
        {/* <div > */}
          <Map />
        {/* </div> */}
        <div className="about-arrows">
          <NavLink style={{ color: "white"}} to="/home">
            <i style={{ cursor: 'pointer'}}className="fas fa-arrow-right fa-fw pulse" />
          </NavLink>
        </div>
      </div>
     );
  }
}
 
export default Contact;