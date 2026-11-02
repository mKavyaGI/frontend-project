import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (existingItem) existingItem.quantity += 1
      else state.items.push({ ...action.payload, quantity: 1 })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find((cartItem) => cartItem.id === id)
      if (!item) return
      if (quantity <= 0) {
        state.items = state.items.filter((cartItem) => cartItem.id !== id)
      } else {
        item.quantity = quantity
      }
    },
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (existingItem) existingItem.quantity += 1
      else state.items.push({ ...action.payload, quantity: 1 })
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload)
      if (item) item.quantity += 1
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload)
      if (!item) return
      if (item.quantity > 1) item.quantity -= 1
      else state.items = state.items.filter((cartItem) => cartItem.id !== action.payload)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addItem,
  removeItem,
  updateQuantity,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer