import {
  BOOK_SLOT,
  SET_SLOT_INFO,
  GET_SLOT_INFO,
  LOADER_TOGGLE,
  RESET_STATE
} from "./Types";
import Axios from "axios";

export const bookSlot = data => dispatch => {
  Axios.post("api/v1/bookslot", data)
    .then(data => {
      dispatch({
        type: BOOK_SLOT,
        payload: {
          slotSaved: true,
          slotError: [],
          otpCreated: null,
          otpTimeout: null,
          isFetching: false
        }
      });
    })
    .catch(({ response }) => {
      const errorArr = response.data.message
        ? response.data.message.split(",")
        : ["Server Error!"];
      dispatch({
        type: SET_SLOT_INFO,
        payload: {
          slotError: errorArr,
          isFetching: false
        }
      });
    });
};

export const checkSlot = data => dispatch => {
  Axios.post("api/v1/checkslot", data)
    .then(({ data }) => {
      const otpCreated = data.otp_created ? true : false;
      const slotSaved = otpCreated ? false : true;

      dispatch({
        type: SET_SLOT_INFO,
        payload: {
          isFetching: false,
          checkError: "",
          otpCreated: data.otp_created,
          checkInfo: false,
          checkTime: data.startTime,
          slotSaved
        }
      });
    })
    .catch(({ response }) => {
      const err =
        response.status === 500 ? "Server Error" : response.data.message;
      dispatch({
        type: SET_SLOT_INFO,
        payload: {
          isFetching: false,
          checkError: err,
          slotSaved: false,
          OTPError: false
        }
      });
    });
};

export const getSlots = data => dispatch => {
  Axios.post("api/v1/getslots", data)
    .then(({ data }) => {
      dispatch({
        type: SET_SLOT_INFO,
        payload: {
          ...data,
          slotError: [],
          isFetching: false
        }
      });
    })
    .catch(({ response }) => {
      const errorArr =
        response.status <= 500
          ? response.data.message.split(",")
          : ["Server Error  !"];

      dispatch({
        type: SET_SLOT_INFO,
        payload: {
          slotError: errorArr,
          isFetching: false,
          slotArray: [],
          OTPError: true
        }
      });
      dispatch({
        type: LOADER_TOGGLE,
        payload: {
          isLoading: false
        }
      });
    });
};

export const getOTP = data => dispatch => {
  Axios.post("api/v1/getotp", data, {
    headers: {
      accept: "application/json",
      contentType: "multipart/form-data"
    }
  })
    .then(({ data }) => {
      dispatch({
        type: BOOK_SLOT,
        payload: {
          otpCreated: data.otp_created,
          otpTimeout: data.otp_timeOut,
          slotError: [],
          isFetching: false,
          OTPError: false
        }
      });
    })
    .catch(({ response }) => {
      const errorArr =
        response.status <= 500
          ? response.data.message.split(",")
          : ["Server Error  !"];
      dispatch({
        type: SET_SLOT_INFO,
        payload: {
          slotError: errorArr,
          isFetching: false,
          OTPError: true
        }
      });
    });
};

export const setSlotInfo = data => dispatch => {
  dispatch({
    type: SET_SLOT_INFO,
    payload: { ...data }
  });
};

export const closeSnackBar = data => dispatch => {
  dispatch({
    type: SET_SLOT_INFO,
    payload: { ...data, isFetching: false }
  });
};

export const resetState = data => dispatch => {
  dispatch({
    type: RESET_STATE,
    payload: {
      slotSaved: false,
      slotError: [],
      otpCreated: null,
      otpTimeout: null,
      isFetching: false
    }
  });
};

export const resendOTP = data => dispatch => {
  Axios.post("api/v1/resend", data)
    .then(({ data }) => {
      dispatch({
        type: SET_SLOT_INFO,
        payload: {
          otpCreated: data.otp_created,
          otpTimeout: data.otp_timeOut,
          slotError: []
        }
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: SET_SLOT_INFO,
        payload: {
          slotSaved: false,
          slotError: ["Error Sending OTP"],
          otpCreated: 1,
          otpTimeout: null
        }
      });
    });
};

export const getAvailableSlot = () => dispatch => {
  Axios.get("api/v1/getslotdate")
    .then(({ data }) => {
      dispatch({
        type: SET_SLOT_INFO,
        payload: {
          ...data
        }
      });
    })
    .catch(({ response }) => {});
};
