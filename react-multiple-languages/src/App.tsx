
import { Suspense } from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import Home from './components/Home';

/**
 * App Component
 * 
 * This is the main application component that:
 * 1. Initializes i18next configuration
 * 2. Provides a Suspense boundary for translation loading
 * 3. Renders the LanguageSwitcher and Home components
 * 4. Handles RTL (Right-to-Left) layout for Arabic language
 * 5. Manages document direction based on selected language
 */
function App() {
  return (
    <div className="min-h-screen">
      {/* Suspense boundary for i18next loading */}
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }>
        {/* Language Switcher - Fixed at top */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2">
          <LanguageSwitcher />
        </nav>

        {/* Main Content */}
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
