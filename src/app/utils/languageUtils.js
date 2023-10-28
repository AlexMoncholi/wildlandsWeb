import { useLanguageContext } from '../context/languageContext';

export function useLanguage() {
  const { language, translations } = useLanguageContext();

  const t = (key) => {
    const translation = key.split('.').reduce((obj, k) => obj?.[k], translations) || key;
    if (typeof translation === 'function') {
      return translation();
    }
    return translation;
  };

  return { language, translations, t };
}
