import React from "react";

import { HeaderNavigation } from "../HeaderNavigation";
import { LogoIcon } from "../Icons";

import "./TopHeader.css";

export const TopHeader = () => {
  return (
    <header className="top__header col-lg-12 col-sm-6">
      <LogoIcon className="top__header--logo" />
      <HeaderNavigation />
    </header>
  );
};
