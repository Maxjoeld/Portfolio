import React, { Component } from 'react';
import './modal.css';
import Gmmm from './giveme/gmmm';

class Modal extends Component {
  state = {  }
  render() {
    const { project } = this.props; 
    return ( 
      <div className="Modal">
        <div className="Modal-layout">
          <div className="Modal-box">
            <Gmmm showModal={this.props.showModal} />
          </div>
        </div>
      </div>
     );
  }
}
 
export default Modal;