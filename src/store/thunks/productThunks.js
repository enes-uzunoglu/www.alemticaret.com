// src/store/thunks/productThunks.js
import { setCategories, setProductList, setTotal, setFetchState } from '../actions/productActions';
import axios from 'axios';
 
export const fetchProductsThunk = () => {
  return async (dispatch) => {
    dispatch(setFetchState('FETCHING'));
    try {
      const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/products'); // Gerçek API endpoint'i ile değiştirin
      dispatch(setProductList(response.data));
      dispatch(setTotal(response.data.length));
      dispatch(setFetchState('FETCHED'));
    } catch (error) {
      console.error('Error fetching products:', error);
      dispatch(setFetchState('FAILED')); 
    }
  };
}; 

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
      const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/categories");
      dispatch(setCategories(response.data));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Error fetching categories:", error);
      dispatch(setFetchState("ERROR"));
    }
  };
};

