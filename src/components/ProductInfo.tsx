import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';

import {formatAmount} from '../utils/common';

type Props = {
  name: string;
  price: number;
  colour: string;
  compact?: boolean;
};

export default function ProductInfo(props: Props) {
  const {name, price, colour, compact = false} = props;

  return (
    <View style={compact ? styles.row : styles.column}>
      <Text
        category={compact ? 'c1' : 's1'}
        style={[styles.text, compact ? styles.flex : null]}>
        {name}
      </Text>
      {!compact && (
        <Text category={compact ? 'c2' : 's2'} style={styles.text}>
          {`Colour: ${colour}`}
        </Text>
      )}
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
