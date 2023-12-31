import {Layout, TopNavigation} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {DrawerScreenProps} from '@react-navigation/drawer';

import {DrawerParamList, RootStackParamList} from '../types/common';
import HeaderAction from '../components/HeaderAction';
import BasketList from '../components/BasketList';
import BasketTotal from '../components/BasketTotal';
import {useAppSelector} from '../store/hooks';

type Props = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, 'Basket'>,
  DrawerScreenProps<DrawerParamList, 'Home'>
>;

export default function Basket(props: Props) {
  const {navigation} = props;

  const itemCount = useAppSelector(state => state.basket.itemCount);

  const title = itemCount > 0 ? `Basket (${itemCount})` : 'Basket';

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title={title}
        alignment={'center'}
        accessoryLeft={HeaderAction({
          iconName: 'arrow-back',
          onPress: navigateBack,
        })}
      />
      <Layout style={styles.container}>
        <BasketList />
        <BasketTotal />
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
