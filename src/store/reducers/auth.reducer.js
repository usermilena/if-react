import { AUTH } from "../../constants/actionTypes";
import { INITIAL_STATE } from "../../constants/initialState";

export const authReducer = (state = INITIAL_STATE.auth, action) => {
  switch (action.type) {
    case AUTH.setStatus:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
