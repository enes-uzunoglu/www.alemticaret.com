// loginThunk.js
import axios from 'axios';
import { setUser } from '../actions/loginActions/setUser';
import { setLoginError } from '../actions/loginActions/setLoginError';  // Action'ları import ediyoruz

export const loginThunk = (credentials) => async (dispatch) => {
    try {
        const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/login', credentials, {
            headers: { 'Content-Type': 'application/json' },
        });

        const user = response.data;  // API'den gelen kullanıcı bilgilerini alıyoruz

        // Kullanıcı bilgilerini Redux store'a eklemek için USER_SET action'ını dispatch ediyoruz
        dispatch(setUser(user));

        return user;
    } catch (error) {
        // Eğer hata olursa, LOGIN_ERROR action'ı ile hata mesajını store'a kaydediyoruz
        if (error.response) {
            dispatch(setLoginError(error.response.data.message || 'Geçersiz email ya da şifre'));
        } else if (error.request) {
            dispatch(setLoginError('Sunucuya bağlanırken bir hata oluştu'));
        } else {
            dispatch(setLoginError(error.message));
        }

        throw error;  // Hata mesajını fırlatıyoruz ki, hata işleme mekanizmalarına ulaşabilelim
    }
};
