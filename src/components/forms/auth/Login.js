import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';

// Api connection to MISSO
// ==========================================================================================================================
import client from '../../../api/client';

export const Login = () => {
  const history = useHistory();

  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid! Please try again!')
      .required('Email is required!'),
    password: Yup.string()
      .min(6, 'Password must contain at least 6 characters.')
      .required('Password is required!'),
  });

  // Login
  // ==========================================================================================================================
  const login = async (values, formikActions) => {
    const res = await client
      .post('/login', {
        ...values,
      })
      .then(history.push('/info'));

    console.log(res.data);
    // formikActions.resetForm();
    // formikActions.setSubmitting(false);
  };

  React.useEffect(() => {
    login();
  });

  return (
    <Formik
      // Initial values
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={login}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        const { email, password } = values;

        return (
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
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur('email')}
                type="email"
                label="Email"
                name="email"
                placeholder="Your email address..."
              />
              <TextField
                value={password}
                error={touched.password && errors.password}
                onBlur={handleBlur('password')}
                type="password"
                label="Password"
                name="password"
                placeholder="Your password..."
              />

              <button
                className="btn btn-dark mt-3 col-sm-12"
                submitting={isSubmitting.toString()}
                onClick={handleSubmit}
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
                  minWidth: '100%',
                }}
              >
                Login
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
