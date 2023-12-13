import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';

import {formatAmount} from '../common/utils';

type Props = {
  name: string;
  price: number;
  compact?: boolean;
};

export default function ProductInfo(props: Props) {
  const {name, price, compact = false} = props;

  return (
    <View style={compact ? styles.row : styles.column}>
      <Text
        category={compact ? 'c1' : 's1'}
        style={[styles.text, compact ? styles.flex : null]}>
        {name}
      </Text>
      <Text category={compact ? 's2' : 'h6'} style={styles.text}>
        {formatAmount(price)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginBottom: 8,
  },
});
