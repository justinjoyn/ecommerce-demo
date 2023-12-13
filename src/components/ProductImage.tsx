import {View, ImageProps, ViewStyle, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Icon} from '@ui-kitten/components';

type Props = ImageProps & {
  containerStyle?: ViewStyle;
};

export default function ProductImage(props: Props) {
  const {containerStyle, ...imageProps} = props;
  return (
    <View style={containerStyle}>
      <View style={styles.fallBackContainer}>
        <Icon name={'image-outline'} style={styles.icon} fill={'#8F9BB3'} />
      </View>
      <Image {...imageProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  fallBackContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex: 0,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
