import React, { useState } from "react";

import { AvailableHotelsClass } from "../sections/AvailableHotelsClass";
import { HomesGuestsLovesClass } from "../sections/HomesGuestsLovesClass";
import { TopSection } from "../sections/TopSection";

export const App = () => {
  const [destinationInputValue, setDestinationInputValue] = useState("");
  const [hotels, setHotels] = useState([]);
  return (
    <>
      <TopSection
        destinationInputValue={destinationInputValue}
        setDestinationInputValue={setDestinationInputValue}
        setHotels={setHotels}
      />
      <AvailableHotelsClass hotels={hotels} />
      <HomesGuestsLovesClass />
    </>
  );
};
