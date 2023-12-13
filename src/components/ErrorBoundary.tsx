import React, {ComponentType} from 'react';

import DefaultFallbackComponent, {
  DefaultFallbackComponentProps,
} from './DefaultFallbackComponent';

type Props = {
  children: React.ReactNode;
  FallbackComponent: ComponentType<DefaultFallbackComponentProps>;
  onError?: (error: Error, componentStack: string) => void;
};

type State = {error: Error | undefined};

export default class ErrorBoundary extends React.Component<Props, State> {
  static defaultProps: {
    FallbackComponent: ComponentType<DefaultFallbackComponentProps>;
  } = {
    FallbackComponent: DefaultFallbackComponent,
  };

  constructor(props: Props) {
    super(props);
    this.state = {error: undefined};
  }

  static getDerivedStateFromError(error: Error): State {
    return {error};
  }

  componentDidCatch(error: Error, info: {componentStack: string}) {
    if (typeof this.props.onError === 'function') {
      this.props.onError.call(this, error, info.componentStack);
    }
    // TODO: Log error to an error reporting service
  }

  resetError = () => {
    this.setState({error: undefined});
  };

  render() {
    const {FallbackComponent, children} = this.props;

    return this.state.error ? (
      <FallbackComponent
        error={this.state.error}
        resetError={this.resetError}
      />
    ) : (
      children
    );
  }
}
