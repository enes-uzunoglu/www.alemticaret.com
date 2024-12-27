import { signUp } from '../actions/signUpActions';
import axios from 'axios';

export const signUpThunk = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/signup', userData);
    dispatch(signUp(response.data)); // Başarılı yanıtı dispatch et
  } catch (error) {
    console.error('Sign up error:', error);
    throw error; // Hata durumunda hatayı fırlat
  }
};
