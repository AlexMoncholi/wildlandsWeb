import { useLanguage } from '@/app/utils/languageUtils';

function Intro() {
  const { t } = useLanguage();
  
  return (
    <div className='intro' id='intro'>
      <h1>{t('home.welcome')}</h1>
      <>{t('home.intro')}</>
    </div>
  );
}

export default Intro;
