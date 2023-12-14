import React, {PropsWithChildren} from 'react';
import {render} from '@testing-library/react-native';
import type {RenderOptions} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {PersistPartial} from 'redux-persist/es/persistReducer';

import type {AppStore, RootState} from '../store';
import {setupStore} from '../store';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: RootState;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  preloadedState?: RootState & PersistPartial,
  {
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
