import * as Actions from './constants';
import { batch } from 'react-redux';
import { USER_TOKEN_KEY } from 'src/constants';
import LocalStorageService from 'src/services/LocalStorageService';
import AuthService from './service';

// another actions.
import { showAlert } from '../alert/actions';

// export const setAuthToken = (token) => ({
//   type: Actions.SET_AUTH_TOKEN,
//   payload: token,
// });

/**
 * ------------------------
 * Login action
 * ------------------------
 * */
export const loginRequest = () => ({
  type: Actions.LOGIN_REQUEST,
});

export const loginFailure = (errorMessage) => ({
  type: Actions.LOGIN_FAILURE,
  payload: errorMessage,
});

export const loginSuccess = (token) => ({
  type: Actions.LOGIN_SUCCESS,
  payload: token,
});

export const login = (data) => {
  return async (dispatch) => {
    let errMessage = 'Login failed';
    dispatch(loginRequest());
    try {
      const response = await AuthService.login(data);
      console.log(response);
      if (response.status === 200) {
        // response ok.
        let { token } = response.data.data;
        LocalStorageService.setItem(USER_TOKEN_KEY, token);
        dispatch(loginSuccess(token));
      }
    } catch (e) {
      if (e.response !== undefined) {
        if (e.response.status === 422) {
          errMessage = 'Username / Password yang anda masukan salah';
          dispatch(loginFailure(errMessage));
          batch(() => {
            dispatch(
              showAlert({
                message: errMessage,
                severity: 'error',
              }),
            );
          });
        } else {
          dispatch(loginFailure(errMessage));
        }
      } else {
        dispatch(loginFailure(errMessage));
      }
    }
  };
};

/**
 * ------------------------
 * Register action
 * ------------------------
 * */

export const registerRequest = () => ({
  type: Actions.REGISTER_REQUEST,
});

export const registerFailure = (errorMessage) => ({
  type: Actions.REGISTER_FAILURE,
  payload: errorMessage,
});

export const registerSuccess = () => ({
  type: Actions.REGISTER_SUCCESS,
});

export const resetRegisterState = () => ({
  type: Actions.RESET_REGISTER_STATE,
});

export const register = (data) => {
  return async (dispatch) => {
    let errMessage = 'Register failed';
    dispatch(registerRequest());
    try {
      const response = await AuthService.register(data);
      console.log(response);
      if (response.status === 200) {
        dispatch(registerSuccess());
      }
    } catch (e) {
      if (e.response !== undefined) {
        console.log(e.response);
        if (e.response.status === 422) {
          errMessage = 'Unprocessable entity';
          batch(() => {
            dispatch(registerFailure(errMessage));
            dispatch(
              showAlert({
                message: errMessage,
                severity: 'error',
              }),
            );
          });
        }
      } else {
        batch(() => {
          dispatch(registerFailure(errMessage));
          dispatch(
            showAlert({
              message: errMessage,
              severity: 'error',
            }),
          );
        });
      }
    }
  };
};
