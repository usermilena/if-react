import { createUseStyles } from "react-jss";

export const dropDownStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.text.dark,
    fontSize: 18,
    padding: 5,
    borderRadius: 8,
    width: 85,
  },
});

export const useDropDownStyles = createUseStyles(dropDownStyles, {
  name: "DropDown",
});
