import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "../../constants/initialState";

const searchHotelsSlice = createSlice({
  name: "searchHotels",
  initialState: INITIAL_STATE.search,
  reducers: {
    set: (state, action) => ({ ...state, hotels: action.payload }),
  },
});

export const { set } = searchHotelsSlice.actions;
export const searchHotelsReducer = searchHotelsSlice.reducer;
