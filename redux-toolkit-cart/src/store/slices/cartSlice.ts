/**
 * Cart Slice - Redux Toolkit Slice for Shopping Cart
 * 
 * This slice manages all cart-related state including:
 * - Items in the cart with quantities
 * - Total price calculation
 * - Adding/removing items
 * - Clearing the cart
 * 
 * Redux Toolkit Slice benefits:
 * - Automatically generates action creators
 * - Uses Immer internally for immutable updates (we can "mutate" state safely)
 * - Reduces boilerplate code significantly
 */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

// Define the shape of a product in our application
export interface Product {
   id: string
   name: string
   price: number
   image: string
   description: string
   category: string
}

// Define the shape of a cart item (product + quantity)
export interface CartItem extends Product {
   quantity: number
}

// Define the shape of our cart state
interface CartState {
   items: CartItem[]           // Array of items in the cart
   totalItems: number          // Total number of individual items
   totalPrice: number          // Total price of all items
}

// Initial state when the app starts
const initialState: CartState = {
   items: [],
   totalItems: 0,
   totalPrice: 0,
}

/**
 * Helper function to calculate cart totals
 * This keeps our reducer logic clean and reusable
 */
const calculateTotals = (items: CartItem[]) => {
   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
   const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

   return {
      totalItems,
      totalPrice: Math.round(totalPrice * 100) / 100, // Round to 2 decimal places
   }
}

/**
 * Cart slice definition
 * createSlice automatically generates action creators and action types
 */
const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      /**
       * Add item to cart or increase quantity if item already exists
       * 
       * @param state - Current cart state
       * @param action - Action with product payload
       */
      addToCart: (state, action: PayloadAction<Product>) => {
         const product = action.payload

         // Check if item already exists in cart
         const existingItem = state.items.find(item => item.id === product.id)

         if (existingItem) {
            // Item exists, increase quantity
            existingItem.quantity += 1
         } else {
            // New item, add to cart with quantity 1
            state.items.push({ ...product, quantity: 1 })
         }

         // Recalculate totals
         const totals = calculateTotals(state.items)
         state.totalItems = totals.totalItems
         state.totalPrice = totals.totalPrice
      },

      /**
       * Remove one unit of an item from cart
       * If quantity becomes 0, remove item completely
       * 
       * @param state - Current cart state  
       * @param action - Action with product id
       */
      removeFromCart: (state, action: PayloadAction<string>) => {
         const productId = action.payload
         const existingItem = state.items.find(item => item.id === productId)

         if (existingItem) {
            if (existingItem.quantity > 1) {
               // Decrease quantity
               existingItem.quantity -= 1
            } else {
               // Remove item completely
               state.items = state.items.filter(item => item.id !== productId)
            }

            // Recalculate totals
            const totals = calculateTotals(state.items)
            state.totalItems = totals.totalItems
            state.totalPrice = totals.totalPrice
         }
      },

      /**
       * Remove item completely from cart regardless of quantity
       * 
       * @param state - Current cart state
       * @param action - Action with product id
       */
      removeItemCompletely: (state, action: PayloadAction<string>) => {
         const productId = action.payload
         state.items = state.items.filter(item => item.id !== productId)

         // Recalculate totals
         const totals = calculateTotals(state.items)
         state.totalItems = totals.totalItems
         state.totalPrice = totals.totalPrice
      },

      /**
       * Update item quantity directly
       * 
       * @param state - Current cart state
       * @param action - Action with product id and new quantity
       */
      updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
         const { id, quantity } = action.payload
         const existingItem = state.items.find(item => item.id === id)

         if (existingItem && quantity > 0) {
            existingItem.quantity = quantity

            // Recalculate totals
            const totals = calculateTotals(state.items)
            state.totalItems = totals.totalItems
            state.totalPrice = totals.totalPrice
         } else if (existingItem && quantity <= 0) {
            // Remove item if quantity is 0 or less
            state.items = state.items.filter(item => item.id !== id)

            // Recalculate totals
            const totals = calculateTotals(state.items)
            state.totalItems = totals.totalItems
            state.totalPrice = totals.totalPrice
         }
      },

      /**
       * Clear all items from cart
       * Resets cart to initial state
       */
      clearCart: (state) => {
         state.items = []
         state.totalItems = 0
         state.totalPrice = 0
      },
   },
})

// Export action creators (automatically generated by createSlice)
export const {
   addToCart,
   removeFromCart,
   removeItemCompletely,
   updateQuantity,
   clearCart
} = cartSlice.actions

// Export reducer as default (to be used in store configuration)
export default cartSlice.reducer