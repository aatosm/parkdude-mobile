import {
  NETWORK_ERROR, RESERVATION_FAILED, CLEAR_ERRORS,
  GENERAL_ERROR, PASSWORD_LOGIN_ERROR, SIGNUP_ERROR,
  CHANGE_PASSWORD_ERROR, DELETE_RESERVATION_FAILED, NOT_FOUND_ERROR, DELETE_RELEASE_FAILED, RELEASE_FAILED
} from './actionTypes';

export const generalError = (errorString: string) => {
  return {
    type: GENERAL_ERROR,
    payload: errorString
  };
};

export const setPasswordLoginError = (errorString: string) => {
  return {
    type: PASSWORD_LOGIN_ERROR,
    payload: errorString
  };
};

export const setSignupError = (errorString: string) => {
  return {
    type: SIGNUP_ERROR,
    payload: errorString
  };
};

export const setChangePasswordError = (errorString: string) => {
  return {
    type: CHANGE_PASSWORD_ERROR,
    payload: errorString
  };
};

export const gotNetworkError = (errorString: string) => {
  return {
    type: NETWORK_ERROR,
    payload: errorString
  };
};

export const reservationFailed = (result) => {
  return {
    type: RESERVATION_FAILED,
    payload: result
  };
};

export const releaseFailed = (result) => {
  return {
    type: RELEASE_FAILED,
    payload: result
  };
};

export const deleteReservationFailed = (result) => {
  return {
    type: DELETE_RESERVATION_FAILED,
    payload: result
  };
};

export const deleteReleaseFailed = (result) => {
  return {
    type: DELETE_RELEASE_FAILED,
    payload: result
  };
};

export const gotNotFoundError = (errorString: string) => {
  return {
    type: NOT_FOUND_ERROR,
    payload: errorString
  };
};

export const clearErrorState = () => {
  return {
    type: CLEAR_ERRORS
  };
};
