import React from 'react'

/**
 * Spinner
 * - Compact alternative to Skeletons when page layout is already known
 */
export function Spinner({ label = 'Loading…' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-10 text-gray-600">
      <span className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
      <span className="text-sm">{label}</span>
    </div>
  )
}

export default Spinner
