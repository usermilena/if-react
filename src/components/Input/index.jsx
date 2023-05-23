import React from "react";

import "./Input.css";

export const Input = ({
  onChange,
  id,
  placeholder,
  autoComplete = "off",
  className = "top__search--destination",
  value,
  readOnly,
}) => {
  return (
    <input
      id={id}
      name={id}
      className={className}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={onChange}
      defaultValue={value}
      readOnly={readOnly}
    />
  );
};
