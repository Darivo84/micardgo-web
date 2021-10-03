import React from 'react';
import './btn.css';

function ChoiceBtn({
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
  return (
    <button className="ChoiceBtn" style={style}>
      {children}
    </button>
  );
}

export default ChoiceBtn;
