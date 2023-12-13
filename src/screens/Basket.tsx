import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';

export default function Basket() {
  return (
    <Layout style={styles.container}>
      <Text>Products</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
