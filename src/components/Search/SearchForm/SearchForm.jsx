import React from "react";
import { useSelector } from "react-redux";

import { hotelsUrl } from "../../../constants/urls";
import { useHotelsContext } from "../../../contexts/HotelsContext";
import { getData } from "../../../services/getData";
import { Button } from "../../Button";
import { SearchAmount } from "../SearchAmount";
import { SearchDate } from "../SearchDate";
import { SearchDestination } from "../SearchDestination";
import "./SearchForm.css";

export const SearchForm = () => {
  const { setHotels } = useHotelsContext();

  const destinationInputValue = useSelector((state) => {
    return state.search.hotels;
  });
  const availableHotelsEvent = () => {
    getData(hotelsUrl, destinationInputValue).then((hotels) => {
      setHotels(hotels);
    });

    window.scrollTo({
      top: 902,
      behavior: "smooth",
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
