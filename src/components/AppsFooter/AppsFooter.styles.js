import { createUseStyles } from "react-jss";

import { mobileBreak, tabletBreak } from "../../assets/styles/breakPoints";

// eslint-disable-next-line
export const appsFooterStyles = ({ theme }) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: 120,
  },
  googlePlay: {
    width: 135,
    height: 40,
    margin: {
      right: 17,
    },
    cursor: "pointer",
  },
  appStore: {
    width: 120,
    height: 40,
    cursor: "pointer",
  },
  [mobileBreak]: {
    root: {
      margin: {
        top: 32,
      },
    },
  },
  [tabletBreak]: {
    root: {
      margin: {
        top: 32,
      },
    },
  },
});

export const useAppsFooterStyles = createUseStyles(appsFooterStyles, {
  name: "AppsFooter",
});
