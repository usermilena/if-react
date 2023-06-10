import React, { createContext, useContext, useState } from "react";

import { node } from "prop-types";

const HotelsContext = createContext({
  hotels: [],
  setHotels: () => {},
});

export const HotelsContextProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);

  return (
    <HotelsContext.Provider value={{ hotels, setHotels }}>
      {children}
    </HotelsContext.Provider>
  );
};

export const useHotelsContext = () => useContext(HotelsContext);

HotelsContextProvider.propTypes = {
  children: node.isRequired,
};
