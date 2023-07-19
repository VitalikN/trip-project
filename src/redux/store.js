import { configureStore } from '@reduxjs/toolkit';

import { weatherApi } from './weatherApi';

const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
      },
    }).concat(weatherApi.middleware),
});


export default store;
