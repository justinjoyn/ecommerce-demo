import React from 'react';
import {Divider, Layout, TopNavigation} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {DrawerScreenProps} from '@react-navigation/drawer';

import ProductsList from '../components/ProductsList';
import HeaderAction from '../components/HeaderAction';
import {DrawerParamList, RootStackParamList} from '../types/common';

type Props = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, 'Products'>,
  DrawerScreenProps<DrawerParamList, 'Home'>
>;

export default function Products(props: Props) {
  const {navigation} = props;

  const navigateToBasket = () => {
    navigation.navigate('Basket');
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title={'Products'}
        alignment={'center'}
        accessoryLeft={HeaderAction({
          iconName: 'menu-outline',
          onPress: openDrawer,
        })}
        accessoryRight={HeaderAction({
          iconName: 'shopping-cart',
          onPress: navigateToBasket,
        })}
      />
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
