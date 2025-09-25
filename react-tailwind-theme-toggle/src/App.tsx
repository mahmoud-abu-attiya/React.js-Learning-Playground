
import ThemeToggle from './components/ThemeToggle'

// Demo application styled with TailwindCSS showing dark mode via the `dark` class on <html>.
// Tailwind configuration uses the default v4 behavior where dark variants activate when
// the `dark` class is present on the root element. See useTheme and index.html script.

function App() {
  return (
    <main className='min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors'>
      <div className='max-w-3xl mx-auto p-6 space-y-8'>
        <header className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold'>Tailwind Dark Mode Switch</h1>
          <ThemeToggle />
        </header>

        <section className='space-y-3'>
          <p className='text-gray-700 dark:text-gray-300'>
            This page demonstrates using the <code>class</code> strategy for dark mode. The
            <code className='mx-1 px-1 rounded bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100'>dark</code>
            class is applied to the root <code>html</code> element based on your preference.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-800'>
              <h2 className='font-semibold mb-2'>Card</h2>
              <p className='text-sm text-gray-700 dark:text-gray-300'>
                Tailwind dark variants change colors when the <code>dark</code> class is present.
              </p>
              <button className='mt-3 rounded-md bg-blue-600 dark:bg-blue-300 text-white dark:text-neutral-800 px-3 py-2 text-sm'>
                Action
              </button>
            </div>

            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-800'>
              <h2 className='font-semibold mb-2'>Contrast</h2>
              <p className='text-sm text-gray-700 dark:text-gray-300'>
                Try switching between Light, Dark and System themes.
              </p>
              <button className='mt-3 rounded-md bg-green-600 dark:bg-green-300 text-white dark:text-neutral-800 px-3 py-2 text-sm'>
                contact 
              </button>
            </div>
            <p>You can read more about Tailwindcss dark mode in <a href="https://tailwindcss.com/docs/dark-mode" target='_black' className='text-blue-500 underline'>TailwindCSS Dark Mode</a></p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
