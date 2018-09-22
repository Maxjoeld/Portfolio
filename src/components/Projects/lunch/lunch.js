import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import '../Projects.css';

class Lunch extends Component {
  state = { 
    slideIndex: 0,
    loading: true,
    autoplay: true,
   }

   componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false, autoplay: false });
    }, 20);
   }

   componentWillMount() {
     this.setState({ autoplay: true})
   }


  render() {
    const { loading } = this.state;
    let playInterval = 0;
    // let visibility = 'hidden';
    let { autoplay } = this.state;
    if (!loading) {
      // visibility = 'visible';
      autoplay = false;
    }
    return (
      <React.Fragment>
          <div className="Slideshow"  pauseOnHover={true}>
            <Carousel>
            
 
            </Carousel>
          </div>
          {/* {loading ?
            <div class="lds-ring Loader"><div></div><div></div><div></div><div></div></div>
            : null } */}
            <div className="Slideshow-details">
              <div className="SlideShow-title">
                <p>Lunch</p>
                <p className="Slideshow-details-sub">Food Application</p>
              </div>
              <hr className="hr"/>
              <p className="Slideshow-description">
                A lunch application that makes use of yelps API, and maps the restaurants within
                the given parameters
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
 
export default Lunch;