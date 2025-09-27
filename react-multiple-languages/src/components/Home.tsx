import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDirection } from '../hooks/useDirection';

/**
 * Home Component
 * 
 * This component demonstrates the use of translations in a React component.
 * It uses the useTranslation hook to access translated strings and displays
 * a content in the selected language.
 */
const Home: React.FC = () => {
  // useTranslation hook provides access to the translation function 't'
  const { t } = useTranslation();
  
  // Get current direction for RTL/LTR support
  const { isRTL } = useDirection();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            {t('welcome')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className={`text-3xl font-bold text-gray-800 mb-6`}>
              {t('features.title')}
            </h2>
            
            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-6">
              {(Array.isArray(t('features.list', { returnObjects: true }))
                ? (t('features.list', { returnObjects: true }) as string[])
                : []
              ).map((feature: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  {/* Feature icon */}
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Feature text */}
                  <p className="text-gray-700 font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Language Info Card */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className={`bg-white rounded-xl shadow-lg p-6 border-blue-500 ${
            isRTL ? 'border-r-4' : 'border-l-4'
          }`}>
            <div className="flex items-center mb-4 gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("persistence.title")}
              </h3>
            </div>
            <p className="text-gray-600">
            {t("persistence.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
