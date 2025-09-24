/**
 * Products Slice - Redux Toolkit Slice for Product Management
 * 
 * This slice handles:
 * - Fetching products from JSON file
 * - Storing products in state
 * - Managing loading and error states
 * - Product filtering and searching (for future enhancement)
 * 
 * Uses Redux Toolkit's createAsyncThunk for handling async operations
 */

import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import { type Product } from './cartSlice'

// Define the shape of our products state
interface ProductsState {
   products: Product[]         // Array of all products
   loading: boolean           // Loading state for async operations
   error: string | null       // Error message if fetch fails
}

// Initial state
const initialState: ProductsState = {
   products: [],
   loading: false,
   error: null,
}

/**
 * Async thunk for fetching products from JSON file
 * 
 * createAsyncThunk automatically generates pending, fulfilled, and rejected action types
 * This handles the entire async flow for us:
 * - Sets loading to true when started
 * - Sets products and loading to false when successful
 * - Sets error and loading to false when failed
 */
export const fetchProducts = createAsyncThunk(
   'products/fetchProducts',
   async () => {
      try {
         // Fetch products from our local JSON file
         const response = await fetch('/products.json')

         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
         }

         const products: Product[] = await response.json()
         return products
      } catch (error) {
         throw new Error(`Failed to fetch products: ${error}`)
      }
   }
)

/**
 * Products slice definition
 */
const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      /**
       * Clear any error messages
       * Useful for dismissing error notifications
       */
      clearError: (state) => {
         state.error = null
      },
   },
   extraReducers: (builder) => {
      // Handle the different states of our async thunk
      builder
         // When fetchProducts starts
         .addCase(fetchProducts.pending, (state) => {
            state.loading = true
            state.error = null
         })
         // When fetchProducts succeeds
         .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.loading = false
            state.products = action.payload
            state.error = null
         })
         // When fetchProducts fails
         .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string || 'Failed to fetch products'
         })
   },
})

// Export action creators
export const { clearError } = productsSlice.actions

// Export reducer as default
export default productsSlice.reducer