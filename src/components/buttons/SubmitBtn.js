import React from 'react';
import './btn.css';

function SubmitBtn({
  children,
  label,
  onClick,
  btnColor,
  labelColor,
  disabled,
  type,
  style,
  ...props
}) {
  return <button className="AuthBtn">{children}</button>;
}

export default SubmitBtn;
