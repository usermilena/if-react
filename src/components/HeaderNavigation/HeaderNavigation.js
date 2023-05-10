import React from "react";

import { AccountIcon, MenuIcon, ModeIcon } from "../Icons/Icons";

import "./HeaderNavigation.css"

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
