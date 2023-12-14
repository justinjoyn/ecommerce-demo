import React from 'react';
import {BasketItem} from '../types/common';
import BasketListItem from './BasketListItem';
import {renderWithProviders, uiKittenWrapper} from '../utils/testing';

// Mock data for the store
const mockBasketItem: BasketItem = {
  product: {
    id: 1,
    colour: 'Black',
    name: 'Test',
    price: 10,
    img: 'https://example.com/image.jpg',
  },
  quantity: 1,
};

test('renders basket item', () => {
  const {getByTestId} = renderWithProviders(
    uiKittenWrapper(<BasketListItem item={mockBasketItem} />),
  );

  const basketItems = getByTestId('basket-item');
  expect(basketItems).not.toBeNull();
});
