// src/store/thunks/productThunks.js
import { setCategories, setProductList, setTotal, setFetchState } from '../actions/productActions';
import axios from 'axios';

export const fetchProductsThunk = () => {
  return async (dispatch) => {
    dispatch(setFetchState('FETCHING'));
    try {
      const response = await axios.get('https://example.com/api/products'); // Gerçek API endpoint'i ile değiştirin
      dispatch(setProductList(response.data));
      dispatch(setTotal(response.data.length));
      dispatch(setFetchState('FETCHED'));
    } catch (error) {
      console.error('Error fetching products:', error);
      dispatch(setFetchState('FAILED'));
    }
  };
};
