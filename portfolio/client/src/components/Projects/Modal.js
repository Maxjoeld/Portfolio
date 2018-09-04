import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Modal">
        <div className="Modal-layout">
          <div className="Modal-box">
            <div className="Slideshow">
              <div className="Slideshow-arrows">
                <p>
                  <i className="fas fa-arrow-left fa-fw adjust" />
                </p>
                <p>
                  <i className="fas fa-arrow-left fa-fw opposite" />
                </p>
              </div>
              <div className="Slideshow-details">
                <div className="SlideShow-title">
                  <p>GiveMeMyMoney</p>
                  <p className="Slideshow-details-sub">Invoice Application</p>
                </div>
                <hr className="hr"/>
                <p className="Slideshow-description">Give Me My Money is a subscription based application that allows 
                  "Admins" to upload invoices, and set automatic email/sms 
                  messages to be sent to their "Client". 
                  The client can click the link in the email/sms and be directed 
                  to a page where they can easily and without barriers make the 
                  required payment to the admin.
                </p>
                <p className="leave-modal" onClick={() => this.props.showModal()}>x</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Modal;