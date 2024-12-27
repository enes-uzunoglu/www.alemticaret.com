import { SIGN_UP } from '../actionTypes/actionTypes';

export const signUp = (userData) => ({
  type: SIGN_UP,
  payload: userData,
});
