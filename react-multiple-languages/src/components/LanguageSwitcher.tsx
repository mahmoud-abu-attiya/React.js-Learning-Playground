import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * LanguageSwitcher Component
 * 
 * This component provides a toggle button to switch between English and Arabic languages.
 * It uses i18next's useTranslation hook to access the current language and changeLanguage function.
 * The selected language is automatically saved to localStorage by i18next configuration.
 */
const LanguageSwitcher: React.FC = () => {
  // useTranslation hook provides access to:
  // - t: translation function
  // - i18n: i18next instance with methods like changeLanguage
  const { t, i18n } = useTranslation();

  /**
   * Handle language switching
   * This function toggles between English ('en') and Arabic ('ar')
   * The language change is automatically persisted to localStorage
   * by the i18next LanguageDetector plugin
   */
  const handleLanguageSwitch = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  {/* Language toggle button */ }
  return (
    <button
      onClick={handleLanguageSwitch}
      className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-200 shadow-xl cursor-pointer scale-120 ring-2 ring-blue-600 ring-offset-2"
      role="switch"
      aria-checked={i18n.language === 'ar'}
      aria-label={t('language.switch')}
      dir='rtl'
    >
      {/* Toggle switch background */}
      <span
        className={`${i18n.language === 'ar' ? '-translate-x-1' : '-translate-x-7'
          } inline-block h-6 w-6 rounded-full bg-white shadow-lg transition-translate duration-200`}
      />

      {/* Language indicators on the switch */}
      <span className="absolute h-6 w-6 left-1 top-1/2 transform -translate-y-1/2 text-xs font-bold text-gray-600 flex justify-center items-center">
        EN
      </span>
      <span className="absolute h-6 w-6 right-1 top-1/2 transform -translate-y-1/2 text-xs font-bold text-gray-600 flex justify-center items-center">
        ع
      </span>
    </button>


  );
};

export default LanguageSwitcher;
