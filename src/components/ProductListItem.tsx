import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@ui-kitten/components';

import {Product} from '../common/types';
import {getSecureLink} from '../common/utils';
import ProductImage from './ProductImage';
import QuantityInput from './QuantityInput';
import ProductInfo from './ProductInfo';
import Spacer from './Spacer';
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

  const [quantity, setQuantity] = useState(productInCart?.quantity || 1);

  const isProductInCart = productInCart !== undefined;

  const addButtonText = isProductInCart ? 'Update' : 'Add to Basket';

  const onAddToBasket = () => {
    dispatch(basketActions.addOrUpdate({product: product, quantity: quantity}));
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
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
        <Spacer space={8} />
        <Button size={'small'} onPress={onAddToBasket}>
          <Text>{addButtonText}</Text>
        </Button>
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
  text: {
    marginBottom: 8,
  },
});
