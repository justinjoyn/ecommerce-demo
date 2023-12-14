/* eslint-disable no-undef -- otherwise ESLint complains about `jest` global */

// Provides extra matchers like `expect(...).toHaveTextContent()`
import '@testing-library/jest-native/extend-expect';

// Mock react-native-safe-area-context
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// Mocks FlashList
require('@shopify/flash-list/jestSetup');

// We don not have a native emitter in a Jest environment, so disabling
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

// Mock redux persist
jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
    persistStore: jest.fn().mockImplementation(() => {
      return {
        purge: jest.fn(),
      };
    }, []),
  };
});

// Mock react navigation
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(() => ({})),
  };
});

// Mock FlashList
jest.mock('@shopify/flash-list', () => {
  const React = require('react');
  const ActualFlashList = jest.requireActual('@shopify/flash-list').FlashList;
  return {
    ...jest.requireActual('@shopify/flash-list'),
    FlashList: props => (
      <ActualFlashList
        {...props}
        estimatedListSize={{height: 1000, width: 400}}
        horizontal={false}
      />
    ),
  };
});
