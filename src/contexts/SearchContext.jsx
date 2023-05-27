import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext({
  destinationInputValue: "",
  setDestinationInputValue: () => {},
});

export const SearchContextProvider = ({ children }) => {
  const [destinationInputValue, setDestinationInputValue] = useState("");

  return (
    <SearchContext.Provider
      value={{ destinationInputValue, setDestinationInputValue }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
