import React from "react";

import { Button } from "../../Button";
import { SearchAmount } from "../SearchAmount";
import { SearchDate } from "../SearchDate";
import { SearchDestination } from "../SearchDestination";

import { getData } from "../../../services/getData";

import { hotelsUrl } from "../../../services/urls";

import { useSearchContext } from "../../../contexts/SearchContext";
import { useHotelsContext } from "../../../contexts/HotelsContext";

import "./SearchForm.css";

export const SearchForm = () => {
  const { destinationInputValue } = useSearchContext();
  const { setHotels } = useHotelsContext();

  const availableHotelsEvent = () => {
    getData(hotelsUrl, destinationInputValue).then((hotels) => {
      setHotels(hotels);
    });
  };

  return (
    <form className="top__search">
      <SearchDestination />
      <SearchDate />
      <SearchAmount />
      <Button onClick={availableHotelsEvent} text="Search" />
    </form>
  );
};
