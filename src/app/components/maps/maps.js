
import { useLanguage } from '@/app/utils/languageUtils';

function Maps() {
  const { t } = useLanguage();

  return (
    <div className='maps' id='maps'>
        <div className="map__sauverge"></div>
        <div className="map__sanda"></div>
        <div className="map__northmountains"></div>
        <div className="map__greyhills"></div>
        <h1>{t('maps.title')}</h1>
        <p>{t('maps.text')}</p>
    </div>
  );
}

export default Maps;
