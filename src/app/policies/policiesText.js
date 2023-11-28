import { useLanguage } from '@/app/utils/languageUtils';

function PoliciesText() {
  const { t } = useLanguage();
  
  return (
    <div className='policies' id='policies'>
      <h1>{t('policies.title')}</h1>
      <>{t('policies.intro')}</>
    </div>
  );
}

export default PoliciesText;
