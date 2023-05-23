import React from "react";

import "./Button.css";

export const Button = ({
  onClick,
  text,
  className = "top__search--button",
}) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {text}
    </button>
  );
};
