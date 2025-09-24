/**
 * Redux Store Configuration
 * 
 * This file configures the Redux Toolkit store for the shopping cart application.
 * Redux Toolkit (RTK) is the modern way to write Redux logic with less boilerplate.
 * 
 * Key concepts:
 * - Store: Central state container for the entire application
 * - Slices: Redux Toolkit's way of creating reducers and actions together
 * - configureStore: RTK function that sets up the store with good defaults
 */

import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./slices/cartSlice"
import productsSlice from './slices/productsSlice'

/**
 * Configure the Redux store with our slices
 * 
 * configureStore automatically:
 * - Combines our reducers
 * - Adds Redux DevTools extension support
 * - Includes useful middleware like Redux Thunk for async actions
 * - Sets up immutability and serializability checks in development
 */
export const store = configureStore({
  reducer: {
    // Cart slice handles all cart-related state (items, quantities, totals)
    cart: cartSlice,
    // Products slice handles product data fetching and storage
    products: productsSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// This ensures our TypeScript types stay in sync with the actual store structure
export type RootState = ReturnType<typeof store.getState>

// Type for the dispatch function, includes thunk actions
export type AppDispatch = typeof store.dispatch