// src/store/thunks/shoppingCartThunks.js
import { setCart } from '../actions/shoppingCartActions';

export const updateCartThunk = (cart) => {
  return (dispatch) => {
    dispatch(setCart(cart));
  };
};
