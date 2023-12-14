import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './home';

import type {DrawerParamList} from '../types/common';

const {Navigator, Screen} = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={'Home'} component={HomeNavigator} />
    </Navigator>
  );
}
