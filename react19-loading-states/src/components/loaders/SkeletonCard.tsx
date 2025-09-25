/**
 * SkeletonCard
 * - Shows a placeholder structure while content loads
 * - Uses Tailwind `animate-pulse` to convey progress
 * - Clear mapping to actual layout improves perceived performance
 */
export function SkeletonCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="aspect-square w-full rounded-lg bg-gray-200 animate-pulse" />
      <div className="mt-4 space-y-2">
        <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
        <div className="h-4 w-1/3 rounded bg-gray-200 animate-pulse" />
        <div className="h-9 w-full rounded-md bg-gray-200 animate-pulse" />
      </div>
    </div>
  )
}

export default SkeletonCard
