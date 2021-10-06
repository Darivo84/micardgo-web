import React from 'react';
import Doctor from '../../assets/images/Doctor.png';
import { Med } from '../../forms/onboarding/Med';

const Medical = () => {
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
              // marginTop: '50px',
            }}
          >
            Medical Information
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
            Complete your profile by adding your medical information.
          </h4>
          <img
            className="img-fluid"
            src={Doctor}
            alt="doctor"
            style={{ width: '170', height: '160' }}
          />
        </div>
        <div className="col-md-6">
          <Med />
        </div>
      </div>
    </div>
  );
};

export default Medical;
