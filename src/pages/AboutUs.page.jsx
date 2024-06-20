import React from 'react'
import aboutImg from '../assets/images/about.png'

const AboutUsPage = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 bg-info p-3 rounded mt-3">
          <h3>about us</h3>
        </div>
      </div>
      <div className="row align-items-center mt-3">
        <div className="col-md-7 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aut facilis vel cupiditate, est, possimus,
          incidunt nisi atque esse dolorum perferendis eius! Cupiditate qui iste itaque,
          expedita a eum reprehenderit alias?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aut facilis vel cupiditate, est, possimus,
          incidunt nisi atque esse dolorum perferendis eius! Cupiditate qui iste itaque,
          expedita a eum reprehenderit alias?
        
        </div>
        <div className="col-md-5 text-center">
          <img src={aboutImg} alt="about" className='img-fluid about-img' />
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage;
 