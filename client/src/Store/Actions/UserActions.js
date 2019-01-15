import { FETCH_USER } from "./Types";
import Axios from "axios";

export const fetchUser = () => dispatch => {
  Axios.get("api/v1/user").then(data => {
    dispatch({
      type: FETCH_USER,
      payload: data.data.User
    });
  });
};
