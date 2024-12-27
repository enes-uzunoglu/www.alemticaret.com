import { SIGN_UP } from '../actionTypes/signUpActionTypes';

export const signUp = (userData) => ({
  type: SIGN_UP,
  payload: userData,
});
