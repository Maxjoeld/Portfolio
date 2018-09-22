import React, { Component } from 'react';
import payMe from './Payme.gif';
import Notey from './Notey.gif';
import Lunch from './Lunch.gif';
import './Projects.css';
import Modal from './Modal';

class Projects extends Component {
  state = { 
    showModal: false,
    project: '',
    loading: true,
    showNotey: false,
    showLunch: false,
   }

  componentDidMount() {
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
    // const { loading } = this.state;
    let { showNotey } = this.state;
    let { showLunch } = this.state;
    // if(this.state.showDiv) { // if your component doesn't have to wait for an async action, remove this block 
    //   showDiv = 'inline';
    // }
    return ( 
      <div className="Projects">
        {/* {this.state.loading ? 
          <div className="loader"></div>
        : null } */}
        
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
          {/* <div className="project-position third-pro">
            <p>Notey</p>
            <div className="tryew">
              <img className="project-box" src={Notey} alt="gif" />
            </div>
            <div className="project-onhover">
              <div className="project-animation">
                <p className="project-onhover-title">Notey</p>
                <p className="project-stack">Node.js<span>+</span>React<span>+</span>Mongodb</p>
              </div>
              <button className="project-button"onClick={()=> this.showModal('notey')}>Learn More</button>
            </div>
          </div> */}
          <div className="project-position project-odd  second-pro">
            <p className="lunch">Lunch</p>
            <div className="tryew">
              <img className="project-box lunch" src={Lunch} alt="gif" />
            </div>
            <div className="project-onhover">
              <div className="project-animation">
                <p className="project-onhover-title">Lunch</p>
                <p className="project-stack">Python/Django<span>+</span>React Native<span>+</span>Sqlite</p>
              </div>
              <button className="project-button"onClick={()=> this.showModal('lunch')}>Learn More</button>
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