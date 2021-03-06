import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import Carousel from 'nuka-carousel';

import screen1 from './screen1.png';
import screen2 from './screen2.png';
import screen3 from './screen3.png';
// import convo from './convo.png';
// import home from './home.png';

import '../Projects.css';

class Notey extends Component {
  state = { 
    images: [ screen1, screen2,screen3 ],
    translateValue: 0,
    currentIndex: 0,
   }
  
  escFunction = (event) => {
    if(event.keyCode === 27) {
      this.props.showModal()
      //Do whatever when esc is pressed
    }
  }

   componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

   componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
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

  handleClickOutside = () => {
    this.props.showModal()
  }

  render() {
    const { currentIndex } = this.state;
    return (
      <div className="Modal-box">      
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
              <i className="fas fa-arrow-right fa-fw opposite" />
            </div>
          </div>
          <div className="SlideShow-title">
            <p>Flat</p>
            <p className="Slideshow-details-sub">Real estate application</p>
          </div>
          <hr className="hr"/>
          <p className="Slideshow-description">
            This app scrapes Craislist data to help users find preferable living options in specified cities.The scraping
            function utilizes CL city data and puts together a database from which user can filter though housing and location data to produce query results that fit there livability requests.
          </p>
          <div className="Slideshow-view">
            {/* <a href="https://notey-app.herokuapp.com" target="_blank" rel="noopener noreferrer">
              <button className="Slideshow-viewsite">View Site</button>
            </a> */}
            <a href="https://github.com/flatfinder19/flatfinder" target="_blank" rel="noopener noreferrer">
              <button style={{ marginLeft: '1rem'}}className="Slideshow-viewcode">View Code</button>
            </a>
            <p className="leave-modal" onClick={() => this.props.showModal()}>x</p>
          </div>
        </div>
        <input style={{ display: 'none'}}/>    
      </div>
    );
  }
}
 
export default onClickOutside(Notey);