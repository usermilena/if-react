import React from "react";

import { Button } from "../../Button";
import { SearchAmount } from "../SearchAmount";
import { SearchDate } from "../SearchDate";
import { SearchDestination } from "../SearchDestination";

import { getData } from "../../../services/getData";
import { hotelsUrl } from "../../../services/urls";

import "./SearchForm.css";

export const SearchForm = ({
  destinationInputValue,
  setDestinationInputValue,
  setHotels,
}) => {
  const availableHotelsEvent = () => {
    getData(hotelsUrl, destinationInputValue).then((hotels) =>
      setHotels(hotels)
    );
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
