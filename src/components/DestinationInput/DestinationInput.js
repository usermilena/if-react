import React from "react";

import "./DestinationInput.css"

const DestinationInput = ({destinationInputValue,setDestinationInputValue}) => {

  return (
    <input
      id="destination"
      name="destination"
      className="top__search--destination"
      placeholder="New York"
      autoComplete="off"
      value={destinationInputValue}
      onChange={event => setDestinationInputValue(event.target.value)}
    />
  );
};

export default DestinationInput;
