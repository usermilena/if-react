import React from "react";
import classNames from 'classnames';

import "./Section.css"

const Section = ({color, text, children, className}) => {
  return (
    <section className={classNames(`section ${color}`, className)}>
      {text && <h2 className="title">{text}</h2>}
      {children}
    </section>
  );
};

export default Section;
