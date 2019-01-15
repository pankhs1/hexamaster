import { LOGIN, LOGOUT, SET_CREDENTIALS, AUTH_CHECK } from "./Types";
import Axios from "axios";

export const login = data => dispatch => {
  Axios.post("api/v1/auth", data)
    .then(data => {
      const isAdmin = data.data.isAdmin || false;

      if (window.localStorage) {
        const obj = {
          isAdmin,
          isAuthenticated: true
        };
        localStorage.setItem("fm-auth", JSON.stringify(obj));
      }
      dispatch({
        type: LOGIN,
        payload: {
          isAuthenticated: true,
          email: "",
          password: "",
          isAdmin
        }
      });
    })
    .catch(err => {
      const errorArr = err.response.data
        ? err.response.data.message.split(",")
        : ["Server Error"];
      if (window.localStorage) {
        const obj = {
          isAdmin: false,
          isAuthenticated: false
        };
        localStorage.setItem("fm-auth", JSON.stringify(obj));
      }
      dispatch({
        type: LOGIN,
        payload: {
          isAuthenticated: false,
          AuthErrors: errorArr,
          isAdmin: false
        }
      });
    });
};

export const checkAuthState = () => dispatch => {
  if (window.localStorage) {
    const storedState = localStorage.getItem("fm-auth");
    if (storedState) {
      dispatch({
        type: AUTH_CHECK,
        payload: {
          isAuthenticated: JSON.parse(storedState).isAuthenticated,
          isAdmin: JSON.parse(storedState).isAdmin
        }
      });
    } else {
      Axios.get("api/v1/authCheck")
        .then(resp => {
          const obj = {
            isAdmin: resp.data.isAdmin || false,
            isAuthenticated: resp.data.isAuthenticated || false
          };
          localStorage.setItem("fm-auth", JSON.stringify(obj));
          dispatch({
            type: AUTH_CHECK,
            payload: {
              isAuthenticated: resp.data.isAuthenticated
            }
          });
        })
        .catch(err => {
          dispatch({
            type: AUTH_CHECK,
            payload: {}
          });
        });
    }
  }
};

export const setCredentials = data => dispatch =>
  dispatch({
    type: SET_CREDENTIALS,
    payload: data
  });

export const logout = data => dispatch => {
  Axios.post("api/v1/logout", data)
    .then(data => {
      if (window.localStorage) {
        const obj = {
          isAdmin: false,
          isAuthenticated: false
        };
        localStorage.setItem("fm-auth", JSON.stringify(obj));
      }
      dispatch({
        type: LOGOUT,
        payload: {
          isAuthenticated: false,
          isAdmin: false
        }
      });
    })
    .catch(err => {
      dispatch({
        type: LOGOUT,
        payload: {}
      });
    });
};
