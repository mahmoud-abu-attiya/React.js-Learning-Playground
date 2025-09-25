import type { Product } from '../hooks/useProducts'

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="aspect-square w-full rounded-lg object-contain"
      />
      <div className="mt-3">
        <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
        <p className="mt-1 text-sm text-gray-600">${product.price.toFixed(2)}</p>
        <button
          className="mt-3 h-9 w-full rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
