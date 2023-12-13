import {ImageProps} from 'react-native';
import React from 'react';
import {Icon, TopNavigationAction} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const BackIcon = (props?: Partial<ImageProps>) => (
  <Icon {...props} name="arrow-back" />
);

export default function BackAction(): React.ReactElement {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  return <TopNavigationAction icon={BackIcon} onPress={navigateBack} />;
}
