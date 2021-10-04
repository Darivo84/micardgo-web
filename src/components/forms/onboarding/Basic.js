import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export const Basic = () => {
  // Validation
  // =======================================================
  const validate = Yup.object({
    dob: Yup.string().required('Date of birth is required!'),
    gender: Yup.string()
      .min(4, 'Gender must be at least 4 characters long.')
      .max(6, 'Your gender cannot be more than 6 characters.')
      .required('Your gender is required!'),
    address: Yup.string().required('Your address is required!'),
    allergies: Yup.string().required(
      'If you do not have any allergies, please answer "No"'
    ),
    illness: Yup.string().required(
      'If you do not suffer from any illness, please answer "No"'
    ),
    medication: Yup.string().required(
      'If you do not use any medications, please answer "No"'
    ),
  });

  return (
    <Formik
      // Initial values
      initialValues={{
        dob: '',
        gender: '',
        address: '',
        allergies: '',
        illness: '',
        medication: '',
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
            Complete your profile by adding to your basic and medical
            information.
          </h4>
          <Form>
            <TextField
              type="text"
              label="Date of Birth"
              name="dob"
              placeholder="dd / mm / yyyy"
            />
            <TextField
              type="text"
              label="Gender"
              name="gender"
              placeholder="Male / Female / Other"
            />
            <TextField
              type="text"
              label="Address"
              name="address"
              placeholder="Your address..."
            />
            <TextField
              type="text"
              label="Please specify your allergies"
              name="allergies"
              placeholder="If you suffer from any allergies, please let us know..."
            />
            <TextField
              type="text"
              label="Please specify your illnesses"
              name="illness"
              placeholder="If you suffer from any illnesses, please let us know..."
            />
            <TextField
              type="text"
              label="Please specify your medication"
              name="medication"
              placeholder="If you consume any medications, please let us know..."
            />
            <Link to="/profile">
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
                Update
              </button>
            </Link>
            <br />
          </Form>
        </div>
      )}
    </Formik>
  );
};
