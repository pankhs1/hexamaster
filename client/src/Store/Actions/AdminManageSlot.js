import { FETCH_SLOT } from "./Types";
import Axios from "axios";

export const getSlot = data => dispatch => {
  Axios.get("api/v1/admin/getallslot")
    .then(({ data }) => {
      dispatch({
        type: FETCH_SLOT,
        payload: {
          slotArray: data.slotList,
          isFetching: false
        }
      });
    })
    .catch(({ response }) => {
      const errorArr = response.data.message
        ? response.data.message.split(",")
        : ["Server Error!"];
      dispatch({
        type: FETCH_SLOT,
        payload: {
          isFetching: false,
          slotArr: []
        }
      });
    });
};

export const deleteSlot = data => dispatch => {
  Axios.post("api/v1/admin/deleteslot", data)
    .then(({ data }) => {
      dispatch({
        type: FETCH_SLOT,
        payload: {
          deleted: true,
          slotArray: data.slotList
        }
      });
    })
    .catch(({ response }) => {
      const errorArr = response.data.message
        ? response.data.message.split(",")
        : ["Server Error!"];
      dispatch({
        type: FETCH_SLOT,
        payload: {
          deleted: false
        }
      });
    });
};
