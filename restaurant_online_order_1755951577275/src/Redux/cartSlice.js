import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  quantity: 0,
  customizations: ['Large Size', 'Extra Cheese', 'Thin Crust'],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem=action.payload;
      const existingItem = state.items.find(
        item => item.id === newItem.id
      );
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity:1,
        });
      }
      else{
        existingItem.quantity++
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(cartItem => cartItem.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
