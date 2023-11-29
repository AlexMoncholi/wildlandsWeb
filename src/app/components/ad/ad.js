import { useLanguage } from '@/app/utils/languageUtils';
import Link from 'next/link';

function Ad(props) {
    const { t } = useLanguage();

    return (
        <div className='ad' id='ad'>
            <h1>{t('ad.title')}</h1>
            {/* <div className='ad__qr'>
                <p>{t('ad.scan')}</p>
                <img src={'/ad/qrtest2.png'} alt='' />
            </div> */}
        </div>
    );
}

export default Ad;
