/**
 * ProductList Component
 * 
 * This component handles the display of all products in a responsive grid layout.
 * Key features:
 * - Fetches products from our JSON file using Redux
 * - Displays loading
 * - Handles error states with retry functionality
 * 
 * Uses Redux Toolkit's async thunks for data fetching and state management.
 */

import React, { useEffect } from 'react'
import { useAppDispatch, useProducts } from '../hooks/useRedux'
import { fetchProducts } from '../store/slices/productsSlice'
import ProductCard from './ProductCard'

const ProductList: React.FC = () => {
   const dispatch = useAppDispatch()
   const { products, loading, error } = useProducts()

   /**
    * Fetch products when component mounts
    * This triggers our async thunk action
    */
   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])

   /**
    * Handle retry when fetch fails
    * Allows users to retry failed requests
    */
   const handleRetry = () => {
      dispatch(fetchProducts())
   }

   /**
    * Loading State - Show skeleton placeholders
    * Creates a better user experience while data loads
    */
   if (loading) {
      return (
         <div>
            loading...
         </div>
      )
   }

   /**
    * Error State - Show error message with retry button
    * Provides clear feedback when something goes wrong
    */
   if (error) {
      return (
         <div>
            Error: {error}

            <button
               onClick={handleRetry}
            >
               Try Again
            </button>
         </div>
      )
   }

   /**
    * Success State - Show products grid
    * Main product display with responsive grid layout
    */
   return (
      <div className="container mt-20">
            <h1 className="text-4xl md:text-5xl font-bold text-center">
               Products
            </h1>

         {/* Products Grid */}
         {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
               {products.map((product) => (
                  <ProductCard
                     key={product.id}
                     product={product}
                  />
               ))}
            </div>
         ) : (
            /* Empty State */
            <div>
               <h3 className="text-2xl font-semibold">
                  No products available
               </h3>
            </div>
         )}
      </div>
   )
}

export default ProductList