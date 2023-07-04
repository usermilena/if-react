import { authReducer } from "./auth.reducer";
import { searchHotelsReducer } from "./searchHotels.reducer";

export const rootReducer = {
  auth: authReducer,
  search: searchHotelsReducer,
};
