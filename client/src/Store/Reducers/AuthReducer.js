import { LOGIN, SET_CREDENTIALS, AUTH_CHECK, LOGOUT } from "../Actions/Types";
if (window.localStorage) {
  localStorage.getItem("fm-auth")
    ? null
    : localStorage.setItem(
        "fm-auth",
        JSON.stringify({
          isAuthenticated: false,
          isAdmin: false
        })
      );
}
const localState = window.localStorage
  ? JSON.parse(localStorage.getItem("fm-auth"))
  : {
      isAuthenticated: false,
      isAdmin: false
    };
const initialState = {
  AuthErrors: [],
  email: "",
  password: "",
  ...localState
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload
      };
    case SET_CREDENTIALS:
      return {
        ...state,
        ...action.payload
      };
    case AUTH_CHECK:
      return {
        ...state,
        ...action.payload
      };
    case LOGOUT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
