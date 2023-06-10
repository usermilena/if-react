import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

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
          <Suspense fallback={<Skeleton />}>
            <AvailableHotels />
          </Suspense>
        </HotelsContextProvider>
      </SearchContextProvider>
      <HomesGuestsLoves />
    </>
  );
};
