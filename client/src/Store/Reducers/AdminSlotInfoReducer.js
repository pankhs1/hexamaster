import { SET_SLOT_INFO_SHOW } from "../Actions/Types";
const initialState = {
  userSlots: [],
  startDate: new Date(),
  endDate: new Date(),
  errors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SLOT_INFO_SHOW:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
