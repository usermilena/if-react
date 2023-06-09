import React from "react";

import "./Label.css";

export const Label = ({
  className = "top__search--destination__label",
  htmlFor,
  text,
}) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {text}
    </label>
  );
};
