
/**
 * useProducts
 * - Fetches from https://fakestoreapi.com/products
 * - Simulates network latency with a 2s setTimeout
 * - Demonstrates loading and error states with clear conditional rendering
 * - Exposes refetch() to re-trigger the loading flow (used when switching loaders)
 */
import { useEffect, useRef, useState } from 'react'

export type Product = {
  id: number
  title: string
  price: number
  image: string
}
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const abortRef = useRef<AbortController | null>(null)
  const requestIdRef = useRef(0)

  const fetchProducts = () => {
    // Abort any in-flight request
    abortRef.current?.abort()
    const abortController = new AbortController()
    abortRef.current = abortController

    setLoading(true)
    setError(null)

    const currentRequestId = ++requestIdRef.current

    // Simulate latency to showcase loaders
    const timeoutId = setTimeout(async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products', { signal: abortController.signal })
        if (!res.ok) throw new Error('Failed to load products')
        const data = (await res.json()) as Product[]
        // Only apply if this is the latest request and not aborted
        if (!abortController.signal.aborted && currentRequestId === requestIdRef.current) {
          setProducts(data)
          setLoading(false)
        }
      } catch (err) {
        if (abortController.signal.aborted) return
        if (currentRequestId !== requestIdRef.current) return
        setError(err instanceof Error ? err.message : 'Unknown error')
        setLoading(false)
      }
    }, 2000)

    return () => clearTimeout(timeoutId)
  }

  useEffect(() => {
    const clear = fetchProducts()
    return () => {
      abortRef.current?.abort()
      clear?.()
    }
  }, [])

  return { products, loading, error, refetch: fetchProducts }
}
