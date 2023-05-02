import React from "react";

import "./AvailableHotels.css"

import HotelsList from "../../components/HotelsList/HotelsList";
import Section from "../../components/Section/Section";

import { data } from "../../constants/data";

const AvailableHotels = ({ isVisible,destinationInputValue }) => {
  destinationInputValue.toLowerCase();

  return isVisible && (
    <Section color="bgColor" text="Available hotels" className="available__hotels">
      <HotelsList data={data.filter(hotel => hotel.name.toLowerCase() === destinationInputValue || hotel.city.toLowerCase() === destinationInputValue || hotel.country.toLowerCase() === destinationInputValue)} className="available__hotels--list"/>
    </Section>
  )
};

export default AvailableHotels;





