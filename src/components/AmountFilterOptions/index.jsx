import React from "react";

import "./AmountFilterOptions.css";

export const AmountFilterOptions = ({ who, min }) => {
  return (
    <div className="top__search--amount__filter--options__wrapper">
      <span className="top__search--amount__filter--options">{who}</span>
      <div className="top__search--amount__filter--count__wrapper">
        <button
          id={"minus" + who}
          className="top__search--amount__filter--button"
          type="button"
        >
          –
        </button>
        <span id={"count" + who} className="top__search--amount__filter--count">
          {min}
        </span>
        <button
          id={"plus" + who}
          className="top__search--amount__filter--button"
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};
