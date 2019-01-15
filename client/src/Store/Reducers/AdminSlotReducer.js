import { SAVE_SLOT, SET_SLOT_INFO_ADMIN, RESET_STATE } from "../Actions/Types";
const initialState = {
  startDate: new Date(),
  endDate: new Date(),
  startTime: new Date(),
  endTime: new Date(),
  slotSize: 0,
  saveStatus: false,
  slotError: [],
  pickerNode: false,
  busySlot: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SLOT_INFO_ADMIN:
      return {
        ...state,
        ...action.payload
      };
    case SAVE_SLOT:
      return {
        ...initialState,
        ...action.payload
      };
    case RESET_STATE:
      return {
        ...initialState,
        busySlot: []
      };
    default:
      return state;
  }
};
