import React, {useCallback} from 'react';
import {FlashList} from '@shopify/flash-list';

import {products} from '../queries/products';
import {Product} from '../common/types';
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
      estimatedItemSize={340}
    />
  );
}
