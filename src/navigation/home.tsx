import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Basket from '../screens/Basket';
import ProductDetail from '../screens/ProductDetail';
import Products from '../screens/Products';

import type {RootStackParamList} from '../types/common';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export default function HomeNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={'Products'} component={Products} />
      <Screen name={'ProductDetail'} component={ProductDetail} />
      <Screen name={'Basket'} component={Basket} />
    </Navigator>
  );
}
