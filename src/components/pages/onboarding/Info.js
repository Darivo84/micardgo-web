import React from 'react';
import Lunch from '../../assets/images/Lunch.png';
import { Basic } from '../../forms/onboarding/Basic';

const Info = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center min-vh-100">
        <div className="col-md-6">
          <h2
            className="mv-4 font-weight-bold-display-4"
            style={{
              fontSize: '38px',
              color: '#c64156',
              fontFamily: 'Nunito',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '50px',
            }}
          >
            Basic Information
          </h2>
          <h4
            className="mv-4 font-weight-bold-display-4"
            style={{
              fontSize: '18px',
              color: '#733bc3',
              fontFamily: 'Nunito',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Add to your profile by completing your basic information.
          </h4>
          <img
            className="img-fluid"
            src={Lunch}
            alt="lunch"
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
