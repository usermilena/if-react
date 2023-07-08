import React from "react";
import { useTheme } from "react-jss";

import { AppStoreIcon, GooglePlayIcon } from "../Icons";
import { useAppsFooterStyles } from "./AppsFooter.styles";

export const AppsFooter = () => {
  const theme = useTheme();
  const classes = useAppsFooterStyles({ theme });

  return (
    <div className={classes.root}>
      <GooglePlayIcon className={classes.googlePlay} />
      <AppStoreIcon className={classes.appStore} />
    </div>
  );
};
