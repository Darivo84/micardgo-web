import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

// Phone Validation
// ==========================================================================================================================
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .min(2, 'First name must be at least 2 characters long.')
      .max(255, 'First name cannot be more than 255 characters.')
      .required('First name is required!'),
    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters long.')
      .max(255, 'Last name cannot be more than 255 characters.')
      .required('Last name is required!'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone number is required!'),
    email: Yup.string()
      .email('Email is invalid! Please try again!')
      .required('Email is required!'),
    password: Yup.string()
      .min(6, 'Password must contain at least 6 characters.')
      .required('Password is required!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password does not match!')
      .required('Confirm password is required!'),
  });

  return (
    <Formik
      // Initial values
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
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
            Welcome! Please Sign Up.
          </h4>
          <Form>
            <TextField
              type="text"
              label="First Name"
              name="firstName"
              placeholder="Your first name..."
            />
            <TextField
              type="text"
              label="Last Name"
              name="lastName"
              placeholder="Your last name..."
            />
            <TextField
              type="text"
              label="Phone Number"
              name="phoneNumber"
              placeholder="Your phone number..."
            />
            <TextField
              type="email"
              label="Email"
              name="email"
              placeholder="Your email address..."
            />
            <TextField
              type="password"
              label="Password"
              name="password"
              placeholder="Your password..."
            />
            <TextField
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password..."
            />

            <Link to="/info">
              <button
                className="btn btn-dark mt-3 col-sm-12"
                type="submit"
                style={{
                  padding: 15,
                  backgroundColor: '#C64156',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                  marginVertical: 5,
                  height: 50,
                  marginBottom: 20,
                  border: 'none',
                }}
              >
                Sign Up
              </button>
            </Link>
          </Form>
        </div>
      )}
    </Formik>
  );
};
