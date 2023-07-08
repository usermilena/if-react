import React from "react";
import { ThemeProvider } from "react-jss";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { Router } from "./Router";
import { lightTheme } from "./assets/styles/lightTheme";
import { Loader } from "./components/Loader";
import { persistor, store } from "./store";

export const App = () => (
  <>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={lightTheme}>
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </>
);
