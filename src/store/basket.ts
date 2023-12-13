import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {BasketItem, Product} from '../common/types';

type BasketSate = {
  itemsById: Record<string, BasketItem | undefined>;
};

const initialState: BasketSate = {
  itemsById: {},
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addOrUpdate: (state, action: PayloadAction<BasketItem>) => {
      state.itemsById = Object.assign(state.itemsById, {
        [action.payload.product.id]: action.payload,
      });
    },
    remove: (state, action: PayloadAction<Product>) => {
      delete state.itemsById[action.payload.id];
    },
    clear: state => {
      state.itemsById = {};
    },
  },
});

export const basketActions = basketSlice.actions;

export default basketSlice.reducer;

// TODO: We can also export selectors here if we want to.
