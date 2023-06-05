import React from "react";

import { AmountFilterOptions } from "../AmountFilterOptions";
import "./AmountFilter.css";

export const AmountFilter = () => {
  return (
    <div id="filter" className="top__search--amount__filter">
      <AmountFilterOptions who="Adults" min="1" />
      <AmountFilterOptions who="Children" min="0" />
      <AmountFilterOptions who="Rooms" min="1" />
    </div>
  );
};
