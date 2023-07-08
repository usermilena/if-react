import React from "react";
import { useTheme } from "react-jss";

import { func } from "prop-types";

import { useCustomButtonStyles } from "./CustomButton.styles";

export const CustomLeftArrow = ({ onClick }) => {
  const theme = useTheme();
  const classes = useCustomButtonStyles({ theme });

  return (
    <div
      onClick={() => onClick()}
      className={`${classes.root} ${classes.left}`}
    >
      <div className={classes.arrow}></div>
    </div>
  );
};

export const CustomRightArrow = ({ onClick }) => {
  const theme = useTheme();
  const classes = useCustomButtonStyles({ theme });

  return (
    <div
      onClick={() => onClick()}
      className={`${classes.root} ${classes.right}`}
    >
      <div className={classes.arrow}></div>
    </div>
  );
};

CustomLeftArrow.propTypes = {
  onClick: func,
};

CustomRightArrow.propTypes = {
  onClick: func,
};
