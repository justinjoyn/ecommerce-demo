import React from 'react';
import {Icon} from '@ui-kitten/components';
import {ImageProps} from 'react-native';

const EvaIcon = (iconName: string) => (props?: Partial<ImageProps>) =>
  <Icon {...props} name={iconName} />;

export default EvaIcon;
