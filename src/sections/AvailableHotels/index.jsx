import React from "react";

import { HotelsList } from "../../components/HotelsList";
import { Section } from "../../components/Section";

import { useHotelsContext } from "../../contexts/HotelsContext";

import "./AvailableHotels.css";

export const AvailableHotels = () => {
  const { hotels } = useHotelsContext();

  return (
    <>
      {!!hotels.length && (
        <Section text="Available hotels" className="available__hotels bgColor">
          <HotelsList data={hotels} className="available__hotels--list" />
        </Section>
      )}
    </>
  );
};
