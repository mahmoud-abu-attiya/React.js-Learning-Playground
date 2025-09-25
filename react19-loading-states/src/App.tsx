import { useState, useTransition } from 'react'
import { useProducts } from './hooks/useProducts'
import { LoaderSwitch, type LoaderMode } from './components/LoaderSwitch'
import { ProductGrid } from './components/ProductGrid'

function App() {
  const { products, loading, error, refetch } = useProducts()
  const [loaderMode, setLoaderMode] = useState<LoaderMode>('skeleton')
  const [isPending, startTransition] = useTransition()

  const handleChangeLoader = (mode: LoaderMode) => {
    // Non-blocking state update + refetch to re-run the loading experience
    startTransition(() => {
      setLoaderMode(mode)
      refetch()
    })
  }

  return (
    <main className='min-h-screen bg-gray-50 text-gray-900'>
      <div className='mx-auto max-w-6xl px-4 py-8 space-y-8'>
        <header className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
          <div>
            <h1 className='text-2xl font-semibold'>Modern Loading States</h1>
            <p className='text-sm text-gray-600'>React 19 + TypeScript + TailwindCSS</p>
          </div>
          <div className='flex items-center gap-2'>
            <LoaderSwitch mode={loaderMode} onChange={handleChangeLoader} />
            {isPending && <span className='text-xs text-gray-500'>refetching…</span>}
          </div>
        </header>

        {error && (
          <div className='rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700'>
            {error}
          </div>
        )}

        <section className='space-y-3'>
          <h2 className='text-lg font-medium'>Products</h2>
          <ProductGrid products={products} loading={loading} loaderMode={loaderMode} />
        </section>
      </div>
    </main>
  )
}

export default App
