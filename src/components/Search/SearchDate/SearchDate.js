import React from "react";

import "./SearchDate.css"

import Calendar from "../../Calendar/Calendar";

const SearchDate = () => {
  return (
    <div id="dateWrapper" className="top__search--date__wrapper">
      <div className="top__search--date">
        <label htmlFor="check-in" className="top__search--date__label--desktop"
        >Check-in — Check-out</label
        >
        <label htmlFor="check-in" className="top__search--date__label"
        >Check-in date</label
        >
        <input
          id="check-in"
          className="top__search--date__input"
          placeholder="Check-in"
          readOnly
        />
      </div>
      <span> — </span>
      <div className="top__search--date">
        <label htmlFor="check-out" className="top__search--date__label"
        >Check-out date</label
        >
        <input
          id="check-out"
          className="top__search--date__input"
          placeholder="Check-out"
          readOnly
        />
      </div>
      <Calendar/>
    </div>
  );
};

export default SearchDate;
