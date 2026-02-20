'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import uk from '@public/images/language-switcher/uk.png';
import saudi from '@public/images/language-switcher/saudi.png';
import Image from 'next/image';

const languages = [
  { code: 'en', name: 'English', flagImage: uk },
  { code: 'ar', name: 'العربية', flagImage: saudi },
];

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, isLoading, isMounted } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Desktop: Show current language flag (en = UK, ar = Saudi)
  // Mobile: Show opposite language flag for switching (en = Saudi, ar = UK)
  // Default to 'en' if currentLanguage is not set yet to prevent flicker
  const activeLang = currentLanguage || 'en';
  const currentLangFlag = activeLang === 'en' ? uk : saudi;
  const nextLang = activeLang === 'en' ? 'ar' : 'en';
  const nextLangFlag = nextLang === 'en' ? uk : saudi;

  // Handle clicking outside dropdown (desktop only)
  useEffect(() => {
    if (!isMounted) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMounted]);

  const handleLanguageChange = async (langCode: string) => {
    if (langCode !== activeLang) {
      await changeLanguage(langCode);
    }
    setIsOpen(false);
  };

  const toggleLanguageMobile = async () => {
    await changeLanguage(nextLang);
  };

  if (!isMounted) {
    // Show actual flags during SSR to prevent delay/flicker
    return (
      <div className="relative">
        {/* Mobile View - Show opposite flag */}
        <button
          disabled
          className="sm:hidden flex items-center justify-center p-1 rounded-full bg-transparent shadow-sm opacity-50"
          aria-label="Toggle Language">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={nextLangFlag}
              alt={nextLang === 'en' ? 'English' : 'العربية'}
              width={32}
              height={32}
              className="object-cover"
              priority
            />
          </div>
        </button>
        {/* Desktop View - Show current flag */}
        <div className="hidden sm:block">
          <button
            disabled
            className="flex items-center justify-center p-1 rounded-full opacity-50"
            aria-label="Language Menu">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={currentLangFlag}
                alt={activeLang === 'en' ? 'English' : 'العربية'}
                width={32}
                height={32}
                className="object-cover"
                priority
              />
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      {/* 🌐 Mobile View: Flag Icon */}
      <button
        onClick={toggleLanguageMobile}
        disabled={isLoading}
        className="sm:hidden flex items-center justify-center p-1 rounded-full bg-transparent hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 shadow-sm"
        aria-label="Toggle Language">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={nextLangFlag}
            alt={nextLang === 'en' ? 'English' : 'العربية'}
            width={32}
            height={32}
            className="object-cover"
            priority
          />
        </div>
      </button>

      {/* 💻 Desktop View: Dropdown */}
      <div className="hidden sm:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          disabled={isLoading}
          className="flex items-center justify-center p-1 rounded-full hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={t('common.menu')}>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={currentLangFlag}
              alt={activeLang === 'en' ? 'English' : 'العربية'}
              width={32}
              height={32}
              className="object-cover"
              priority
            />
          </div>
        </button>

        {isOpen && (
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-44 bg-white rounded-lg shadow-lg z-50">
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors duration-200 ${
                    language.code === activeLang ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}>
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={language.flagImage}
                      alt={language.name}
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="flex-1">{language.name}</span>
                  {language.code === activeLang && (
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
