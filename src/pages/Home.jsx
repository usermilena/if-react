import React from "react";

import { HotelsContextProvider } from "../contexts/HotelsContext";
import { AvailableHotels } from "../sections/AvailableHotels";
import { HomesGuestsLoves } from "../sections/HomesGuestsLoves";
import { TopSection } from "../sections/TopSection";

export const Home = () => {
  return (
    <>
      <HotelsContextProvider>
        <TopSection />
        <AvailableHotels />
      </HotelsContextProvider>
      <HomesGuestsLoves />
    </>
  );
};
