export type LoaderMode = 'skeleton' | 'spinner'

/**
 * LoaderSwitch
 * - Lets the user switch between Skeleton and Spinner loaders
 *   startTransition tells React this state update is low-priority UI
 *   so rendering heavy trees (e.g., many skeletons) won't block typing/interaction.
 */
export function LoaderSwitch({
  mode,
  onChange,
}: {
  mode: LoaderMode
  onChange: (mode: LoaderMode) => void
}) {

  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-2 shadow-sm">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="loader"
          value="skeleton"
          checked={mode === 'skeleton'}
          onChange={() => onChange('skeleton')}
          className="h-4 w-4 accent-gray-700"
        />
        <span className="text-sm">Skeleton</span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="loader"
          value="spinner"
          checked={mode === 'spinner'}
          onChange={() => onChange('spinner')}
          className="h-4 w-4 accent-gray-700"
        />
        <span className="text-sm">Spinner</span>
      </label>
    </div>
  )
}

export default LoaderSwitch
