import React from 'react';
import {fromPartial} from '@total-typescript/shoehorn';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import BasketList from './BasketList';
import {renderWithProviders} from '../store/testHelper';
import {expect, test} from '@jest/globals';
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
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <BasketList />
      </ApplicationProvider>
    </>,
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
