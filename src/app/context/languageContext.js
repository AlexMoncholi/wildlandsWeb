"use client"
import { createContext, useContext, useState } from 'react';
import translationsEs from '../locales/es/translations';
import translationsEn from '../locales/en/translations';

const LanguageContext = createContext();

export function useLanguageContext() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  const getTranslations = () => {
    switch (language) {
      case 'es':
        return translationsEs;
      case 'en':
        return translationsEn;
      default:
        return translationsEs;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: getTranslations() }}>
      {children}
    </LanguageContext.Provider>
  );
}
