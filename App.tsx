import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

import {store} from './src/store';
import DrawerNavigator from './src/navigation/drawer';
import {StartupGate} from './src/components/StartupGate';
import ErrorBoundary from './src/components/ErrorBoundary';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <GestureHandlerRootView style={styles.container}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ApplicationProvider {...eva} theme={eva.light}>
              <SafeAreaProvider>
                <ErrorBoundary>
                  <StartupGate>
                    <NavigationContainer>
                      <DrawerNavigator />
                    </NavigationContainer>
                  </StartupGate>
                </ErrorBoundary>
              </SafeAreaProvider>
            </ApplicationProvider>
          </QueryClientProvider>
        </Provider>
      </GestureHandlerRootView>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
