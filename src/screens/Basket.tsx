import {Layout, TopNavigation} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../common/types';
import HeaderAction from '../components/HeaderAction';
import BasketList from '../components/BasketList';

type Props = NativeStackScreenProps<RootStackParamList, 'Basket'>;

export default function Basket(props: Props) {
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
        <BasketList />
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
