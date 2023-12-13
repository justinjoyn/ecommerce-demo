import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {BasketItem, Product} from '../common/types';

type BasketSate = {
  items: BasketItem[];
};

const initialState: BasketSate = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<BasketItem>) => {
      state.items.push(action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const selectedItem = state.items.find(
        item => item.product.id === action.payload.id,
      );
      if (selectedItem) {
        selectedItem.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<Product>) => {
      const selectedItem = state.items.find(
        item => item.product.id === action.payload.id,
      );
      if (selectedItem) {
        selectedItem.quantity--;
      }
    },
    remove: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter(
        item => item.product.id !== action.payload.id,
      );
    },
    clear: state => {
      state.items = [];
    },
  },
});

export const {add, increaseQuantity, decreaseQuantity, clear, remove} =
  basketSlice.actions;

export default basketSlice.reducer;

// TODO: We can also export selectors here if we want to.
