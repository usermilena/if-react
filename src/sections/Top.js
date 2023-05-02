import React from "react";

import AppsFooter from "../components/AppsFooter/AppsFooter";
import Section from "../components/Section/Section";
import TopHeader from "../components/TopHeader/TopHeader";
import TopMain from "../components/TopMain/TopMain";

const Top = ({ setIsVisible,destinationInputValue,setDestinationInputValue }) => {
  return (
    <Section color="top">
      <TopHeader/>
      <TopMain setIsVisible={setIsVisible} destinationInputValue={destinationInputValue} setDestinationInputValue={setDestinationInputValue}/>
      <AppsFooter/>
    </Section>
  );
};

export default Top;
