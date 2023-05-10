import React from "react";

import Input from "../../Input/Input";
import { SearchIcon } from "../../Icons/Icons";
import Label from "../../Label/Label";

import "./SearchDestination.css"

const SearchDestination = ({destinationInputValue,setDestinationInputValue}) => {
  return (
    <div
      id="destinationWrapper"
      className="top__search--destination__wrapper"
    >
      <SearchIcon/>
      <Label htmlFor="destination" text="Your destination or hotel name" />
      <Input onChange={event => setDestinationInputValue(event.target.value)}
             id="destination"
             placeholder="New York"
             destinationInputValue={destinationInputValue}
             setDestinationInputValue={setDestinationInputValue}/>
    </div>
  );
};

export default SearchDestination;
