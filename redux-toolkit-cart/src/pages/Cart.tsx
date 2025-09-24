/**
 * Cart Page Component
 * 
 * This page displays the complete shopping cart with:
 * - List of all items in the cart with images and details
 * - Quantity controls for each item (increase, decrease, remove)
 * - Real-time price calculations and totals
 * - Cart summary with item count and total price
 * 
 * Integrates with Redux store for real-time cart state management.
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { useCart, useAppDispatch } from '../hooks/useRedux'
import {
   removeFromCart,
   addToCart,
   removeItemCompletely,
   updateQuantity,
   clearCart
} from '../store/slices/cartSlice'

const Cart: React.FC = () => {
   const { items, totalItems, totalPrice } = useCart()
   const dispatch = useAppDispatch()

   /**
    * Handle quantity increase for a specific item
    */
   const handleIncreaseQuantity = (productId: string) => {
      const item = items.find(item => item.id === productId)
      if (item) {
         dispatch(addToCart(item))
      }
   }

   /**
    * Handle quantity decrease for a specific item
    */
   const handleDecreaseQuantity = (productId: string) => {
      dispatch(removeFromCart(productId))
   }

   /**
    * Handle complete removal of an item from cart
    */
   const handleRemoveItem = (productId: string, productName: string) => {
      dispatch(removeItemCompletely(productId))
      alert(`${productName} has been removed from your cart.`)
   }

   /**
    * Handle direct quantity input change
    */
   const handleQuantityChange = (productId: string, newQuantity: string) => {
      const quantity = parseInt(newQuantity)
      if (!isNaN(quantity) && quantity >= 0) {
         dispatch(updateQuantity({ id: productId, quantity }))
      }
   }

   /**
    * Handle clearing entire cart
    */
   const handleClearCart = () => {
      dispatch(clearCart())
      alert("All items have been removed from your cart.")
   }

   /**
    * Empty Cart State
    * Show when no items in cart
    */
   if (items.length === 0) {
      return (
         <div className="container mx-auto px-4 py-16 max-w-lg text-center space-y-8">
            <h1 className="text-3xl font-bold">
               Your cart is empty
            </h1>
            <p className="text-lg">
               Looks like you haven't added anything to your cart yet.
               Start shopping to fill it up!
            </p>
            <Link to="/">
               <button>
                  Start Shopping
               </button>
            </Link>
         </div>
      )
   }

   /**
    * Cart with Items State
    * Show cart contents when items exist
    */
   return (
      <div className="container mx-auto px-4 py-8">
         <div className="flex items-center justify-between mb-8">

            <h1 className="text-3xl font-bold">
               Shopping Cart ({totalItems} items)
            </h1>

            <button onClick={handleClearCart}>
               Clear Cart
            </button>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
               {items.map((item) => (
                  <div key={item.id} className="border border-gray-300 rounded">
                     <div className="p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                           {/* Product Image */}
                           <div className="flex-shrink-0">
                              <img
                                 src={item.image.startsWith('/src/assets/')
                                    ? item.image.replace('/src/assets/', 'src/assets/')
                                    : item.image}
                                 alt={item.name}
                                 className="w-24 h-24 object-cover rounded-lg"
                              />
                           </div>

                           {/* Product Details */}
                           <div className="flex-grow space-y-2">
                              <div className="flex justify-between items-start">
                                 <div>
                                    <h3 className="text-lg font-semibold">
                                       {item.name}
                                    </h3>
                                    <p>
                                       {item.description}
                                    </p>
                                 </div>

                                 {/* Remove Button */}
                                 <button
                                    onClick={() => handleRemoveItem(item.id, item.name)}
                                    style={{ backgroundColor: "red", color: "white" }}
                                    title='Delete'
                                 >
                                    D
                                 </button>
                              </div>

                              {/* Price and Quantity Controls */}
                              <div className="flex items-center justify-between pt-2">
                                 <div className="text-xl font-bold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                    <span className="text-sm font-normal ml-2">
                                       ${item.price.toFixed(2)} each
                                    </span>
                                 </div>

                                 {/* Quantity Controls */}
                                 <div className="flex items-center space-x-2">
                                    <button
                                       onClick={() => handleDecreaseQuantity(item.id)}
                                       disabled={item.quantity <= 1}
                                    >
                                       -
                                    </button>

                                    <input
                                       type="number"
                                       value={item.quantity}
                                       onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                       className="w-16 text-center border rounded px-2 py-1"
                                       min="1"
                                    />

                                    <button
                                       onClick={() => handleIncreaseQuantity(item.id)}
                                    >
                                       +
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
               <div className="sticky top-24">
                  <header>
                     <h3 className="text-xl">
                        Order Summary
                     </h3>
                  </header>
                  <div className="space-y-6">
                     {/* Items Summary */}
                     <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                           <span>Subtotal ({totalItems} items)</span>
                           <span className="font-medium">${totalPrice.toFixed(2)}</span>
                        </div>
                     </div>

                     {/* Checkout Button */}
                     <button
                        className="w-full"
                        onClick={() => alert("Checkout not implemented")}
                     >
                        Proceed to Checkout
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart