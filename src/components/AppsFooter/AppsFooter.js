import React from "react";

import { AppStoreIcon, GooglePlayIcon } from "../Icons/Icons";

import "./AppsFooter.css"

const AppsFooter = () => {
  return (
    <div className="top__apps">
      <GooglePlayIcon/>
      <AppStoreIcon/>
    </div>
  );
};

export default AppsFooter;
