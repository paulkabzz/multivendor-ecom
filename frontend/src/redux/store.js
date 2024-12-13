import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./reducers/user";

/**
 * Redux store configuration.
 */
const Store = configureStore({
  reducer: {
    user: userReducer, // Combine reducers, where 'user' is managed by userReducer
  },
});

export default Store;
