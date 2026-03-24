'use client';

import { useTranslation } from 'react-i18next';

interface TranslatedTextProps {
  i18nKey: string;
  defaultText?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values?: Record<string, any>;
}

const TranslatedText = ({ i18nKey, defaultText, values }: TranslatedTextProps) => {
  const { t } = useTranslation();
  return <>{t(i18nKey, { ...values, defaultValue: defaultText ?? i18nKey })}</>;
};

export default TranslatedText;
