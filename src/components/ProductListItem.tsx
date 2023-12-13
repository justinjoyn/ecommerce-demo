import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text} from '@ui-kitten/components';

import {Product} from '../common/types';
import {formatAmount, getSecureLink} from '../common/utils';
import ProductImage from './ProductImage';

type Props = {
  product: Product;
};

export default function ProductListItem(props: Props) {
  const {product} = props;

  return (
    <Card>
      <View style={styles.container}>
        <ProductImage
          source={{uri: getSecureLink(product.img)}}
          containerStyle={styles.productImageContainer}
          style={styles.productImage}
          resizeMode={'cover'}
        />
        <View style={styles.innerContainer}>
          <Text category={'s1'} style={styles.text}>
            {product.name}
          </Text>
          <Text category={'p1'} style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
            ex lorem. Pellentesque tempus justo a egestas convallis. In
            tristique nulla vel lectus eleifend efficitur.
          </Text>
          <Text category={'h6'} style={styles.text}>
            {formatAmount(product.price)}
          </Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
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
