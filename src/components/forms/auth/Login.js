import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export const Login = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid! Please try again!')
      .required('Email is required!'),
    password: Yup.string()
      .min(6, 'Password must contain at least 6 characters.')
      .required('Password is required!'),
  });

  return (
    <Formik
      // Initial values
      initialValues={{
        email: '',
        password: '',
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
            Welcome Back! Please Login.
          </h4>
          <Form>
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
                Login
              </button>
            </Link>
          </Form>
        </div>
      )}
    </Formik>
  );
};
