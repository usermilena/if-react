import React from "react";

import "./TopMain.css"

import SearchForm from "../Search/SearchForm/SearchForm";

const TopMain = ({setIsVisible,destinationInputValue,setDestinationInputValue}) => {
  return (
    <main className="top__main--container col-lg-12 col-sm-6">
      <h1 className="top__title">
        Discover stays <br />
        to live, work or just relax
      </h1>
      <SearchForm setIsVisible={setIsVisible} destinationInputValue={destinationInputValue} setDestinationInputValue={setDestinationInputValue}/>
    </main>
  );
};

export default TopMain;
