import React from "react";
import { Provider } from "react-redux";

import { Router } from "./Router";
import { store } from "./store";

export const App = () => (
  <>
    <Provider store={store}>
      <Router />
    </Provider>
  </>
);
