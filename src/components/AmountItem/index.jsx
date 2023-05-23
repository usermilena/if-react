import React from "react";

import { Input } from "../Input";
import { Label } from "../Label";

import "./AmountItem.css";

export const AmountItem = ({ id, value, text }) => {
  return (
    <div className="top__search--amount">
      <Input
        className="top__search--amount--input"
        id={id}
        value={value}
        readOnly
      />
      <Label className="top__search--amount__label" htmlFor={id} text={text} />
    </div>
  );
};