import { SEARCH } from "../../constants/actionTypes";

export const setSearchHotels = (hotels) => ({
  type: SEARCH.setSearchHotels,
  payload: hotels,
});
