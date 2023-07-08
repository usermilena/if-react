import { createUseStyles } from "react-jss";

import { mobileBreak, tabletBreak } from "../../assets/styles/breakPoints";

export const buttonStyles = (theme) => ({
  root: {
    fontSize: 24,
    fontWeight: 500,
    color: theme.palette.text.light,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 8,
    padding: {
      top: 18,
      bottom: 18,
    },
    width: "16%",
    cursor: "pointer",
  },
  [mobileBreak]: {
    root: {
      fontSize: 19,
      borderRadius: 4,
      padding: {
        top: 14,
        bottom: 14,
      },
      width: "100%",
      flex: 1,
    },
  },
  [tabletBreak]: {
    root: {
      fontSize: 22,
      borderRadius: 4,
      padding: {
        top: 14,
        bottom: 14,
      },
      width: "100%",
      flex: 1,
    },
  },
});

export const useButtonStyles = createUseStyles(buttonStyles, {
  name: "Button",
});
