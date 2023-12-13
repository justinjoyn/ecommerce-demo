import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@ui-kitten/components';

import {Product} from '../common/types';
import {getSecureLink} from '../common/utils';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {basketActions} from '../store/basket';

type Props = {
  product: Product;
};

export default function ProductListItem(props: Props) {
  const dispatch = useAppDispatch();

  const {product} = props;

  const productInCart = useAppSelector(
    state => state.basket.itemsById?.[product.id],
  );

  const isProductInCart = productInCart !== undefined;

  const onAddToBasket = () => {
    dispatch(basketActions.addOrUpdate({product: product, quantity: 1}));
  };

  return (
    <View style={styles.container}>
      <ProductImage
        source={{uri: getSecureLink(product.img)}}
        containerStyle={styles.productImageContainer}
        style={styles.productImage}
        resizeMode={'cover'}
      />
      <View style={styles.innerContainer}>
        <ProductInfo name={product.name} price={product.price} />
        {!isProductInCart && (
          <Button size={'small'} onPress={onAddToBasket}>
            <Text>Add to basket</Text>
          </Button>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
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
