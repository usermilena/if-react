import { authReducer } from "./auth.slice";
import { searchHotelsReducer } from "./searchHotels.slice";

export const rootReducer = {
  auth: authReducer,
  search: searchHotelsReducer,
};
