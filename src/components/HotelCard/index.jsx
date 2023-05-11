import React from "react";

import "./HotelCard.css";

export const HotelCard = ({ el }) => {
  return (
    <li className="item">
      <img src={el.imageUrl} alt={el.name} />
      <span className="hotel">{el.name}</span>
      <span className="hotel--location">
        {el.city}, {el.country}
      </span>
    </li>
  );
};
