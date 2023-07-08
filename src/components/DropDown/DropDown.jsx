import React from "react";
import { useTheme } from "react-jss";
import { useDispatch } from "react-redux";

import { authStatuses } from "../../constants/authStatuses";
import { setStatus } from "../../store/slices/auth.slice";
import { useDropDownStyles } from "./DropDown.styles";

export const DropDown = ({ className }) => {
  const theme = useTheme();
  const classes = useDropDownStyles({ theme });

  const dispatch = useDispatch();

  return (
    <div
      className={className}
      onClick={() => dispatch(setStatus(authStatuses.loggedOut))}
    >
      <button type="text" className={classes.root}>
        Sign out
      </button>
    </div>
  );
};
