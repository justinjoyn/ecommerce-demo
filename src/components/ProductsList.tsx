import React, {useCallback} from 'react';
import {FlashList} from '@shopify/flash-list';

import {products} from '../queries/products';
import {Product} from '../types/common';
import ProductListItem from './ProductListItem';

export default function ProductsList() {
  const {data, isLoading, refetch} = products.useList();

  const renderItem = useCallback(({item}: {item: Product}) => {
    return <ProductListItem product={item} />;
  }, []);

  return (
    <FlashList
      data={data}
      onRefresh={refetch}
      refreshing={isLoading}
      renderItem={renderItem}
      estimatedItemSize={232}
    />
  );
}
