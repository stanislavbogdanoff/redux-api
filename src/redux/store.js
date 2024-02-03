import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

import { userApi } from "./services/userApi";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware]),
});

export default store;
