/**
 * ProductCard Component
 * 
 * This component displays an individual product with:
 * - Product image, name, description, and price
 * - Add to cart button with
 */

import { type Product } from '../store/slices/cartSlice'
import { useAppDispatch } from '../hooks/useRedux'
import { addToCart } from '../store/slices/cartSlice'

interface ProductCardProps {
   product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
   const dispatch = useAppDispatch()

   /**
    * Handle adding product to cart
    */
   const handleAddToCart = async () => {
      // Dispatch add to cart action
      dispatch(addToCart(product))

      // Show success alert notification
      alert(`${product.name} has been added to your cart.`)
   }

   return (
      <div className="border border-gray-300 rounded">
         <div className="p-0">
            <div className="overflow-hidden w-full">
               <img
                  src={product.image}
                  alt={`${product.name} - ${product.description}`}
                  className="w-full h-64 object-contain"
                  loading="lazy"
               />
            </div>

            <div className="p-6 space-y-4">
               <span>
                  {product.category}
               </span>

               <h3 className="text-xl font-semibold">
                  {product.name}
               </h3>

               <p>
                  {product.description}
               </p>

               <div className="flex items-center justify-between pt-2">
                  <div className="space-y-1">
                     <span className="text-2xl font-bold">
                        ${product.price.toFixed(2)}
                     </span>
                  </div>

                  <button onClick={handleAddToCart}>
                     Add to Cart
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductCard