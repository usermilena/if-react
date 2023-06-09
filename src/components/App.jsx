import React from "react";

import { HotelsContextProvider } from "../contexts/HotelsContext";
import { SearchContextProvider } from "../contexts/SearchContext";
import { AvailableHotels } from "../sections/AvailableHotels";
import { HomesGuestsLoves } from "../sections/HomesGuestsLoves";
import { TopSection } from "../sections/TopSection";

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
