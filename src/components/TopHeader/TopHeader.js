import React from "react";

import { LogoIcon } from "../Icons/Icons";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

import "./TopHeader.css"

const TopHeader = () => {
  return (
    <header className="top__header col-lg-12 col-sm-6">
      <LogoIcon/>
      <HeaderNavigation/>
    </header>
  );
};

export default TopHeader;
