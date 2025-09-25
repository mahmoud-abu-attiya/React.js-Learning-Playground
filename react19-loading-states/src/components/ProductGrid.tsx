import type { Product } from '../hooks/useProducts'
import { SkeletonCard } from './loaders/SkeletonCard'
import { ProductCard } from './ProductCard'
import Spinner from './loaders/Spinner'

export function ProductGrid({
  products,
  loading,
  loaderMode,
}: {
  products: Product[]
  loading: boolean
  loaderMode: 'skeleton' | 'spinner'
}) {
  // When using Skeleton mode, we render a grid of skeleton cards that match the final layout
  if (loading && loaderMode === 'skeleton') {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  //- When using Spinner mode we render a simple busy indicator when we can't or don't want to layout skeletons
  if (loading && loaderMode === 'spinner') {
    return <Spinner label="Loading products…" />
  }


  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

export default ProductGrid
