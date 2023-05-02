import React from "react";

import "./AmountItem.css"

const AmountItem = ({ id, value , text}) => {
  return (
    <div className="top__search--amount">
      <input
        className="top__search--amount--input"
        id={id}
        value={value}
        readOnly
      />
      <label className="top__search--amount__label" htmlFor={id}
      >{text}&nbsp;</label
      >
    </div>
  );
};

export default AmountItem;
