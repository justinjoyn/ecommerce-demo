import {StyleSheet} from 'react-native';
import React from 'react';
import {Layout, Text, TopNavigation} from '@ui-kitten/components';

import BackAction from '../components/BackAction';

export default function ProductDetail() {
  return (
    <Layout style={styles.container}>
      <TopNavigation
        title={'Details'}
        alignment={'center'}
        accessoryLeft={BackAction}
      />
      <Text>Products</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
