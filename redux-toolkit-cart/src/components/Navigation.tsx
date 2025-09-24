/**
 * Navigation Component
 * 
 * This component provides the main navigation bar for our shopping cart application.
 * It includes:
 * - Navigation links to different pages
 * - Cart with item count badge
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useRedux'

const Navigation: React.FC = () => {
   const { totalItems } = useCart()

   return (
      <nav className="border-b border-border sticky top-0 left-0 z-10 bg-gray-100">
         <div className="flex items-center gap-8 container py-6">
            <Link
               to="/"
               className='text-lg font-medium'
            >
               Products
            </Link>
            <Link
               to="/cart"
               className='text-lg font-medium relative'
            >
               {/* Cart Badge - shows item count */}
               {totalItems > 0 && (
                  <span className="bg-red-600 text-white text-sm px-1 aspect-square rounded-full absolute top-0 left-0 -translate-1/2">
                     {totalItems}
                  </span>
               )}
               Cart
            </Link>
         </div>
      </nav>
   )
}

export default Navigation