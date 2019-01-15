import { REGISTER, SET_FIELDS, RESET_FIELDS } from "../Actions/Types";
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  RegErrors: [],
  signUpSuccess: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        ...action.payload
      };
    case SET_FIELDS:
      return {
        ...state,
        ...action.payload.data
      };
    case RESET_FIELDS:
      return {
        ...state,
        ...action.payload.data
      };
    default:
      return state;
  }
};
