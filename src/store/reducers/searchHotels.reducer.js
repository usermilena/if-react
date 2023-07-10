import { SEARCH } from "../../constants/actionTypes";
import { INITIAL_STATE } from "../../constants/initialState";

export const searchHotelsReducer = (state = INITIAL_STATE.search, action) => {
  switch (action.type) {
    case SEARCH.setSearchHotels:
      return { ...state, hotels: action.payload };
    default:
      return state;
  }
};
