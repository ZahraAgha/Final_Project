import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : { items: [], total: 0 };
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const updateCart = (state) => {
  state.items = state.items.filter(item => {
    item.quantity = Math.min(item.quantity, item.product.quantity);
    return item.quantity > 0;
  });
  state.total = state.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { product, quantity, size } = action.payload;
      //

      // Check if product or size is null or undefined
      if (!product || !size) {
        console.error('Product or size is null or undefined', action.payload);
        return;
      }

      const existingItem = state.items.find(
        (item) =>
          item.product._id === product._id &
          item.size._id === size._id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const id = `${product._id}-${Math.random()}`;

        state.items.push({ product, quantity, size, id });
      }

      updateCart(state);
      saveCartToLocalStorage(state);
    },
    updateCartItemQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const item = state.items.find(item => item.id === itemId);

      if (item) {
        item.quantity = quantity;
      }

      updateCart(state);
      saveCartToLocalStorage(state);
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);

      if (item) {
        state.items = state.items.filter(item => item.id !== itemId);
      }

      updateCart(state);
      saveCartToLocalStorage(state);
    },
    clearCart(state) {
      state.items = [];
      state.total =  0;

      saveCartToLocalStorage(state);
    }
  },
});

export const { addItemToCart, updateCartItemQuantity, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
