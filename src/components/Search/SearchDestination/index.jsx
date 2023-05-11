import React from "react";

import { Input } from "../../Input";
import { Label } from "../../Label";
import { SearchIcon } from "../../Icons";

import "./SearchDestination.css";

export const SearchDestination = ({
  destinationInputValue,
  setDestinationInputValue,
}) => {
  return (
    <div id="destinationWrapper" className="top__search--destination__wrapper">
      <SearchIcon className="top__search--destination__search-icon" />
      <Label htmlFor="destination" text="Your destination or hotel name" />
      <Input
        onChange={(event) => setDestinationInputValue(event.target.value)}
        id="destination"
        placeholder="New York"
        destinationInputValue={destinationInputValue}
        setDestinationInputValue={setDestinationInputValue}
      />
    </div>
  );
};
