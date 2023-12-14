import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {Button, Card, Layout, Text, TopNavigation} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderAction from '../components/HeaderAction';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../types/common';
import ProductImage from '../components/ProductImage';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {getSecureLink} from '../utils/common';
import ProductInfo from '../components/ProductInfo';
import QuantityInput from '../components/QuantityInput';
import Spacer from '../components/Spacer';
import {basketActions} from '../store/basket';
import EvaIcon from '../components/EvaIcon';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

export default function ProductDetail(props: Props) {
  const dispatch = useAppDispatch();

  const {navigation, route} = props;
  const {product} = route.params;

  const productInCart = useAppSelector(
    state => state.basket.itemsById?.[product.id],
  );

  const isProductInCart = productInCart !== undefined;

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateToBasket = () => {
    navigation.navigate('Basket');
  };

  const onRemove = useCallback(() => {
    dispatch(basketActions.remove(productInCart));
  }, [dispatch, productInCart]);

  const onQuantityChange = useCallback(
    (value: number) => {
      dispatch(basketActions.addOrUpdate({product: product, quantity: value}));
    },
    [dispatch, product],
  );

  const BasketActions = useMemo(() => {
    if (isProductInCart) {
      return (
        <View style={styles.row}>
          <QuantityInput
            quantity={productInCart.quantity}
            setQuantity={onQuantityChange}
          />
          <Spacer />
          <Button
            size={'small'}
            appearance={'ghost'}
            onPress={onRemove}
            accessoryLeft={EvaIcon('trash-outline')}
          />
        </View>
      );
    } else {
      return (
        <Button size={'small'} onPress={() => onQuantityChange(1)}>
          <Text category={'c1'}>Add to basket</Text>
        </Button>
      );
    }
  }, [isProductInCart, onQuantityChange, onRemove, productInCart?.quantity]);

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title={'Product Detail'}
        alignment={'center'}
        accessoryLeft={HeaderAction({
          iconName: 'arrow-back',
          onPress: navigateBack,
        })}
        accessoryRight={HeaderAction({
          iconName: 'shopping-cart',
          onPress: navigateToBasket,
        })}
      />
      <Layout style={styles.container}>
        <ScrollView>
          <ProductImage
            source={{uri: getSecureLink(product.img)}}
            containerStyle={styles.productImageContainer}
            style={styles.productImage}
            resizeMode={'cover'}
          />
          <Card>
            <Spacer />
            <ProductInfo name={product.name} price={product.price} />
            <Spacer />

            {BasketActions}
            <Spacer />

            <Text category={'h6'}>Description</Text>
            <Spacer space={8} />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              amet libero sit amet mi aliquet faucibus. Donec auctor, velit sit
              amet aliquam aliquam, mi odio ultrices nulla, eget ultricies velit
              urna ut nunc. Donec sed augue vitae risus consequat euismod. Sed
              aliquet, ipsum vitae aliquet faucibus, eros nunc lacinia nunc,
              vitae ultricies sem nunc vel elit. Nulla facilisi. Nulla facilisi.
              Donec sit amet libero sit amet mi aliquet faucibus. Donec auctor,
              velit sit amet aliquam aliquam, mi odio ultrices nulla, eget
              ultricies velit urna ut nunc. Donec sed augue vitae risus
              consequat euismod. Sed aliquet, ipsum vitae aliquet faucibus, eros
              nunc lacinia nunc, vitae ultricies sem nunc vel elit. Nulla
              facilisi. Nulla facilisi.
            </Text>
          </Card>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productImageContainer: {
    width: '100%',
    aspectRatio: 0.5,
  },
  productImage: {
    width: '100%',
    aspectRatio: 0.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
