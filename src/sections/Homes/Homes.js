import React from "react";

import HotelsList from "../../components/HotelsList/HotelsList";
import Section from "../../components/Section/Section";

import { data } from "../../constants/data";

const Homes = () => {
  return (
    <Section color="bgColor" text="Homes guests loves">
      <HotelsList data={data}/>
    </Section>
  );
};

export default Homes;
