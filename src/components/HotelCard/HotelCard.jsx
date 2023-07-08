import React from "react";

import { object } from "prop-types";

import "./HotelCard.css";

export const HotelCard = ({ el }) => {
  return (
    <div className="item">
      <img src={el.imageUrl} alt={el.name} />
      <span className="hotel">{el.name}</span>
      <span className="hotel--location">
        {el.city}, {el.country}
      </span>
    </div>
  );
};

HotelCard.propTypes = {
  el: object.isRequired,
};
