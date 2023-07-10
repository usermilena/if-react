import React from "react";
import { useDispatch } from "react-redux";

import { authStatuses } from "../../constants/authStatuses";
import { setAuthStatus } from "../../store/actions/auth.action";
import "./DropDown.css";

export const DropDown = ({ className }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={className}
      onClick={() => dispatch(setAuthStatus(authStatuses.loggedOut))}
    >
      <button type="text" className="accont__icon--dropdown">
        Sign out
      </button>
    </div>
  );
};
