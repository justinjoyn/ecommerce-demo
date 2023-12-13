import React from 'react';
import {Divider, Layout, TopNavigation} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import ProductsList from '../components/ProductsList';
import HeaderAction from '../components/HeaderAction';
import {RootStackParamList} from '../common/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Products'>;

export default function Products(props: Props) {
  const {navigation} = props;

  const navigateToBasket = () => {
    navigation.navigate('Basket');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title={'Products'}
        alignment={'center'}
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
