import React from "react";

import "./AppsFooter.css"

import AppStoreIcon from "../SVG/AppStoreIcon/AppStoreIcon";
import GooglePlayIcon from "../SVG/GooglePlayIcon/GooglePlayIcon";

const AppsFooter = () => {
  return (
    <div className="top__apps">
      <GooglePlayIcon/>
      <AppStoreIcon/>
    </div>
  );
};

export default AppsFooter;
