import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ErrorBoundary from './ErrorBoundary';
import {Text} from 'react-native';

describe('ErrorBoundary', () => {
  const FallbackComponent = () => <Text>Error occurred</Text>;
  const ChildComponent = () => <Text>Child component</Text>;
  const ErrorComponent = () => {
    const throwError = () => {
      throw new Error('Test error');
    };
    return <Text onPress={throwError}>Error trigger</Text>;
  };

  it('should render the child component when there is no error', () => {
    const {getByText} = render(
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <ChildComponent />
      </ErrorBoundary>,
    );

    expect(getByText('Child component')).toBeTruthy();
  });

  it('should render the fallback component when there is an error', () => {
    const {getByText} = render(
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    const errorButton = getByText('Error trigger');
    expect(() => {
      fireEvent.press(errorButton);
      expect(getByText('Error occurred')).toBeTruthy();
    }).toThrow('Test error');
  });

  it('should call the onError callback when there is an error', () => {
    const onError = jest.fn();
    const {getByText} = render(
      <ErrorBoundary FallbackComponent={FallbackComponent} onError={onError}>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    const errorButton = getByText('Error trigger');
    expect(() => {
      fireEvent.press(errorButton);
      expect(onError).toHaveBeenCalledWith(
        expect.any(Error),
        expect.any(String),
      );
    }).toThrow('Test error');
  });
});
