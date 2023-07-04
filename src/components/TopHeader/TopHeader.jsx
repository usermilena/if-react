import React from "react";

import { useAuth } from "../../contexts/AuthContext";
import { HeaderNavigation } from "../HeaderNavigation";
import { LogoIcon } from "../Icons";
import "./TopHeader.css";

export const TopHeader = () => {
  const { user } = useAuth();

  return (
    <header className="top__header col-lg-12 col-sm-6">
      <LogoIcon className="top__header--logo" />
      {user && <HeaderNavigation />}
    </header>
  );
};
