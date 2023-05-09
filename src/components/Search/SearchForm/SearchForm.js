import React from "react";

import Button from "../../Button/Button";
import SearchAmount from "../SearchAmount/SearchAmount";
import SearchDate from "../SearchDate/SearchDate";
import SearchDestination from "../SearchDestination/SearchDestination";

import "./SearchForm.css";

const SearchForm = ({
  setIsVisible,
  destinationInputValue,
  setDestinationInputValue,
}) => {
  const availableHotelsEvent = () => {
    setIsVisible(true);
  };

  return (
    <form className="top__search">
      <SearchDestination
        destinationInputValue={destinationInputValue}
        setDestinationInputValue={setDestinationInputValue}
      />
      <SearchDate />
      <SearchAmount />
      <Button onClick={availableHotelsEvent} text="Search" />
    </form>
  );
};

export default SearchForm;
