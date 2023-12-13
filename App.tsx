import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {store} from './src/store';
import {Provider} from 'react-redux';
import RootStackNavigator from './src/common/navigation';
import {StartupGate} from './src/components/StartupGate';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <StartupGate>
              <NavigationContainer>
                <RootStackNavigator />
              </NavigationContainer>
            </StartupGate>
          </ApplicationProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
