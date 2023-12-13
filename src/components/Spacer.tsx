import React from 'react';

import {View} from 'react-native';

type SpacerProps = {
  space?: number;
  row?: boolean;
};

export default function Spacer(props: SpacerProps) {
  const {space = 16, row = false} = props;
  return <View style={row ? {width: space} : {height: space}} />;
}
