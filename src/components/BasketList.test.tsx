import React from 'react';
import {fromPartial} from '@total-typescript/shoehorn';

import BasketList from './BasketList';
import {renderWithProviders, uiKittenWrapper} from '../utils/testing';
import {BasketItem} from '../types/common';

// Mock data for the store
const mockBasketItems: BasketItem[] = [
  {
    product: {
      id: 1,
      colour: 'Black',
      name: 'Test',
      price: 10,
      img: 'https://example.com/image.jpg',
    },
    quantity: 1,
  },
];

test('renders all items in the basket', () => {
  const {getAllByTestId} = renderWithProviders(
    uiKittenWrapper(<BasketList />),
    fromPartial({
      basket: {
        itemsById: {
          1: mockBasketItems[0],
        },
      },
    }),
  );

  const basketItems = getAllByTestId('basket-item');
  expect(basketItems.length).toBe(mockBasketItems.length);
});
