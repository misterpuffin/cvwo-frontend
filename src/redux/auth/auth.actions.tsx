import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  CLEAR_ERROR,
  SET_ERROR
} from "./auth.types";

import { AuthAPI } from "../../api"

export const register = (name: string, email: string, password: string) => (dispatch: any) => {
  dispatch({
    type: SET_MESSAGE,
    payload: "loading",
  });
  return AuthAPI.register(name, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: "Successfully registered user",
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_ERROR
      })

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (email: string, password: string) => (dispatch: any) => {
  dispatch({
    type: SET_MESSAGE,
    payload: "loading",
  });
  return AuthAPI.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      dispatch({
        type: CLEAR_ERROR
      })

      dispatch({
        type: SET_MESSAGE,
        payload: "Successfully logged in",
      });

      return Promise.resolve();
    })
    .catch(
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_ERROR,
      })

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch: any) => {
  AuthAPI.logout();

  dispatch({
    type: LOGOUT,
  });
};