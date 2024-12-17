// loginReducer.js

import { USER_SET } from '../actions/loginActions/setUser';
import { LOGIN_ERROR } from '../actions/loginActions/setLoginError';

const initialState = {
    user: null,  // Kullanıcı bilgilerini tutacağız
    error: null,  // Hata mesajlarını tutacağız
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SET:
            return {
                ...state,
                user: action.payload,  // Kullanıcıyı Redux state'ine ekliyoruz
                error: null,  // Hata varsa temizliyoruz
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,  // Hata mesajını Redux state'ine kaydediyoruz
            };
        default:
            return state;
    }
};

export default loginReducer;
