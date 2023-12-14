import {View, StyleSheet} from 'react-native';
import React from 'react';

import {useAppSelector} from '../store/hooks';
import {Divider, Layout, Text} from '@ui-kitten/components';
import {formatAmount} from '../common/utils';

export default function BasketTotal() {
  const totalPrice = useAppSelector(state => state.basket.totalPrice);

  return (
    <Layout level={'2'}>
      <Divider />
      <View style={styles.row}>
        <Text category={'c1'}>Total: </Text>
        <Text category={'s1'}>{formatAmount(totalPrice)}</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});
