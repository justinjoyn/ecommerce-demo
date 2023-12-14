import React from 'react';
import {waitFor} from '@testing-library/react-native';
import ProductsList from './ProductsList';
import {renderWithProviders, uiKittenWrapper} from '../utils/testing';

// Mock the products hook
jest.mock('../queries/products', () => {
  const products = {
    useList: jest.fn(() => ({
      data: [
        {id: 1, name: 'Product 1', price: 10},
        {id: 2, name: 'Product 2', price: 20},
        {id: 3, name: 'Product 3', price: 30},
      ],
      isLoading: false,
      refetch: jest.fn(),
    })),
  };
  return {products};
});

describe('ProductsList', () => {
  it('renders the list of products', async () => {
    const {getByText} = renderWithProviders(uiKittenWrapper(<ProductsList />));

    // Wait for the data to be loaded
    await waitFor(() => expect(getByText('Product 1')).toBeTruthy());
    expect(getByText('Product 2')).toBeTruthy();
    expect(getByText('Product 3')).toBeTruthy();
  });
});
