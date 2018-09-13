import React, { Component } from 'react';
import payMe from './Payme.gif';
import Notey from './Notey.gif';
import './Projects.css';
import Modal from './Modal';

class Projects extends Component {
  state = { 
    showModal: false,
    project: '',
   }

  showModal = (project) => {
    // console.log(project);
    this.setState({ 
      showModal: !this.state.showModal, 
      project
    })
  }

  render() {
    return ( 
      <div className="Projects">
        <div className="project-position first-pro">
          <p>GiveMeMyMoney</p>
          <p className="project-box"></p>
          <img className="project-box" src={payMe} alt="gif" />
          <div className="project-onhover">
            <div className="project-animation">
              <p className="project-onhover-title">GiveMeMyMoney</p>
              <p className="project-stack">Node.js<span>+</span>React<span>+</span>Mongodb</p>
            </div>
            <button className="project-button"onClick={()=> this.showModal('gmmm')}>Learn More</button>
          </div>
        </div>
        <div className="project-position second-pro">
          <p>Lunch</p>
          {/* <p className="project-box"></p> */}
          <img className="project-box" src={payMe} alt="gif" />
          <div className="project-onhover">
            <div className="project-animation">
              <p className="project-onhover-title">Lunch</p>
              <p className="project-stack">Python/Django<span>+</span>React<span>+</span>Sqlite</p>
            </div>
            <button className="project-button"onClick={()=> this.showModal('lunch')}>Learn More</button>
          </div>
        </div>
        <div className="project-position project-odd third-pro">
          <p>Notey</p>
          {/* <p className="project-box"></p> */}
          <img className="project-box" src={Notey} alt="gif" />
          <div className="project-onhover">
            <div className="project-animation">
              <p className="project-onhover-title">Notey</p>
              <p className="project-stack">Node.js<span>+</span>React<span>+</span>Mongodb</p>
            </div>
            <button className="project-button"onClick={()=> this.showModal('notey')}>Learn More</button>
          </div>
        </div>
        {this.state.showModal ? 
          <Modal showModal={this.showModal} project={this.state.project}/>
        : null }
      </div>
     );
  }
}
 
export default Projects;