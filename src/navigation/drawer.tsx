import React, {useCallback} from 'react';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeNavigator from './home';

import type {DrawerParamList} from '../types/common';

import DrawerContent from '../components/DrawerContent';

const {Navigator, Screen} = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const renderDrawerContent = useCallback(
    (props: DrawerContentComponentProps) => <DrawerContent {...props} />,
    [],
  );

  return (
    <Navigator
      screenOptions={{headerShown: false}}
      drawerContent={renderDrawerContent}>
      <Screen name={'Home'} component={HomeNavigator} />
    </Navigator>
  );
}
