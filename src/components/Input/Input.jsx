import React from "react";

export const Input = ({
  onChange,
  id,
  placeholder,
  autoComplete = "off",
  className,
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
