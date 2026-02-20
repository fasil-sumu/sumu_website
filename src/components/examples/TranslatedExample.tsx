'use client';

import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';

export default function ExampleTranslatedComponent() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
      <h1 className="text-3xl font-bold mb-4">
        {t('hero.title')}
      </h1>
      
      <p className="text-lg mb-6 text-gray-600">
        {t('hero.subtitle')}
      </p>
      
      <p className="mb-8 text-gray-500">
        {t('hero.description')}
      </p>
      
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          {t('hero.cta')}
        </button>
        
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
          {t('hero.ctaSecondary')}
        </button>
      </div>
      
      {/* Features Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">
          {t('features.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {t('features.feature1.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.feature1.description')}
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {t('features.feature2.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.feature2.description')}
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {t('features.feature3.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.feature3.description')}
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {t('features.feature4.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.feature4.description')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Form Example */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">
          {t('forms.email')}
        </h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              {t('forms.email')}
            </label>
            <input
              type="email"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isRTL ? 'text-right' : 'text-left'
              }`}
              placeholder={t('forms.email')}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              {t('forms.message')}
            </label>
            <textarea
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isRTL ? 'text-right' : 'text-left'
              }`}
              rows={4}
              placeholder={t('forms.message')}
            />
          </div>
          
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            {t('forms.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}
