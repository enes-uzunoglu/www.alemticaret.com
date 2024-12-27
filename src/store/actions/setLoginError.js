// userActions.js

export const LOGIN_ERROR = 'LOGIN_ERROR';

export const setLoginError = (errorMessage) => ({
    type: LOGIN_ERROR,
    payload: errorMessage,  // Hata mesajını payload olarak gönderiyoruz
});
