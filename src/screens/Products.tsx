import React from 'react';
import {Divider, Layout, TopNavigation} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductsList from '../components/ProductsList';

export default function Products() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title={'Products'} alignment={'center'} />
      <Divider />
      <Layout style={styles.container}>
        <ProductsList />
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
