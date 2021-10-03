import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

import Logo from '../../assets/images/MICardLogo-Grad.png';

// Components
// ==================================================================================
import TextInput from '../../forms/textInput/TextInput';
import FormWrapper from '../../forms/formWrapper';
import SubmitBtn from '../../buttons/SubmitBtn';

function Login() {
  return (
    <div className="Login">
      <div className="AuthContainer">
        <div className="InnerContainer">
          <img src={Logo} className="PageLogo" alt="Logo" />
          <span>
            <h2 className="PageTitle">MICard Go</h2>
            <h5 className="SubTitle">Welcome Back! Please login.</h5>
          </span>
          <>
            <FormWrapper>
              <div>
                <TextInput placeholder="Email" />
              </div>
              <div>
                <TextInput placeholder="Password" />
              </div>
              <SubmitBtn>Login</SubmitBtn>
              <Link to="/signup" className="AuthSwitchLink">
                <p className="AuthSwitchText">
                  Don't have an account? Please sign up.
                </p>
              </Link>
            </FormWrapper>
          </>
        </div>
      </div>
    </div>
  );
}

export default Login;
