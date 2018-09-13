import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import invoices from './invoices.png';
import payInvoice from './pay-invoice.png';
import reminders from './reminders.png';
import signin from './sign-in.jpg';

import '../Projects.css';

class Giveme extends Component {
  state = { 
    slideIndex: 0,
    loading: true,
    autoplay: true,
   }

   componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false, autoplay: false });
    }, 25);
   }

   componentWillMount() {
     this.setState({ autoplay: true})
   }


  render() {
    const { loading } = this.state;
    let playInterval = 25;
    // let visibility = 'hidden';
    let { autoplay } = this.state;
    if (!loading) {
      // visibility = 'visible';
      autoplay = false;
    }
    return (
      <React.Fragment>
          <div className="Slideshow">
            <Carousel autoplay={autoplay} pauseOnHover={true} autoplayInterval={playInterval}>
              <img src={signin} className="Slideshow-img" alt="img" />
              <img src={invoices} className="Slideshow-img" alt="img" />
              <img src={payInvoice} className="Slideshow-img" alt="img" />
              <img src={reminders} className="Slideshow-img" alt="img" />
            </Carousel>
          </div>
          {/* {loading ?
            <div class="lds-ring Loader"><div></div><div></div><div></div><div></div></div>
            : null } */}
            <div className="Slideshow-details">
              <div className="SlideShow-title">
                <p>GiveMeMyMoney</p>
                <p className="Slideshow-details-sub">Invoice Application</p>
              </div>
              <hr className="hr"/>
              <p className="Slideshow-description">
                Give Me My Money is a subscription based application that allows 
                "Admins" to upload invoices, and set automatic email/sms 
                messages to be sent to their "Client". 
                The client can click the link in the email/sms and be directed 
                to a page where they can easily and without barriers make the 
                required payment to the admin.
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