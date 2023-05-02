import React from "react";

import "./AmountFilter.css"

import AmountFilterOptions from "../AmountFilterOptions/AmountFilterOptions";
import ChildrenAgeSelector from "../ChildrenAgeSelector/ChildrenAgeSelector";

const AmountFilter = () => {
  return (
    <div id="filter" className="top__search--amount__filter">
      <AmountFilterOptions who="Adults" min="1"/>
      <AmountFilterOptions who="Children" min="0"/>
      <AmountFilterOptions who="Rooms" min="1"/>
      <div
        id="filterChildren"
        className="top__search--amount__filter--children"
      >
        <label
          className="top__search--amount__filter--children__label"
          htmlFor="childrenAge"
        >What is the age of the child you’re<br />travelling
          with?</label
        >
        <ChildrenAgeSelector/>
        <ChildrenAgeSelector/>
        <ChildrenAgeSelector/>
        <ChildrenAgeSelector/>
        <ChildrenAgeSelector/>
        <ChildrenAgeSelector/>
        <ChildrenAgeSelector/>
        <ChildrenAgeSelector/>
        <ChildrenAgeSelector/>
        <ChildrenAgeSelector/>
      </div>
    </div>
  );
};

export default AmountFilter;
