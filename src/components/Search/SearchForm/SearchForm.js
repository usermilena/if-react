import React from "react";

import "./SearchForm.css"

import Button from "../../Button/Button";
import SearchAmount from "../SearchAmount/SearchAmount";
import SearchDestination from "../SearchDestination/SearchDestination";
import SearchDate from "../SearchDate/SearchDate";

const SearchForm = ({ setIsVisible,destinationInputValue,setDestinationInputValue }) => {
  return (
    <form className="top__search">
      <SearchDestination destinationInputValue={destinationInputValue} setDestinationInputValue={setDestinationInputValue}/>
      <SearchDate/>
      <SearchAmount/>
      <Button setIsVisible={setIsVisible}/>
    </form>
  );
};

export default SearchForm;
