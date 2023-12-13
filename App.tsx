import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {store} from './src/store';
import {Provider} from 'react-redux';
import RootStackNavigator from './src/common/navigation';
import {StartupGate} from './src/components/StartupGate';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StartupGate>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </StartupGate>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
