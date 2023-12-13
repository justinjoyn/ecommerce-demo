import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import store from './src/store';
import {Provider} from 'react-redux';

// Create a client
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
