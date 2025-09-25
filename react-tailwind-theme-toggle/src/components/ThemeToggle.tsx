import { useTheme } from '../hooks/useTheme'

// A reusable ThemeToggle component that cycles through light, dark, and system.
// It relies on the useTheme hook, which applies/removes the `dark` class on <html>
// and stores preference in localStorage.

export default function ThemeToggle() {
   const { preference, effectiveTheme, cycleTheme, setLight, setDark, setSystem } = useTheme()

   // Icons: minimalist characters to avoid extra deps
   const icon = effectiveTheme === 'dark' ? '🌙' : '🌞'

   return (
      <div className="inline-flex items-center gap-2 flex-wrap">
         {/* Main button: cycles through light -> dark -> system */}
         <button
            type="button"
            onClick={cycleTheme}
            className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm font-medium shadow-sm
                   bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700
                   transition-colors"
            aria-label="Toggle theme"
            title={`Theme: ${preference} (click to cycle)`}
         >
            <span className="mr-2">{icon}</span>
            <span className="uppercase">{preference}</span>
         </button>

         {/* Optional explicit selectors for accessibility/discoverability */}
         <div className="flex rounded-md overflow-hidden border border-gray-300 dark:border-gray-700">
            <button
               type="button"
               onClick={setLight}
               className={`px-3 py-2 rounded text-sm font-medium transition-colors ${effectiveTheme === 'light'
                     ? 'border-3 border-red-700 text-red-700 dark:border-red-400 dark:text-red-400'
                     : 'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
                  }`}
               aria-pressed={effectiveTheme === 'light'}
            >
               Light
            </button>
            <button
               type="button"
               onClick={setDark}
               className={`px-3 py-2 rounded text-sm font-medium transition-colors ${effectiveTheme === 'dark'
                     ? 'border-3 border-red-700 text-red-700 dark:border-red-400 dark:text-red-400'
                     : 'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
                  }`}
               aria-pressed={effectiveTheme === 'dark'}
            >
               Dark
            </button>
            <button
               type="button"
               onClick={setSystem}
               className={`px-3 py-2 rounded text-sm font-medium transition-colors ${preference === 'system'
                     ? 'border-3 border-red-700 text-red-700 dark:border-red-400 dark:text-red-400'
                     : 'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
                  }`}
               aria-pressed={preference === 'system'}
            >
               System
            </button>
         </div>
      </div>
   )
}


