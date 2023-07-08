import { createUseStyles } from "react-jss";

export const amountOptionStyles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: 215,
    justifyContent: "space-between",

    "&:nth-child(2)": {
      margin: {
        top: 12,
        bottom: 12,
      },
    },
  },
  buttonsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 108,
    justifyContent: "space-between",
  },
  buttonDisabled: {
    color: theme.palette.text.secondary,
    borderColor: theme.palette.text.secondary,
  },
});

export const useAmountOptionStyles = createUseStyles(amountOptionStyles, {
  name: "AmountOption",
});
