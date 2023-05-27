import React from "react";

import { HotelsList } from "../../components/HotelsList";
import { Section } from "../../components/Section";

import "./AvailableHotels.css";

export const AvailableHotelsClass = ({ hotels }) => {
  const showHotels = !!hotels.length;

  return (
    <>
      {showHotels && (
        <Section text="Available hotels" className="available__hotels bgColor">
          <HotelsList data={hotels} className="available__hotels--list" />
        </Section>
      )}
    </>
  );
};
