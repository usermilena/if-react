import React from "react";

import classNames from "classnames";
import { array, string } from "prop-types";

import { HotelCard } from "../HotelCard";
import "./HotelsList.css";

export const HotelsList = ({ data, className }) => {
  return (
    <ul className={classNames("list col-lg-12 col-sm-6", className)}>
      {data.map((el) => (
        <HotelCard el={el} key={el.id} />
      ))}
      <div className="circle">
        <div className="arrow"></div>
      </div>
    </ul>
  );
};

HotelsList.propTypes = {
  data: array.isRequired,
  className: string,
};
