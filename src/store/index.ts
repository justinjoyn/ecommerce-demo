import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user';
import basketReducer from './basket';

const store = configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
