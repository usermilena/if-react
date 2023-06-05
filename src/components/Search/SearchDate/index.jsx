import React from "react";

import { Calendar } from "../../Calendar";
import { Label } from "../../Label";
import "./SearchDate.css";

export const SearchDate = () => {
  return (
    <>
      <Label
        className="top__search--date__label"
        htmlFor="calendar"
        text="Check-in — Check-out"
      ></Label>
      <Calendar id="calendar"></Calendar>
    </>
  );
};
