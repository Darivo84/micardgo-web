import React from 'react';
import Logo from '../../assets/images/MICardLogo-Grad.png';
import { Login } from '../../forms/auth/Login';
import { Link } from 'react-router-dom';

export default function LoginPage() {
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
          <Login />
          <br />
          <Link
            to="/signup"
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
              Don't have an account? Please sign up.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
