import { configureStore } from '@reduxjs/toolkit'
import {gifhyApi} from "./services/gifhy.js";

export const store = configureStore({
  reducer: {
	// Add the generated reducer as a specific top-level slice
	[gifhyApi.reducerPath]: gifhyApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
	getDefaultMiddleware().concat(gifhyApi.middleware),
})