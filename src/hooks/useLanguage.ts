'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const currentLanguage = i18n.language || 'en';
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    setIsRTL(rtlLanguages.includes(currentLanguage));
  }, [i18n.language]);

  const changeLanguage = async (lng: string) => {
    setIsLoading(true);
    await i18n.changeLanguage(lng);

    // Update document direction
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    const isRTL = rtlLanguages.includes(lng);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;

    // Update body class for RTL styling
    if (isRTL) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }

    setIsRTL(isRTL);
    setIsLoading(false);
  };

  return {
    currentLanguage: i18n.language,
    isRTL,
    isLoading,
    isMounted,
    changeLanguage,
    t: i18n.t,
  };
};
