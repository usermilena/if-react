import React from "react";

import classNames from "classnames";

import "./Section.css";

const Section = ({ text, children, className }) => {
  return (
    <section className={classNames("section", className)}>
      {text && <h2 className="title">{text}</h2>}
      {children}
    </section>
  );
};

export default Section;
