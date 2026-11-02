import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    // Add a product to the shopping cart
    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: 1
        });
      }
    },

    // Remove a product from the shopping cart
    removeItem: (state, action) => {
      const id = action.payload;

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== id
      );
    },

    // Update the quantity of a product
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === id
      );

      if (existingItem) {
        if (quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== id
          );
        } else {
          existingItem.quantity = quantity;
        }
      }
    }

  }
});

export const {
  addItem,
  removeItem,
  updateQuantity
} = CartSlice.actions;

export default CartSlice.reducer;
