import React from "react";

import { AppsFooter } from "../../components/AppsFooter";
import { Section } from "../../components/Section";
import { TopHeader } from "../../components/TopHeader";
import { TopMain } from "../../components/TopMain";

export const TopSection = ({
  destinationInputValue,
  setDestinationInputValue,
  setHotels,
}) => {
  return (
    <Section className="top">
      <TopHeader />
      <TopMain
        destinationInputValue={destinationInputValue}
        setDestinationInputValue={setDestinationInputValue}
        setHotels={setHotels}
      />
      <AppsFooter />
    </Section>
  );
};
