import React, { Component } from "react";

import { HotelsList } from "../../components/HotelsList";
import { Section } from "../../components/Section";

import { getData } from "../../services/getData";
import { popularHotelsUrl } from "../../services/urls";

export class HomesGuestsLovesClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popularHotels: [],
    };
  }

  componentDidMount() {
    getData(popularHotelsUrl).then((popularHotels) =>
      this.setState({ popularHotels })
    );
  }

  render() {
    const { popularHotels } = this.state;

    return (
      <Section className="bgColor" text="Homes guests loves">
        <HotelsList data={popularHotels} />
      </Section>
    );
  }
}
