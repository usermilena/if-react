import React from "react";
import { useTheme } from "react-jss";

import { string, func } from "prop-types";

import { useButtonStyles } from "./Button.styles";

export const Button = ({ onClick, text }) => {
  const theme = useTheme();
  const classes = useButtonStyles({ theme });

  return (
    <button type="button" onClick={onClick} className={classes.root}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: func,
  text: string,
  className: string,
};
