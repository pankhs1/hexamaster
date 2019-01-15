import { REGISTER, SET_FIELDS, RESET_FIELDS } from "./Types";
import Axios from "axios";

export const signupAction = data => dispatch => {
  Axios.post("api/v1/signup", data)
    .then(data => {
      dispatch({
        type: REGISTER,
        payload: {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          RegErrors: [],
          signUpSuccess: true
        }
      });
    })
    .catch(err => {
      const errorArr = err.response.data.message.split(",");

      dispatch({
        type: REGISTER,
        payload: {
          RegErrors: errorArr
        }
      });
    });
  // dispatch({
  //   type: REGISTER,
  //   payload: {}
  // });
};

export const SetFields = data => dispatch => {
  dispatch({
    type: SET_FIELDS,
    payload: {
      data
    }
  });
};

export const ResetFields = data => dispatch => {
  dispatch({
    type: RESET_FIELDS,
    payload: {
      data
    }
  });
};
