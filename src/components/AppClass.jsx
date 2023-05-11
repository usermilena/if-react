import React, { Component } from "react";

import { AvailableHotelsClass } from "../sections/AvailableHotelsClass";
import { HomesGuestsLovesClass } from "../sections/HomesGuestsLovesClass";
import { TopSection } from "../sections/TopSection";

export class AppClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destinationInputValue: "",
      hotels: [],
    };
  }

  setDestinationInputValue = (destinationInputValue) => {
    this.setState({ destinationInputValue });
  };

  setHotels = (hotels) => {
    this.setState({ hotels });
  };

  render() {
    const { destinationInputValue, hotels } = this.state;
    return (
      <>
        <TopSection
          destinationInputValue={destinationInputValue}
          setDestinationInputValue={this.setDestinationInputValue}
          setHotels={this.setHotels}
        />
        <AvailableHotelsClass hotels={hotels} />
        <HomesGuestsLovesClass />
      </>
    );
  }
}
