import React, { useMemo } from "react";

import HotelsList from "../../components/HotelsList/HotelsList";
import Section from "../../components/Section/Section";
import { data } from "../../constants/data";

import "./AvailableHotels.css";

const AvailableHotels = ({ isVisible, destinationInputValue }) => {
  const dataFilter = useMemo(
    () =>
      data.filter(
        (hotel) =>
          hotel.name
            .toLowerCase()
            .includes(destinationInputValue.toLowerCase()) ||
          hotel.city
            .toLowerCase()
            .includes(destinationInputValue.toLowerCase()) ||
          hotel.country
            .toLowerCase()
            .includes(destinationInputValue.toLowerCase())
      ),
    [destinationInputValue, data]
  );

  return (
    isVisible && (
      <Section text="Available hotels" className="available__hotels bgColor">
        <HotelsList data={dataFilter} className="available__hotels--list" />
      </Section>
    )
  );
};

export default AvailableHotels;
