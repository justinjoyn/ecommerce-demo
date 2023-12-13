import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import store from './src/store';
import {Provider} from 'react-redux';
import RootStackNavigator from './src/common/navigation';

// Create a client
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
