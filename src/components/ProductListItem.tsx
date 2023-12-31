import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {Product, RootStackParamList} from '../types/common';

import {getSecureLink} from '../utils/common';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {basketActions} from '../store/basket';

type Props = {
  product: Product;
};

export default function ProductListItem(props: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  const {product} = props;

  const productInCart = useAppSelector(
    state => state.basket.itemsById?.[product.id],
  );

  const isProductInCart = productInCart !== undefined;

  const onAddToBasket = useCallback(() => {
    dispatch(basketActions.addOrUpdate({product: product, quantity: 1}));
  }, [dispatch, product]);

  const goToProductDetail = useCallback(() => {
    navigation.navigate('ProductDetail', {product: product});
  }, [navigation, product]);

  return (
    <Card onPress={goToProductDetail}>
      <View style={styles.container}>
        <ProductImage
          source={{uri: getSecureLink(product.img)}}
          containerStyle={styles.productImageContainer}
          style={styles.productImage}
          resizeMode={'cover'}
        />
        <View style={styles.innerContainer}>
          <ProductInfo
            name={product.name}
            price={product.price}
            colour={product.colour}
          />

          <Button
            size={'small'}
            onPress={onAddToBasket}
            disabled={isProductInCart}>
            <Text>
              {isProductInCart ? 'Already in Basket' : 'Add to Basket'}
            </Text>
          </Button>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 232,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: 200,
    alignItems: 'flex-start',
  },
  productImageContainer: {
    width: 100,
    height: 200,
    marginRight: 16,
  },
  productImage: {
    width: 100,
    height: 200,
  },
});
