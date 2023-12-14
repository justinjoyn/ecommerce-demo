import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

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
      <View style={styles.container}>
        <Text style={styles.text}>Oops! Something went wrong.</Text>

        <Text style={styles.text}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16,
  },
  text: {
    textAlign: 'center',
  },
});
