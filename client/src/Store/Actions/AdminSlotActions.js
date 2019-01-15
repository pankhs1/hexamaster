import { SAVE_SLOT, SET_SLOT_INFO_ADMIN, RESET_STATE } from "./Types";
import Axios from "axios";

export const createSlot = data => dispatch => {
  Axios.post("api/v1/admin/createslot", data)
    .then(({ data }) => {
      dispatch({
        type: SAVE_SLOT,
        payload: {
          saveStatus: true,
          slotError: [],
          busySlot: []
        }
      });
    })
    .catch(({ response }) => {
      const errorArr = response.data.message
        ? response.data.message.split(",")
        : ["Server Error!"];
      dispatch({
        type: SET_SLOT_INFO_ADMIN,
        payload: {
          saveStatus: false,
          slotError: errorArr
        }
      });
    });
};

export const setSlotInfo = data => dispatch => {
  dispatch({
    type: SET_SLOT_INFO_ADMIN,
    payload: { ...data }
  });
};

export const changeStatus = data => dispatch => {
  dispatch({
    type: RESET_STATE,
    payload: {}
  });
};
