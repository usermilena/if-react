import React from "react";

import "./App.css";

import Title from "../Title/Title";
import List from "../List/List";

import { data } from "../../data";

const App = () => {
  return (
    <>
      <section className="homes">
        <Title text="Homes guests loves"></Title>
        <List data={data}></List>
      </section>
    </>
  );
};

export default App;
