import React, { createContext, useContext, useState } from "react";

import { node } from "prop-types";

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

SearchContextProvider.propTypes = {
  children: node.isRequired,
};
