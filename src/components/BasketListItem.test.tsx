import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {expect, test} from '@jest/globals';
import {BasketItem} from '../types/common';
import BasketListItem from './BasketListItem';
import {renderWithProviders} from '../store/testHelper';

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

test('renders all items in the basket', () => {
  const {getByTestId} = renderWithProviders(
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <BasketListItem item={mockBasketItem} />
      </ApplicationProvider>
    </>,
  );

  const basketItems = getByTestId('basket-item');
  expect(basketItems).not.toBeNull();
});
