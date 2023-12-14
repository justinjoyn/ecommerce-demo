import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuantityInput from './QuantityInput';
import {uiKittenWrapper} from '../utils/testing';

describe('QuantityInput', () => {
  test('renders with initial quantity', () => {
    const {getByText} = render(
      uiKittenWrapper(<QuantityInput quantity={3} setQuantity={() => {}} />),
    );
    const quantityText = getByText('3');
    expect(quantityText).toBeTruthy();
  });

  test('increases quantity when plus button is pressed', () => {
    let quantity = 1;
    const setQuantity = (newQuantity: number) => {
      quantity = newQuantity;
    };
    const {getByText} = render(
      uiKittenWrapper(
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />,
      ),
    );
    const plusButton = getByText('+');
    fireEvent.press(plusButton);
    expect(quantity).toBe(2);
  });

  test('decreases quantity when minus button is pressed', () => {
    let quantity = 3;
    const setQuantity = (newQuantity: number) => {
      quantity = newQuantity;
    };
    const {getByText} = render(
      uiKittenWrapper(
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />,
      ),
    );
    const minusButton = getByText('-');
    fireEvent.press(minusButton);
    expect(quantity).toBe(2);
  });

  test('does not decrease quantity below 1', () => {
    let quantity = 1;
    const setQuantity = (newQuantity: number) => {
      quantity = newQuantity;
    };
    const {getByText} = render(
      uiKittenWrapper(
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />,
      ),
    );
    const minusButton = getByText('-');
    fireEvent.press(minusButton);
    expect(quantity).toBe(1);
  });
});
