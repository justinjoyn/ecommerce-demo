import React from 'react';
import {render} from '@testing-library/react-native';
import ProductInfo from './ProductInfo';
import {uiKittenWrapper} from '../utils/testing';

describe('ProductInfo', () => {
  const name = 'Test Product';
  const price = 9.99;
  const colour = 'Red';

  it('renders the product name, colour and price', () => {
    const {getByText} = render(
      uiKittenWrapper(
        <ProductInfo name={name} price={price} colour={colour} />,
      ),
    );

    const nameElement = getByText(name);
    const priceElement = getByText('£9.99');

    expect(nameElement).toBeTruthy();
    expect(priceElement).toBeTruthy();
    expect(getByText('Colour: Red')).not.toBeNull();
  });

  it('renders the product name and price in compact mode', () => {
    const {getByText} = render(
      uiKittenWrapper(
        <ProductInfo
          name={name}
          price={price}
          colour={colour}
          compact={true}
        />,
      ),
    );

    const nameElement = getByText(name);
    const priceElement = getByText('£9.99');

    expect(nameElement).toBeTruthy();
    expect(priceElement).toBeTruthy();
  });
});
