import React, { memo, useState } from "react";
import { useTheme } from "react-jss";

import { func, number, string } from "prop-types";

import { IconButton } from "../IconButton";
import { useAmountOptionStyles } from "./AmountOption.styles";

export const AmountOption = memo(
  ({ title, minValue, maxValue, value, setValue }) => {
    const theme = useTheme();
    const classes = useAmountOptionStyles({ theme });

    const [decraseDisabled, setDecraseDisabled] = useState(value === minValue);
    const [increaseDisabled, setIncreaseDisabled] = useState(
      value === maxValue
    );

    const decreaseOption = () => {
      if (value > minValue) {
        setValue(value - 1);
        setDecraseDisabled(false);
        setIncreaseDisabled(false);
      }

      if (value === minValue + 1) {
        setDecraseDisabled(true);
      }
    };

    const increaseOption = () => {
      if (value < maxValue) {
        setValue(value + 1);
        setDecraseDisabled(false);
        setIncreaseDisabled(false);
      }

      if (value === maxValue - 1) {
        setIncreaseDisabled(true);
      }
    };

    return (
      <div className={classes.root}>
        <p>{title}</p>
        <div className={classes.buttonsWrapper}>
          <IconButton
            text="–"
            onClick={decreaseOption}
            className={decraseDisabled ? classes.buttonDisabled : ""}
          />
          <p>{value}</p>
          <IconButton
            text="+"
            onClick={increaseOption}
            className={increaseDisabled ? classes.buttonDisabled : ""}
          />
        </div>
      </div>
    );
  }
);

AmountOption.displayName = "AmountOption";

AmountOption.propTypes = {
  title: string.isRequired,
  minValue: number.isRequired,
  maxValue: number.isRequired,
  value: number.isRequired,
  setValue: func.isRequired,
};
