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
          <i className="fas fa-id-card"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-medium"></i>
        </div>
      </div>
     );
  }
}

export default Sidebar;
