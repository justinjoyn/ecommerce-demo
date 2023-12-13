import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '@ui-kitten/components';

import {BasketItem} from '../common/types';
import {getSecureLink} from '../common/utils';
import ProductImage from './ProductImage';
import QuantityInput from './QuantityInput';
import ProductInfo from './ProductInfo';
import Spacer from './Spacer';
import {useAppDispatch} from '../store/hooks';
import {basketActions} from '../store/basket';
import EvaIcon from './EvaIcon';

type Props = {
  item: BasketItem;
};

export default function BasketListItem(props: Props) {
  const dispatch = useAppDispatch();

  const {item} = props;

  const onRemove = () => {
    dispatch(basketActions.remove(item));
  };

  const onQuantityChange = (value: number) => {
    dispatch(basketActions.addOrUpdate({...item, quantity: value}));
  };

  return (
    <View style={styles.container}>
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
