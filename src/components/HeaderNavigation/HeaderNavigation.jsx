import React from "react";

import { AccountIcon, MenuIcon, ModeIcon } from "../Icons";
import "./HeaderNavigation.css";

export const HeaderNavigation = () => {
  return (
    <nav className="top__header--menu__wrapper">
      <ul className="top__header--menu">
        <li className="top__header--stays">Stays</li>
        <li className="top__header--attractions">Attractions</li>
        <li>
          <ModeIcon className="top__header--mode__icon" />
        </li>
        <li>
          <AccountIcon className="top__header--account__icon" />
        </li>
        <li>
          <MenuIcon className="top__header--menu__icon" />
        </li>
      </ul>
    </nav>
  );
};
