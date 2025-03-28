// src/redux/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null, // Store user data here when logged in
};

// Redux slice to manage user authentication state
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set user data when logged in
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // Set user details
    },
    // Action to logout the user
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null; // Clear user data
    },
  },
});

// Export actions and reducer
export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
