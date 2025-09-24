/**
 * Custom Redux Hooks
 * 
 * These typed hooks provide a convenient way to interact with our Redux store
 * while maintaining TypeScript type safety throughout the application.
 * 
 * Using these hooks instead of the plain useSelector and useDispatch ensures
 * that we get proper TypeScript intellisense and type checking.
 */

import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

// Typed version of useDispatch hook
// This ensures we get proper typing for thunk actions
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Typed version of useSelector hook  
// This ensures we get proper typing for our state structure
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Custom hook to get cart state with computed values
export const useCart = () => {
   return useAppSelector((state) => state.cart)
}

// Custom hook to get products state
export const useProducts = () => {
   return useAppSelector((state) => state.products)
}