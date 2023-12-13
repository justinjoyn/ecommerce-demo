import React from 'react';
import {Divider, Layout, Text, TopNavigation} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Products() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title={'Products'} alignment={'center'} />
      <Divider />
      <Layout style={styles.container}>
        <Text>Products</Text>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
