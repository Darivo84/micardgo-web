import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <label
        htmlFor={field.name}
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          textAlign: 'left',
          color: '#C64156',
          paddingBottom: 5,
        }}
      >
        {label}
      </label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field}
        {...props}
        autoComplete="off"
        style={{
          backgroundColor: '#e5e7eb',
          padding: 15,
          paddingLeft: 55,
          paddingRight: 55,
          borderRadius: 10,
          fontSize: 16,
          fontFamily: 'Nunito',
          height: 45,
          marginVertical: 3,
          marginBottom: 10,
        }}
      />
      <ErrorMessage component="div" name={field.name} style={{color: 'red', fontFamily: 'Nunito'}} />
    </div>
  );
};
