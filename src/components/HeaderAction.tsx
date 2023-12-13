import React from 'react';
import {TopNavigationAction} from '@ui-kitten/components';

import EvaIcon from './EvaIcon';

type Props = {
  onPress: () => void;
  iconName: string;
};

const HeaderAction = (props: Props) => (): React.ReactElement => {
  const {onPress, iconName} = props;

  return <TopNavigationAction icon={EvaIcon(iconName)} onPress={onPress} />;
};

export default HeaderAction;
