import { DRAWER_TOGGLE, LOADER_TOGGLE } from "../Actions/Types";
const initialState = {
  mobileOpen: false,
  showSnack: false,
  snackMessage: "",
  questionCollapse: false,
  timeCollapse: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_TOGGLE:
      return {
        ...state,
        mobileOpen: !state.mobileOpen
      };
    case LOADER_TOGGLE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
