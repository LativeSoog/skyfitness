import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from './coursesSlice'
import { coursesApi } from './services'

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware),
})
