import React, { Component } from "react";

import { HotelsList } from "../../components/HotelsList";
import { Section } from "../../components/Section";

import "./AvailableHotels.css";

export class AvailableHotelsClass extends Component {
  render() {
    const { hotels } = this.props;
    const showHotels = !!hotels.length;

    return (
      <>
        {showHotels && (
          <Section
            text="Available hotels"
            className="available__hotels bgColor"
          >
            <HotelsList data={hotels} className="available__hotels--list" />
          </Section>
        )}
      </>
    );
  }
}
