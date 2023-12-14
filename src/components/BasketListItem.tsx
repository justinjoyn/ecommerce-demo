import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

import {getSecureLink} from '../utils/common';
import ProductImage from './ProductImage';
import QuantityInput from './QuantityInput';
import ProductInfo from './ProductInfo';
import Spacer from './Spacer';
import {useAppDispatch} from '../store/hooks';
import {basketActions} from '../store/basket';
import EvaIcon from './EvaIcon';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {BasketItem, RootStackParamList} from '../types/common';

type Props = {
  item: BasketItem;
};

export default function BasketListItem(props: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  const {item} = props;

  const onRemove = () => {
    dispatch(basketActions.remove(item));
  };

  const onQuantityChange = (value: number) => {
    dispatch(basketActions.addOrUpdate({...item, quantity: value}));
  };

  const goToProductDetail = useCallback(() => {
    navigation.navigate('ProductDetail', {product: item.product});
  }, [item.product, navigation]);

  return (
    <Card onPress={goToProductDetail}>
      <View style={styles.container} testID={'basket-item'}>
        <ProductImage
          source={{uri: getSecureLink(item.product.img)}}
          containerStyle={styles.productImageContainer}
          style={styles.productImage}
          resizeMode={'cover'}
        />
        <View style={styles.innerContainer}>
          <ProductInfo
            name={item.product.name}
            price={item.product.price}
            colour={item.product.colour}
            compact
          />
          <View style={styles.row}>
            <QuantityInput
              quantity={item.quantity}
              setQuantity={onQuantityChange}
            />
            <Spacer space={8} />
            <Button
              size={'small'}
              appearance={'ghost'}
              onPress={onRemove}
              accessoryLeft={EvaIcon('trash-outline')}
            />
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    maxHeight: 132,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: 200,
    alignItems: 'flex-start',
  },
  productImageContainer: {
    width: 50,
    height: 100,
    marginRight: 16,
  },
  productImage: {
    width: 50,
    height: 100,
  },
  row: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
