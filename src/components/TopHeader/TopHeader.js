import React from "react";

import "./TopHeader.css"

import LogoIcon from "../SVG/LogoIcon/LogoIcon";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

const TopHeader = () => {
  return (
    <header className="top__header col-lg-12 col-sm-6">
      <LogoIcon/>
      <HeaderNavigation/>
    </header>
  );
};

export default TopHeader;
