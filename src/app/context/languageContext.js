"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import translationsEs from '../locales/es/translations';
import translationsEn from '../locales/en/translations';

const LanguageContext = createContext();

const languageList = ['es', 'en'];

export function useLanguageContext() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const userLanguage = window.navigator.language.split('-')[0];
    if (languageList.includes(userLanguage)) {
      setLanguage(userLanguage);
    }
  }, []);

  const getTranslations = () => {
    switch (language) {
      case 'es':
        return translationsEs;
      case 'en':
        return translationsEn;
      default:
        return translationsEn;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: getTranslations() }}>
      {children}
    </LanguageContext.Provider>
  );
}
