import { DRAWER_TOGGLE, LOADER_TOGGLE } from "./Types";

export const toggleDrawer = data => dispatch => {
  dispatch({
    type: DRAWER_TOGGLE
  });
};
export const toggleLoader = data => dispatch => {
  dispatch({
    type: LOADER_TOGGLE,
    payload: {
      ...data
    }
  });
};
