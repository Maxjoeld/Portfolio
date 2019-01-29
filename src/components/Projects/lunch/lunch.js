import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import Carousel from 'nuka-carousel';

import park from './Park1.jpg';

import '../Projects.css';

class Lunch extends Component {
  state = { 
    images: [ park ],
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

    // This will not run if we met the if condition above
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
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.Slideshow-lunch').clientWidth;
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
            <p>Park</p>
            <p className="Slideshow-details-sub">Mobile application for free parking</p>
          </div>
          <hr className="hr"/>
          <p className="Slideshow-description">
            Mobile application that allows users to search for parking free of charge. The application relies on users to report when they are leaving their parking spot. Once the app receives a reqeust that a user is leaving, it alerts other users that are searching for parking spots within the specified radius.
            <br />
            The application makes use of the following API's: Google Matrix, Google Map, and Google Geocode
          </p>
          <div className="Slideshow-view">
            <a href="https://github.com/Maxjoeld/Park" target="_blank" rel="noopener noreferrer">
              <button style={{ marginLeft: '1rem'}} className="Slideshow-viewcode">View Code</button>
            </a>
            <p className="leave-modal" onClick={() => this.props.showModal()}>x</p>
          </div>
        </div>
        <input style={{ display: 'none'}}/>    
      </div>     
    );
  }
}
 
export default onClickOutside(Lunch);