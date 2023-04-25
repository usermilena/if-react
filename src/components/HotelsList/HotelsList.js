import React from "react";

import "./HotelsList.css";

import HotelCard from "../HotelCard/HotelCard";

const HotelsList = ({ data }) => {
  return (
    <ul className="list col-lg-12 col-sm-6">
      {data.map((el) => (<HotelCard el={el} key={el.id}/>))}
      <div className="circle">
        <div className="arrow"></div>
      </div>
    </ul>
  );
};

export default HotelsList;
