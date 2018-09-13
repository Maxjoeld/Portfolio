import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import invoices from './invoices.png';
import payInvoice from './pay-invoice.png';
import reminders from './reminders.png';
import signin from './sign-in.jpg';

class Giveme extends Component {
  state = { 
    slideIndex: 0,
    loading: true,
   }

   componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
   }

  //  showSlide = () => {
  //   document.getElementsByClassName("Slideshow").style.visibility = "visible";
  //  }
  render() {
    // this.showSlide()
    const { loading } = this.state;
    let visibility = 'hidden';
    if (!loading) {
      visibility = 'visible';
    }
    return (
      <React.Fragment>
          <div className="Slideshow" style={{visibility: visibility}} pauseOnHover={true}>
            <Carousel autoplay={true} autoplayInterval={1400}>
              <img src={signin} className="Slideshow-img" alt="img" />
              <img src={invoices} className="Slideshow-img" alt="img" />
              <img src={payInvoice} className="Slideshow-img" alt="img" />
              <img src={reminders} className="Slideshow-img" alt="img" />
            </Carousel>
          </div>
          {loading ?
            <p className="Loader">Hey I'm loading</p>
            : null }
          }
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
      </React.Fragment> 
     );
  }
}
 
export default Giveme;