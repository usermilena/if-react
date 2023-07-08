import { createUseStyles } from "react-jss";

import { mobileBreak } from "../../assets/styles/breakPoints";

export const custombuttonStyles = (theme) => ({
  root: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: theme.palette.background.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "30%",
    boxShadow: {
      y: 4,
      blur: 4,
      color: "rgba(0, 0, 0, 0.25)",
    },
    cursor: "pointer",

    "&$left": {
      left: 0,
      transform: "rotate(180deg)",
    },
    "&$right": {
      right: 0,
    },
  },
  arrow: {
    borderRadius: 2,
    borderStyle: "solid",
    borderColor: theme.palette.text.dark,
    borderWidth: "0 2px 2px 0",
    padding: 5,
    transform: "rotate(-45deg)",
    position: "absolute",
    left: 11.5,
  },
  [mobileBreak]: {
    root: {
      width: 28,
      height: 28,
      right: 0,
      top: "22%",
    },
    arrow: {
      height: 13,
      width: 5,
    },
  },
  left: {},
  right: {},
});

export const useCustomButtonStyles = createUseStyles(custombuttonStyles, {
  name: "CustomButton",
});
