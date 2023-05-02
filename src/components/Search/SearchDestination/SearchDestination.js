import React from "react";

import "./SearchDestination.css"

import DestinationInput from "../../DestinationInput/DestinationInput";
import DestinationInputMobile from "../../DestinationInputMobile/DestinationInputMobile";
import DestinationLabel from "../../DestinationLabel/DestinationLabel";
import SearchIcon from "../../SVG/SearchIcon/SearchIcon";

const SearchDestination = ({destinationInputValue,setDestinationInputValue}) => {
  return (
    <div
      id="destinationWrapper"
      className="top__search--destination__wrapper"
    >
      <SearchIcon/>
      <DestinationLabel/>
      <DestinationInput destinationInputValue={destinationInputValue} setDestinationInputValue={setDestinationInputValue}/>
      <DestinationInputMobile/>
    </div>
  );
};

export default SearchDestination;
