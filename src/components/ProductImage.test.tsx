import React from 'react';
import {render} from '@testing-library/react-native';

import ProductImage from './ProductImage';
import {uiKittenWrapper} from '../utils/testing';

describe('ProductImage', () => {
  it('renders without crashing', () => {
    render(uiKittenWrapper(<ProductImage />));
  });

  it('renders the fallback icon when no image source is provided', () => {
    const {getByTestId} = render(<ProductImage />);
    const fallbackIcon = getByTestId('fallback-icon');
    expect(fallbackIcon).toBeTruthy();
  });

  it('renders the image when image source is provided', () => {
    const imageSource = {uri: 'https://example.com/image.jpg'};
    const {getByTestId} = render(<ProductImage source={imageSource} />);
    const image = getByTestId('product-image');
    expect(image.props.source).toEqual(imageSource);
  });
});
