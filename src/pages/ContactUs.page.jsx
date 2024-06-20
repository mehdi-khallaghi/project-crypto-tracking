import React from 'react'
import contactImg from '../assets/images/contact.png'

const ContactUsPage = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 bg-info p-3 rounded mt-2">
          <h3>contact us</h3>
        </div>
      </div>
      <div className="row align-items-center mt-3">
        <div className="col-md-7">
          <div>
            <h3 className="text-primary">How to contact us</h3>
            <h5>+98 0912 088 5499</h5>
            <h5>+21 12 34 56 78</h5>
            <h5>m.khcomputer@gmail.com</h5>
          </div>
          <div className='mt-3'>
            <div className="mb-3">
              <label class="form-label">Your Name : </label>
              <input type="text" className="form-control" placeholder="Please type your name..." />
            </div>
            <div className="mb-3">
              <label class="form-label">Your Message : </label>
              <input type="text" className="form-control" placeholder="Please type your message..." />
            </div>
            <button className="btn btn-outline-primary ms-3">Send</button>
          </div>
        </div>

      </div>
      <div className="col-md-4 text-center">
        <img src={contactImg} alt="about" className='img-fluid about-img' />
      </div>
    </div>

  )
}

export default ContactUsPage
