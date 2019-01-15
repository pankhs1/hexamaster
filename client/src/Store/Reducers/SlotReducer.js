import {
  BOOK_SLOT,
  SET_SLOT_INFO,
  GET_SLOT_INFO,
  RESET_STATE
} from "../Actions/Types";
const initialState = {
  name: "",
  email: "",
  doc: null,
  fileName: "",
  slotTime: "",
  contact: "",
  dateSelected: new Date(),
  modalOpen: false,
  slotSaved: false,
  slotError: [],
  slotArray: [],
  otpCreated: null,
  otpTimeout: null,
  isFetching: false,
  timeNow: new Date().getTime(),
  checkContact: "",
  checkOTP: "",
  otp: null,
  checkError: "",
  existingDate: "",
  checkInfo: false,
  checkTime: "",
  intervalId: null,
  timeLeft: "",
  availableDates: [],
  OTPError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SLOT_INFO:
      return {
        ...state,
        ...action.payload
      };

    case BOOK_SLOT:
      return {
        ...state,
        ...action.payload
      };
    case RESET_STATE:
      return {
        ...initialState,
        ...action.payload
      };
    default:
      return state;
  }
};
