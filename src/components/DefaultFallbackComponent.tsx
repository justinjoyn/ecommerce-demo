import React from 'react';

import {Button, Text, View} from 'react-native';

export type DefaultFallbackComponentProps = {
  error?: Error;
  resetError: () => void;
};

export default class DefaultFallbackComponent extends React.Component<DefaultFallbackComponentProps> {
  constructor(props: DefaultFallbackComponentProps) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Oops! Something went wrong.</Text>

        <Text>
          There seems to be an error and we are not able to process the
          requested action.
        </Text>

        <Button
          onPress={() => this.props.resetError()}
          title={'Go Back'}
          testID={'back-button'}
        />
      </View>
    );
  }
}
