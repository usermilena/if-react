import React from "react";

import { useSearchContext } from "../../../contexts/SearchContext";
import { SearchIcon } from "../../Icons";
import { Input } from "../../Input";
import { Label } from "../../Label";
import "./SearchDestination.css";

export const SearchDestination = () => {
  const { setDestinationInputValue } = useSearchContext();

  return (
    <div id="destinationWrapper" className="top__search--destination__wrapper">
      <SearchIcon className="top__search--destination__search-icon" />
      <Label
        className="top__search--destination__label"
        text="Your destination or hotel name"
      />
      <Input
        onChange={(event) => setDestinationInputValue(event.target.value)}
        placeholder="New York"
        className="top__search--destination"
      />
    </div>
  );
};
