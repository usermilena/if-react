import React from "react";

import Input from "../Input/Input";
import Label from "../Label/Label";

import "./AmountItem.css"

const AmountItem = ({ id, value , text}) => {
  return (
    <div className="top__search--amount">
      <Input className="top__search--amount--input"
             id={id}
             value={value}
             readOnly='true'
      />
      <Label className="top__search--amount__label" htmlFor={id} text={text}/>
    </div>
  );
};

export default AmountItem;
