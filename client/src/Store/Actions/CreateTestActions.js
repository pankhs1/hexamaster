import { FETCH_QUES, UPDATE_TEST } from "./Types";
import Axios from "axios";
export const updateTest = data => dispatch => {
  dispatch({
    type: UPDATE_TEST,
    payload: {
      ...data
    }
  });
};

export const fetchQues = data => dispatch => {
  //   Axios.get("api/v1/getQues");
  console.log(data);
  dispatch({
    type: FETCH_QUES,
    payload: {
      ...data
    }
  });
};
