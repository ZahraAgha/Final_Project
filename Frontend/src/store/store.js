import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/user.slice';
import cartReducer from '../slices/cart.slice';

const store = configureStore({
  reducer: {
    auth: userReducer,
    cart: cartReducer,
  },
});

export default store;
