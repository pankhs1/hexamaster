import { SET_SLOT_INFO_SHOW } from "./Types";
import Axios from "axios";

export const getSlot = data => dispatch => {
  Axios.post("api/v1/admin/getslot", data)
    .then(({ data }) => {
      dispatch({
        type: SET_SLOT_INFO_SHOW,
        payload: { userSlots: data.userSlots }
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: SET_SLOT_INFO_SHOW,
        userSlots: [],
        error: []
      });
    });
};

export const setInfo = data => dispatch => {
  dispatch({
    type: SET_SLOT_INFO_SHOW,
    payload: {
      ...data
    }
  });
};
