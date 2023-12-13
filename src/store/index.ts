import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import userReducer from './user';
import basketReducer from './basket';

const getPersistConfig = (key: string, blacklist?: string[]) => {
  return {
    key: key,
    storage: AsyncStorage,
    blacklist: blacklist,
  };
};

const rootReducer = combineReducers({
  user: userReducer,
  basket: persistReducer(getPersistConfig('basket'), basketReducer),
});

const persistedReducer = persistReducer(getPersistConfig('root'), rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
