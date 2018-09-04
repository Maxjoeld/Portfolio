import React, { Component } from 'react';
import payMe from './Payme.gif';
import './Projects.css';
import Modal from './Modal';

class Projects extends Component {
  state = { 
    showModal: false,
   }

  showModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() { 
    return ( 
      <div className="Projects">
        <div className="project-position">
          <p>GiveMeMyMoney</p>
          {/* <p className="project-box"></p> */}
          <img className="project-box" src={payMe} alt="gif" />
          <div className="project-onhover">
            <p className="project-onhover-title">GiveMeMyMoney</p>
            <p className="project-stack">Node.js<span>+</span>React<span>+</span>Mongodb</p>
            <button onClick={()=> this.showModal()}>Learn More</button>
          </div>
        </div>
        {this.state.showModal ? 
          <Modal showModal={this.showModal}/>
        : null }
      </div>
     );
  }
}
 
export default Projects;