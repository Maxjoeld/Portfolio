import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import signin from './signin.png';
import todo from './todo.png';
import signup from './signup.png';
import convo from './convo.png';
import home from './home.png';

import '../Projects.css';

class Giveme extends Component {
  state = { 
    images: [ signin, todo, home, convo, signup ],
    translateValue: 0,
    currentIndex: 0,
   }

   goToPrevSlide = () => {
    if(this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + (this.slideWidth())
    }));
   }

   goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.Slideshow-img').clientWidth;
  }


  render() {
    const { currentIndex } = this.state;
    return (
      <React.Fragment>
          <div className="Slideshow"style={{
            transform: `translateX(${this.state.translateValue}px)`,
          }}>
            {this.state.images.map((image, i) => 
              <img key={i}src={image} style={{ visibility: i === currentIndex ? 'visible': 'hidden' }} className="Slideshow-img" alt="img" />  
            )}
          </div>
            <div className="Slideshow-details">
              <div className="Slideshow-arrows">
                <div onClick={() => this.goToPrevSlide()}>
                  <i className="fas fa-arrow-left fa-fw adjust" />
                </div>
                <div onClick={() => this.goToNextSlide()}>
                  <i className="fas fa-arrow-left fa-fw opposite" />
                </div>
              </div>
              <div className="SlideShow-title">
                <p>Notey</p>
                <p className="Slideshow-details-sub">Note taking application</p>
              </div>
              <hr className="hr"/>
              <p className="Slideshow-description">
                A Note taking app that can be used for general and eductional use.
                Users are able to create/edit and communicate between each other. 
              </p>
              <div className="Slideshow-view">
                <a href="https://www.givememymoney.app/" target="_blank" rel="noopener noreferrer">
                  <button className="Slideshow-viewsite">View Site</button>
                </a>
                <p className="leave-modal" onClick={() => this.props.showModal()}>x</p>
              </div>
              </div>
          {/* } */}
      </React.Fragment> 
     );
  }
}
 
export default Giveme;