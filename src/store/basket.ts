import {
  PayloadAction,
  TypedStartListening,
  createListenerMiddleware,
  createSlice,
  isAnyOf,
} from '@reduxjs/toolkit';

import type {RootState, AppDispatch} from '.';

import {BasketItem} from '../types/common';

type BasketSate = {
  itemsById: Record<string, BasketItem>;
  totalPrice: number;
  itemCount: number;
};

const initialBasketState: BasketSate = {
  itemsById: {},
  totalPrice: 0,
  itemCount: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState: initialBasketState,
  reducers: {
    addOrUpdate: (state, action: PayloadAction<BasketItem>) => {
      state.itemsById = Object.assign(state.itemsById, {
        [action.payload.product.id]: action.payload,
      });
    },
    remove: (state, action: PayloadAction<BasketItem>) => {
      delete state.itemsById[action.payload.product.id];
    },
    clear: state => {
      state.itemsById = {};
    },
    updateTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
    updateItemCount: (state, action: PayloadAction<number>) => {
      state.itemCount = action.payload;
    },
  },
});

export const basketActions = basketSlice.actions;

// This listener will update the basket total when a item is added/updated.
export const basketListenerMiddleware = createListenerMiddleware();
const startAppListening =
  basketListenerMiddleware.startListening as TypedStartListening<
    RootState,
    AppDispatch
  >;

startAppListening({
  // This listener will run for any of the actions below.
  matcher: isAnyOf(
    basketActions.addOrUpdate,
    basketActions.remove,
    basketActions.clear,
  ),
  effect: async (action, listenerApi) => {
    // Calculate the total price and item count of the basket.
    const basketItems = Object.values(listenerApi.getState().basket.itemsById);
    const itemCount = basketItems.length;

    let totalPrice = 0;
    basketItems.forEach(basketItem => {
      totalPrice += basketItem.product.price * basketItem.quantity;
    });

    // Update the basket total and item count.
    listenerApi.dispatch(basketActions.updateTotalPrice(totalPrice));
    listenerApi.dispatch(basketActions.updateItemCount(itemCount));
  },
});

export default basketSlice.reducer;

// TODO: We can also export selectors here if we want to.
