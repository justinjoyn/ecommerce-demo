import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';

import {formatAmount} from '../common/utils';

type Props = {
  name: string;
  price: number;
};

export default function ProductInfo(props: Props) {
  const {name, price} = props;

  return (
    <View style={styles.container}>
      <Text category={'s1'} style={styles.text}>
        {name}
      </Text>
      <Text category={'h6'} style={styles.text}>
        {formatAmount(price)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  text: {
    marginBottom: 8,
  },
});
