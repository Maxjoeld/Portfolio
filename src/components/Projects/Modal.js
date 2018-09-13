import React, { Component } from 'react';
import './modal.css';
import Gmmm from './giveme/gmmm';
import Notey from './notey/notey';
import Lunch from './lunch/lunch';

class Modal extends Component {
  state = {  }
  render() {
    const { project } = this.props; 
    return ( 
      <div className="Modal">
        <div className="Modal-layout">
          <div className="Modal-box">
            {project === "gmmm" ?
              <Gmmm showModal={this.props.showModal} /> 
            : null}
            {project === "notey" ?
              <Notey showModal={this.props.showModal} />
            : null}
            {project === "lunch" ?
              <Lunch showModal={this.props.showModal} />
            : null}
          </div>
        </div>
      </div>
     );
  }
}
 
export default Modal;