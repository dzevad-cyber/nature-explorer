import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import api from './middlewares/apiMiddleware';
import toursReducer from './tours/toursSlice';

export default configureStore({
  reducer: {
    tours: toursReducer,
  },
  middleware: [...getDefaultMiddleware(), api],
});
