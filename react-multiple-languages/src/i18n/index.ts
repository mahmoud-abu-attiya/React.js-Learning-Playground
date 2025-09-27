import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';

/**
 * i18next Configuration
 * 
 * This file configures i18next for internationalization support.
 * It sets up:
 * - Language detection from browser/localStorage
 * - Fallback language (English)
 * - Translation resources for English and Arabic
 * - React integration
 */

i18n
  // Language detection plugin - detects language from:
  // 1. localStorage (if previously set)
  // 2. Browser language settings
  // 3. URL parameters
  .use(LanguageDetector)
  
  // React integration plugin
  .use(initReactI18next)
  
  // Initialize i18next
  .init({
    // Available languages
    supportedLngs: ['en', 'ar'],
    
    // Fallback language if translation is missing
    fallbackLng: 'en',
    
    // Namespace for translations (default namespace)
    defaultNS: 'translation',
    
    // Translation resources
    resources: {
      en: {
        translation: enTranslation
      },
      ar: {
        translation: arTranslation
      }
    },
    
    // Detection options
    detection: {
      // Order of language detection
      order: ['localStorage', 'navigator', 'htmlTag'],
      
      // localStorage key to store selected language
      lookupLocalStorage: 'i18nextLng',
      
      // Cache user language selection
      caches: ['localStorage']
    },
    
    // Interpolation options
    interpolation: {
      // React already escapes values, so we don't need to escape again
      escapeValue: false
    },
    
    // Development options
    debug: false, // Set to true for development debugging
    
    // React options
    react: {
      // Use Suspense for loading translations
      useSuspense: false
    },
    
    // Language change options
    saveMissing: false,
    
    // Key separator for nested translations
    keySeparator: '.',
    
    // Namespace separator
    nsSeparator: ':'
  });

export default i18n;
