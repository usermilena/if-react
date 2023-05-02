import React from "react";

import "./Button.css"

const Button = ({ setIsVisible }) => {
  const hotelsEvent = () => {
  setIsVisible(true)
  }

  return (
    <button
      className="top__search--button"
      type="button"
      onClick={hotelsEvent}
    >Search
    </button>
  );
};

export default Button;
