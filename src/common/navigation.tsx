import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Basket from '../screens/Basket';
import ProductDetail from '../screens/ProductDetail';
import Products from '../screens/Products';
import {RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={'Products'}
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name={'Products'} component={Products} />
      <RootStack.Screen name={'ProductDetail'} component={ProductDetail} />
      <RootStack.Screen name={'Basket'} component={Basket} />
    </RootStack.Navigator>
  );
}
