import React from "react";

import { useHotelsContext } from "../../../contexts/HotelsContext";
import { useSearchContext } from "../../../contexts/SearchContext";
import { getData } from "../../../services/getData";
import { hotelsUrl } from "../../../services/urls";
import { Button } from "../../Button";
import { SearchAmount } from "../SearchAmount";
import { SearchDate } from "../SearchDate";
import { SearchDestination } from "../SearchDestination";
import "./SearchForm.css";

export const SearchForm = () => {
  const { setHotels } = useHotelsContext();

  const useAvailableHotelsEvent = () => {
    const { destinationInputValue } = useSearchContext();

    getData(hotelsUrl, destinationInputValue).then((hotels) => {
      setHotels(hotels);
    });
  };

  return (
    <form className="top__search">
      <SearchDestination />
      <SearchDate />
      <SearchAmount />
      <Button onClick={useAvailableHotelsEvent} text="Search" />
    </form>
  );
};
