import React, { useState } from "react";

import AvailableHotels from "../sections/AvailableHotels/AvailableHotels";
import Homes from "../sections/Homes";
import Top from "../sections/Top";

const App = () => {
  let [isVisible, setIsVisible] = useState(false);
  let [destinationInputValue, setDestinationInputValue] = useState('');

  return (
    <>
      <Top setIsVisible={setIsVisible} destinationInputValue={destinationInputValue} setDestinationInputValue={setDestinationInputValue}/>
      <AvailableHotels isVisible={isVisible} destinationInputValue={destinationInputValue}/>
      <Homes/>
    </>
  );
};

export default App;
