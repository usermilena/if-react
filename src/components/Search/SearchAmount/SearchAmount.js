import React from "react";

import AmountItem from "../../AmountItem/AmountItem";
import AmountFilter from "../../AmountFilter/AmountFilter";

import "./SearchAmount.css"

const SearchAmount = () => {
  return (
    <div id="amount" className="top__search--amount__wrapper">
      <AmountItem id="adults" value="1" text="Adults"/>
      <span>—</span>
      <AmountItem id="children" value="0" text="Children"/>
      <span>—</span>
      <AmountItem id="room" value="1" text="Room"/>
      <AmountFilter/>
    </div>
  );
};

export default SearchAmount;
