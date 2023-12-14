import React from 'react';
import BasketTotal from './BasketTotal';
import {fromPartial} from '@total-typescript/shoehorn';
import {renderWithProviders, uiKittenWrapper} from '../utils/testing';

// Mock data for the store
const mockStore = {
  totalPrice: 1234.5,
};

test('renders basket total', () => {
  const {getByText} = renderWithProviders(
    uiKittenWrapper(<BasketTotal />),
    fromPartial({
      basket: mockStore,
    }),
  );

  const totalText = getByText('£1,234.50');
  expect(totalText).not.toBeNull();
});
