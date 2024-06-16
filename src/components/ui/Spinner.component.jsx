import React from 'react';

import SpinnerImg from '../../assets/images/spinner.gif'

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img  src={SpinnerImg} alt="spinner" />
    </div>
  )
}

export default Spinner;
