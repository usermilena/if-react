import React from "react";

import { AmountFilterOptions } from "../AmountFilterOptions";
import { ChildrenAgeSelector } from "../ChildrenAgeSelector";
import { Label } from "../Label";

import "./AmountFilter.css";

export const AmountFilter = () => {
  return (
    <div id="filter" className="top__search--amount__filter">
      <AmountFilterOptions who="Adults" min="1" />
      <AmountFilterOptions who="Children" min="0" />
      <AmountFilterOptions who="Rooms" min="1" />
      <div
        id="filterChildren"
        className="top__search--amount__filter--children"
      >
        <Label
          className="top__search--amount__filter--children__label"
          htmlFor="childrenAge"
          text="What is the age of the child you’re travelling with?"
        />
        <ChildrenAgeSelector />
        <ChildrenAgeSelector />
        <ChildrenAgeSelector />
        <ChildrenAgeSelector />
        <ChildrenAgeSelector />
        <ChildrenAgeSelector />
        <ChildrenAgeSelector />
        <ChildrenAgeSelector />
        <ChildrenAgeSelector />
        <ChildrenAgeSelector />
      </div>
    </div>
  );
};
