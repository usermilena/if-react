import React from "react";

import "./Section.css"

const Section = ({color, text, children}) => {
  return (
    <section className={`section ${color}`}>
      <h2 className="title">{text}</h2>
      {children}
    </section>
  );
};

export default Section;
