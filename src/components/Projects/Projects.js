import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {ToastContainer, ToastStore} from 'react-toasts';

import payMe from './Payme.gif';
import Notey from './Notey.gif';
import Park from './Park.gif';
import './Projects.css';
import Modal from './Modal';

class Projects extends Component {
  state = { 
    showModal: false,
    project: '',
    loading: true,
    showNotey: false,
    showLunch: false,
    flat: false,
   }

  componentDidMount() {
    document.getElementById('openToast').click();
    setTimeout(() => this.setState({ showNotey: true }), 500); // simulates an async action, and hides the spinner
    setTimeout(() => this.setState({ showLunch: true }), 1000); // simulates an async action, and hides the spinner
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
        <div className="project-Larrow">
          <NavLink style={{ color: "white"}} to="/skills">
            <i style={{ cursor: 'pointer'}}className="fas fa-arrow-left fa-fw pulse" />
          </NavLink>
        </div>
        <div className="Projects-layout">
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
          <div className="project-position third-pro">
            <p>Notey</p>
              <img className="project-box" src={Notey} alt="gif" />
            <div className="project-onhover">
              <div className="project-animation">
                <p className="project-onhover-title">Notey</p>
                <p className="project-stack">Node.js<span>+</span>React<span>+</span>Mongodb</p>
              </div>
              <button className="project-button"onClick={()=> this.showModal('notey')}>Learn More</button>
            </div>
          </div>
          <div className="project-position third-pro">
            <p>Flatfinder</p>
            <div className="tryew">
              <img className="project-box" src={Notey} alt="gif" />
            </div>
            <div className="project-onhover">
              <div className="project-animation">
                <p className="project-onhover-title">Flatfinder</p>
                <p className="project-stack">Python-Django<span>+</span>React<span>+</span>Postgresql</p>
              </div>
              <button className="project-button"onClick={()=> this.showModal('flat')}>Learn More</button>
            </div>
          </div> 
          <div className="project-position  second-pro">
            <p className="lunch">Lunch</p>
            <div className="tryew">
              <img className="project-box lunch" src={Park} alt="gif" />
            </div>
            <div className="project-onhover">
              <div className="project-animation">
                <p className="project-onhover-title">Park</p>
                <p className="project-stack">Python/Django<span>+</span>React Native<span>+</span>Sqlite</p>
              </div>
              <button className="project-button"onClick={()=> this.showModal('lunch')}>Learn More</button>
            </div>
          </div>
        </div>
        <div className="about-arrows">
          <NavLink style={{ color: "white"}} to="/contact">
            <i style={{ cursor: 'pointer'}}className="fas fa-arrow-right fa-fw pulse" />
          </NavLink>
        </div>
        {this.state.showModal ? 
          <Modal showModal={this.showModal} project={this.state.project}/>
        : null }
        <p id="openToast" onClick={() => ToastStore
            .info(
              "Hover over each project to learn more",
              6000,
              {className: "toasty"}
              )}></p>
        <ToastContainer store={ToastStore} />
      </div>
     );
  }
}
 
export default Projects;