import { useLanguageContext } from '@/app/context/languageContext';
import { useLanguage } from '@/app/utils/languageUtils';
import Link from 'next/link';

const Footer = () => {
    const { t } = useLanguage();
    const { language } = useLanguageContext();
    return (
        <footer>
            <p>
                <span>© A mi estantería - Digital</span>
                <span>
                    <Link href="/policies">{t('footer.privacy')}</Link>
                </span>
                <span>2023</span>
            </p>
            <div className='footer__icons'>
                <Link href="https://www.instagram.com/a_mi_estanteria/" target='_blank'><img src={`/icons/instagram.png`} alt='Instagram' /></Link>
            </div>
        </footer>
    );
};

export default Footer;
