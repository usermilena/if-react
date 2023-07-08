import React, { Suspense } from "react";

import { HotelsContextProvider } from "../contexts/HotelsContext";
import { SearchContextProvider } from "../contexts/SearchContext";
import { AvailableHotels } from "../sections/AvailableHotels";
import { HomesGuestsLoves } from "../sections/HomesGuestsLoves";
import { TopSection } from "../sections/TopSection";
import { Loader } from "./Loader";

export const App = () => {
  return (
    <>
      <SearchContextProvider>
        <HotelsContextProvider>
          <TopSection />
          <Suspense fallback={<Loader />}>
            <AvailableHotels />
          </Suspense>
        </HotelsContextProvider>
      </SearchContextProvider>
      <HomesGuestsLoves />
    </>
  );
};
