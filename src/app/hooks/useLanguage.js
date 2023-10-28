import { useLanguageContext } from '../context/languageContext';

function useLanguage() {
  const { language, setLanguage, translations } = useLanguageContext();

  return {
    language,
    setLanguage,
    translations,
  };
}

export default useLanguage;
