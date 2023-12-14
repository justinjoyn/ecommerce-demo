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
import {PersistPartial} from 'redux-persist/es/persistReducer';

import userReducer from './user';
import basketReducer, {basketListenerMiddleware} from './basket';

const getPersistConfig = (key: string, blacklist?: string[]) => {
  return {
    key: key,
    storage: AsyncStorage,
    blacklist: blacklist,
  };
};

export const rootReducer = combineReducers({
  user: userReducer,
  basket: persistReducer(getPersistConfig('basket'), basketReducer),
});

const persistedReducer = persistReducer(getPersistConfig('root'), rootReducer);

export function setupStore(preloadedState?: RootState & PersistPartial) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState: preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore redux-persist action types
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).prepend(basketListenerMiddleware.middleware),
  });
}

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
