import { useLanguageContext } from '@/app/context/languageContext';
import { useLanguage } from '@/app/utils/languageUtils';

function BetaTestingContent() {
  const { t } = useLanguage();
  const { language } = useLanguageContext();
  
  return (
    <div className='betatesting' id='betatesting'>
      <div className='betatesting__advertising'>
          <img src={`/ad/betatesting_img_${language}.png`} alt="WE WANT YOU FOR BETATESTING" />
      </div>
      <div className='betatesting__content'>{t('betatesting.text')}</div>
    </div>
  );
}

export default BetaTestingContent;
