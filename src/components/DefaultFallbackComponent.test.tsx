import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DefaultFallbackComponent from './DefaultFallbackComponent';

describe('DefaultFallbackComponent', () => {
  it('renders error message and button', () => {
    const resetErrorMock = jest.fn();
    const {getByText, getByTestId} = render(
      <DefaultFallbackComponent
        error={new Error('Test error')}
        resetError={resetErrorMock}
      />,
    );

    const errorMessage = getByText('Oops! Something went wrong.');
    const errorDescription = getByText(
      'There seems to be an error and we are not able to process the requested action.',
    );
    const backButton = getByTestId('back-button');

    expect(errorMessage).toBeTruthy();
    expect(errorDescription).toBeTruthy();
    expect(backButton).toBeTruthy();
  });

  it('calls resetError function when the button is pressed', () => {
    const resetErrorMock = jest.fn();
    const {getByTestId} = render(
      <DefaultFallbackComponent
        error={new Error('Test error')}
        resetError={resetErrorMock}
      />,
    );

    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);

    expect(resetErrorMock).toHaveBeenCalledTimes(1);
  });
});
