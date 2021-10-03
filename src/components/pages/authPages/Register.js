import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

import Logo from '../../assets/images/MICardLogo-Grad.png';

// Components
// ==================================================================================
import TextInput from '../../forms/textInput/TextInput';
import FormWrapper from '../../forms/formWrapper';
import SubmitBtn from '../../buttons/SubmitBtn';

function Register() {
  return (
    <div className="Login">
      <div className="AuthContainer">
        <div className="InnerContainer">
          <img src={Logo} className="PageLogo" alt="Logo" />
          <span>
            <p className="PageTitle">MICard Go</p>
            <p className="SubTitle">Welcome! Please sign up.</p>
          </span>
          <>
            <FormWrapper>
              <div>
                <TextInput placeholder="First Name" />
              </div>
              <div>
                <TextInput placeholder="Last Name" />
              </div>
              <div>
                <TextInput placeholder="Phone Number" />
              </div>
              <div>
                <TextInput placeholder="Email" />
              </div>
              <div>
                <TextInput placeholder="Password" />
              </div>

              <SubmitBtn>Sign Up</SubmitBtn>
              <Link to="/login" className="AuthSwitchLink">
                <p className="AuthSwitchText">
                  Already have an account? Please login.
                </p>
              </Link>
            </FormWrapper>
          </>
        </div>
      </div>
    </div>
  );
}

export default Register;
