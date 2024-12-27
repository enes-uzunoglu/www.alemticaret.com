// src/store/actions/clientActions.js
import axios from 'axios';

export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

export const setRoles = (roles) => ({
  type: 'SET_ROLES',
  payload: roles,
});

export const setTheme = (theme) => ({
  type: 'SET_THEME',
  payload: theme,
});

export const setLanguage = (language) => ({
  type: 'SET_LANGUAGE',
  payload: language,
});

// Thunk action creator for fetching roles
export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://example.com/api/roles'); // API endpoint
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };
};
