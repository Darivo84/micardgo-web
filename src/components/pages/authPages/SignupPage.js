import React from 'react';
import Logo from '../../assets/images/MICardLogo-Grad.png';
import { Signup } from '../../forms/auth/Signup';
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className="container">
      <div className="row d-flex align-items-center min-vh-100">
        <div className="col-md-4">
          <img
            className="img-fluid"
            src={Logo}
            alt="Logo"
            style={{ width: '170', height: '160' }}
          />
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
            MICard Go
          </h2>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-6">
          <Signup />
          <br />
          <Link
            to="/login"
            className="AuthSwitchLink"
            style={{
              textDecoration: 'none',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                fontFamily: 'Nunito',
                fontWeight: '700',
                textAlign: 'center',
                color: '#c64156',
              }}
            >
              Already have an account? Please login.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
