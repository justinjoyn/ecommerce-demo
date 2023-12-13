import React from 'react';

import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {
  loading: boolean;
};

const FullscreenLoader = (props: Props) => {
  if (!props.loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={props.loading}
        color={'#000000'}
        size={'large'}
      />
    </View>
  );
};

export default FullscreenLoader;
