import { FETCH_SLOT } from "../Actions/Types";
const initialState = {
  slotArray: [],
  isFetching: true,
  errors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SLOT:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
