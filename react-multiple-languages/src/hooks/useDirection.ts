import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * useDirection Hook
 * 
 * This custom hook manages RTL/LTR direction based on the selected language.
 * It automatically:
 * - Detects the current language
 * - Sets the appropriate direction (RTL for Arabic, LTR for English)
 * - Updates the HTML document's dir and lang attributes
 * - Manages body classes for styling
 * - Provides direction state to components
 */
export const useDirection = () => {
   const { i18n } = useTranslation();
   const [isRTL, setIsRTL] = useState<boolean>(false);

   useEffect(() => {
      /**
       * Update direction based on current language
       * Arabic (ar) = RTL, English (en) = LTR
       */
      const updateDirection = () => {
         const currentLanguage = i18n.language;
         const isArabic = currentLanguage === 'ar';

         setIsRTL(isArabic);

         // Update HTML document attributes
         document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
         document.documentElement.setAttribute('lang', currentLanguage);

         // Update body classes for styling
         document.body.classList.remove('rtl', 'ltr');
         document.body.classList.add(isArabic ? 'rtl' : 'ltr');
      };

      // Set initial direction
      updateDirection();

      // Listen for language changes
      const handleLanguageChange = () => {
         updateDirection();
      };

      // Add event listener for language changes
      i18n.on('languageChanged', handleLanguageChange);

      // Cleanup event listener on unmount
      return () => {
         i18n.off('languageChanged', handleLanguageChange);
      };
   }, [i18n]);

   return {
      isRTL,
      direction: isRTL ? 'rtl' : 'ltr',
      language: i18n.language
   };
};
