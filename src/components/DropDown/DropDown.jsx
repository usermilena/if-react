import React from "react";

import { useAuth } from "../../contexts/AuthContext";
import "./DropDown.css";

export const DropDown = ({ className }) => {
  const { logout } = useAuth();

  return (
    <div className={className} onClick={logout}>
      <button type="text" className="accont__icon--dropdown">
        Sign out
      </button>
    </div>
  );
};
