'use client';

import { createContext, useContext } from 'react';
import type { Locale } from '@/lib/i18n';

type TranslationValue = string | number | boolean | null | TranslationObject;
type TranslationObject = {
  [key: string]: TranslationValue;
};

type I18nContextValue = {
  locale: Locale;
  messages: TranslationObject;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: TranslationObject;
  children: React.ReactNode;
}) {
  return <I18nContext.Provider value={{ locale, messages }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

function getNestedValue(messages: TranslationObject, key: string): TranslationValue | undefined {
  return key.split('.').reduce<TranslationValue | undefined>((acc, part) => {
    if (!acc || typeof acc !== 'object') {
      return undefined;
    }
    return (acc as TranslationObject)[part];
  }, messages);
}

export function useT() {
  const { messages } = useI18n();

  return (key: string): string => {
    const value = getNestedValue(messages, key);
    return typeof value === 'string' ? value : key;
  };
}