import React from "react";

import { AvailableHotels } from "../sections/AvailableHotels";
import { HomesGuestsLoves } from "../sections/HomesGuestsLoves";
import { TopSection } from "../sections/TopSection";

import { HotelsContextProvider } from "../contexts/HotelsContext";
import { SearchContextProvider } from "../contexts/SearchContext";

export const App = () => {
  return (
    <>
      <SearchContextProvider>
        <HotelsContextProvider>
          <TopSection />
          <AvailableHotels />
        </HotelsContextProvider>
      </SearchContextProvider>
      <HomesGuestsLoves />
    </>
  );
};
