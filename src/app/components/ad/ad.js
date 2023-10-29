import { useLanguage } from '@/app/utils/languageUtils';
import Link from 'next/link';

function Ad(props) {
    const { t } = useLanguage();

    return (
        <div className='ad' id='ad'>
            <h1>{t('ad.title')}</h1>
            <Link href="http://164.92.201.175:3000/" passHref={true}>
                <div className='ad__button'>
                    <p>{t('ad.ok')}</p>
                </div>
            </Link>
            <div className='ad__qr'>
                <p>{t('ad.scan')}</p>
                <img src={'/ad/qrtest2.png'} alt='' />
            </div>
        </div>
    );
}

export default Ad;
