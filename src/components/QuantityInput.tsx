import React from 'react';
import {Button, ButtonGroup, Text} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';

type Props = {
  quantity: number;
  setQuantity: (quantity: number) => void;
};

export default function QuantityInput(props: Props) {
  const {quantity = 1, setQuantity} = props;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ButtonGroup size={'small'} appearance={'outline'} status={'basic'}>
        <Button onPress={decreaseQuantity}>
          <Text category={'s1'}>-</Text>
        </Button>
        <Button disabled>
          <Text category={'c1'}>{quantity}</Text>
        </Button>
        <Button onPress={increaseQuantity}>
          <Text category={'s1'}>+</Text>
        </Button>
      </ButtonGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxHeight: 40,
  },
});
