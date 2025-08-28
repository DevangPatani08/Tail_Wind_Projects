import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    totalUniqueItems: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(i => i.id === newItem.id);
      
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image
        });
        state.totalUniqueItems++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
      
      state.totalQuantity = state.items.reduce((t, i) => t + i.quantity, 0);
      state.totalAmount = state.items.reduce((t, i) => t + i.totalPrice, 0);
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      
      if (!existingItem) return;
      
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(i => i.id !== id);
        state.totalUniqueItems--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
      
      state.totalQuantity = state.items.reduce((t, i) => t + i.quantity, 0);
      state.totalAmount = state.items.reduce((t, i) => t + i.totalPrice, 0);
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      state.totalUniqueItems = 0;
    },

    removeItemCompletely(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      
      if (!existingItem) return;
      
      state.items = state.items.filter(i => i.id !== id);
      state.totalUniqueItems--;
      state.totalQuantity = state.items.reduce((t, i) => t + i.quantity, 0);
      state.totalAmount = state.items.reduce((t, i) => t + i.totalPrice, 0);
    },

    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      
      if (!existingItem || quantity < 1) return;

      if (quantity === 0) {
        state.items = state.items.filter(i => i.id !== id);
        state.totalUniqueItems--;
      } else if (existingItem.quantity === 0) {
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;
        state.totalUniqueItems++;
      } else {
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;
      }

      state.totalQuantity = state.items.reduce((t, i) => t + i.quantity, 0);
      state.totalAmount = state.items.reduce((t, i) => t + i.totalPrice, 0);
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;