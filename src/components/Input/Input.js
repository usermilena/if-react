import React from "react";

import "./Input.css"

const Input = ({ onChange,
                 id,
                 placeholder,
                 autoComplete = 'off',
                 className = 'top__search--destination',
                 readOnly = false,
                 value}) => {
  return (
    <input
      id={id}
      name={id}
      className={className}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={onChange}
      readOnly={readOnly}
      value={value}
    />
  );
};

export default Input;
