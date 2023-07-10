import { authStatuses } from "./authStatuses";

export const INITIAL_STATE = {
  auth: {
    status: authStatuses.loggedOut,
  },
  search: {
    hotels: null,
  },
};
