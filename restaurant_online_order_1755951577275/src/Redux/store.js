import { configureStore } from '@reduxjs/toolkit';
import cartReducers from 'Redux/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducers,
  },
});

