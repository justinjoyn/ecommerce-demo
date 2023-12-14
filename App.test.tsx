import 'react-native';
import React from 'react';
import App from './App';
import {it} from '@jest/globals';

import {renderWithProviders} from './src/utils/reduxTest';

it('renders correctly', () => {
  renderWithProviders(<App />);
});
