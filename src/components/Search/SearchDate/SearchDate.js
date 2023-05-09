import React from "react";

import Calendar from "../../Calendar/Calendar";
import Input from "../../Input/Input";
import Label from "../../Label/Label";

import "./SearchDate.css"

const SearchDate = () => {
  return (
    <div id="dateWrapper" className="top__search--date__wrapper">
      <div className="top__search--date">
        <Label htmlFor="check-in" text="Check-in — Check-out" className="top__search--date__label--desktop" />
        <Label htmlFor="check-in" text="Check-in date" className="top__search--date__label"/>
        <Input id='check-in'
               className='top__search--date__input'
               placeholder='Check-in'
               readOnly='true'/>
      </div>
      <span> — </span>
      <div className="top__search--date">
        <Label htmlFor="check-out" text="Check-out date" className="top__search--date__label"/>
        <Input id='check-in'
               className='top__search--date__input'
               placeholder='Check-out'
               readOnly='true'/>
      </div>
      <Calendar/>
    </div>
  );
};

export default SearchDate;
