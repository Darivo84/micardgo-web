import React from 'react';
import Doctor from '../../assets/images/Doctor.png';
import { Basic } from '../../forms/onboarding/Basic';

const Info = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center min-vh-100">
        <div className="col-md-12">
          <h2
            className="mv-4 font-weight-bold-display-4"
            style={{
              fontSize: '38px',
              color: '#c64156',
              fontFamily: 'Nunito',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Basic and Medical Information
          </h2>
        </div>
        <div className="col-md-6">
        <img
            className="img-fluid"
            src={Doctor}
            alt="doctor"
            style={{ width: '170', height: '160' }}
          />
        </div>
        <div className="col-md-6">
          <Basic />
        </div>
      </div>
    </div>
  );
};

export default Info;
