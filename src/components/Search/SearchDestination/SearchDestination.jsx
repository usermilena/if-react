import React from "react";
import { useDispatch } from "react-redux";

import { setSearchHotels } from "../../../store/actions/searchHotels.action";
import { SearchIcon } from "../../Icons";
import { Input } from "../../Input";
import { Label } from "../../Label";
import "./SearchDestination.css";

export const SearchDestination = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearchHotels(event.target.value));
  };

  return (
    <div id="destinationWrapper" className="top__search--destination__wrapper">
      <SearchIcon className="top__search--destination__search-icon" />
      <Label
        className="top__search--destination__label"
        text="Your destination or hotel name"
      />
      <Input
        onChange={handleChange}
        placeholder="New York"
        className="top__search--destination"
      />
    </div>
  );
};
