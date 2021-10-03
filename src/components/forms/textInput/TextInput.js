import React from 'react';
import './TextInput.css';

function TextInput({ type, value, onClick, onChange, placeholder, ...props }) {
  return (
    <>
      <input
        className="AuthInput"
        type={type}
        value={value}
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}

export default TextInput;
