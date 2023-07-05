import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth.slice";
import { searchHotelsReducer } from "./searchHotels.slice";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    search: searchHotelsReducer,
  })
);
