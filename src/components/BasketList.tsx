import React, {useCallback, useMemo} from 'react';

import BasketListItem from './BasketListItem';
import {BasketItem} from '../common/types';
import {FlashList} from '@shopify/flash-list';
import {useAppSelector} from '../store/hooks';

export default function BasketList() {
  const basketItemsById = useAppSelector(state => state.basket.itemsById);
  const basketItems = useMemo(
    () => Object.values(basketItemsById).filter(item => !!item),
    [basketItemsById],
  );

  const renderItem = useCallback(({item}: {item: BasketItem}) => {
    return <BasketListItem item={item} />;
  }, []);

  return (
    <FlashList
      data={basketItems}
      renderItem={renderItem}
      estimatedItemSize={132}
    />
  );
}
