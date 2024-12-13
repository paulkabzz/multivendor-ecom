import { createReducer } from "@reduxjs/toolkit";

// Initial state for the user reducer
const initialState = {
  isAuthenticated: false, // Indicates if the user is authenticated or not
  loading: false, // Indicates if user data is being loaded
  user: null, // Holds user data if authenticated
  error: null, // Holds any error messages
};

/**
 * Redux reducer to manage user state.
 *
 * @param {Object} state - Current state of the user reducer.
 * @param {Object} action - Action dispatched to the reducer.
 * @returns {Object} - New state after applying the action.
 */
export const userReducer = createReducer(initialState, (builder) => {
  builder
    // Action to indicate user data loading is in progress
    .addCase("LoadUserRequest", (state) => {
      state.loading = true;
    })
    // Action to handle successful user data retrieval
    .addCase("LoadUserSuccess", (state, action) => {
      state.isAuthenticated = true; // User is authenticated
      state.loading = false; // Loading finished
      state.user = action.payload; // Set user data
      state.error = null; // Clear any previous error
    })
    // Action to handle failure in user data retrieval
    .addCase("LoadUserFail", (state, action) => {
      state.isAuthenticated = false; // User is not authenticated
      state.loading = false; // Loading finished
      state.error = action.payload; // Set error message
    })
    // Action to clear any errors
    .addCase("clearErrors", (state) => {
      state.error = null; // Clear error message
    });
});
