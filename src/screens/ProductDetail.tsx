import {StyleSheet} from 'react-native';
import React from 'react';
import {Layout, Text, TopNavigation} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderAction from '../components/HeaderAction';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../common/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

export default function ProductDetail(props: Props) {
  const {navigation} = props;

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title={'Basket'}
        alignment={'center'}
        accessoryLeft={HeaderAction({
          iconName: 'arrow-back',
          onPress: navigateBack,
        })}
      />
      <Layout style={styles.container}>
        <Text>Basket</Text>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
