import React, { Component } from 'react';
import './modal.css';
import Gmmm from './giveme/gmmm';
import Notey from './notey/notey';
import Lunch from './lunch/lunch';

class Modal extends Component {
  state = { 
    loading: true,
    className: "exit"
   }
  
  componentWillUnmount() {
    
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 200); // simulates an async action, and hides the spinner
  }
  render() {
    const { loading } = this.state;
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
    const { project } = this.props; 
    return ( 
      <div className="Modal">
        <div className="Modal-layout">
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
     );
  }
}
 
export default Modal;