import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Sidebar">
        <div className="slideout">
          <span />
          <span />
          <span />
        </div> 
        <div className="bar">
          <i className="fas fa-id-card one"></i>
          <a href="https://github.com/maxjoeld" target="_blank"><i className="fab fa-github two"></i></a>
          <a href="https://medium.com/@mjd809" target="_blank"><i className="fab fa-medium three"></i></a>
        </div>
      </div>
     );
  }
}

export default Sidebar;
