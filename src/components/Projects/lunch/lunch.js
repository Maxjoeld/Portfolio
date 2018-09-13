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
            <Carousel autoplay={autoplay}  autoplayInterval={playInterval}>
              {/* <img src={signin} className="Slideshow-img" alt="img" />
              <img src={invoices} className="Slideshow-img" alt="img" />
              <img src={payInvoice} className="Slideshow-img" alt="img" />
              <img src={reminders} className="Slideshow-img" alt="img" /> */}
            </Carousel>
          </div>
          {/* {loading ?
            <div class="lds-ring Loader"><div></div><div></div><div></div><div></div></div>
            : null } */}
            <div className="Slideshow-details">
              <div className="SlideShow-title">
                <p>Lunch</p>
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
 
export default Lunch;