import React from "react";

import "./List.css";

const List = ({ data }) => {
  return (
    <ul className="list col-lg-12 col-sm-6">
      {data.map((el) => (
        <li className="item" key={el.id}>
          <img src={el.imageUrl} alt={el.name} />
          <span className="hotel">{el.name}</span>
          <span className="hotel--location">
            {el.city}, {el.country}
          </span>
        </li>
      ))}
      <div className="circle">
        <div className="arrow"></div>
      </div>
    </ul>
  );
};

export default List;
