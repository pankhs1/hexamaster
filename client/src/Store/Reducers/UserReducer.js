import { FETCH_USER } from "../Actions/Types";
const initialState = { User: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
