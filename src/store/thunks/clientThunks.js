// src/store/thunks/clientThunks.js
import { setRoles } from '../actions/clientActions';
import axios from 'axios';

export const fetchRolesThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://example.com/api/roles'); // Gerçek API endpoint'i ile değiştirin
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };
};
