import React, {PropsWithChildren, ReactNode} from 'react';
import {render} from '@testing-library/react-native';
import type {RenderOptions} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {PersistPartial} from 'redux-persist/es/persistReducer';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import type {AppStore, RootState} from '../store';
import {setupStore} from '../store';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: RootState;
  store?: AppStore;
}

// This function is a wrapper around RTL's render function, but with the store
// and other things from the Redux store.
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

// This functions wraps the children in UI-Kitten's ApplicationProvider and
// IconRegistry. This is useful for testing components that use UI-Kitten.
export function uiKittenWrapper(children: ReactNode): JSX.Element {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {children}
      </ApplicationProvider>
    </>
  );
}
