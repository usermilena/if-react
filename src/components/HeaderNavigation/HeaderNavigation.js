import React from "react";

import "./HeaderNavigation.css"

import AccountIcon from "../SVG/AccountIcon/AccountIcon";
import MenuIcon from "../SVG/MenuIcon/MenuIcon";
import ModeIcon from "../SVG/ModeIcon/ModeIcon";

const HeaderNavigation = () => {
  return (
    <nav className="top__header--menu__wrapper">
      <ul className="top__header--menu">
        <li className="top__header--stays">Stays</li>
        <li className="top__header--attractions">Attractions</li>
        <li>
          <ModeIcon/>
        </li>
        <li>
          <AccountIcon/>
        </li>
        <li>
          <MenuIcon/>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
