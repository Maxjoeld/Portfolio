import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import signin from './signin.png';
import todo from './todo.png';

import '../Projects.css';

class Giveme extends Component {
  state = { 
    images: [ signin, todo ],
    translateValue: 0,
    currentIndex: 0,
   }

   goToPrevSlide = () => {
    // if(this.state.currentIndex === this.state.images.length - 1) {
    //   return this.setState({
    //     currentIndex: 0,
    //     translateValue: 0
    //   })
    // }

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
    console.log('hey');
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
    const { loading } = this.state;
    let playInterval = 50;
    // let visibility = 'hidden';
    let { autoplay } = this.state;
    if (!loading) {
      // visibility = 'visible';
      autoplay = false;
    }
    console.log('hey');
    return (
      <React.Fragment>
          <div className="Slideshow"style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>>
            {this.state.images.map((image, i) => (
                <img key={i}src={image} className="Slideshow-img" alt="img" /> )
              )   
            }
          </div>
          {/* {loading ?
            <div class="lds-ring Loader"><div></div><div></div><div></div><div></div></div>
            : null } */}
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