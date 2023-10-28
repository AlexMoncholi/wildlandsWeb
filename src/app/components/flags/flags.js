import { useLanguageContext } from '@/app/context/languageContext';

function Flags(props) {
    const { setLanguage } = useLanguageContext();
    const { language } = useLanguageContext();

    return (
        <div className='flags' id='flags'>
           <img src={'/lang_es.png'} alt='Español' className={`flag__icon ${language === 'es' ? 'selected' : ''}`} onClick={() => setLanguage('es')} />
           <img src={'/lang_en.png'} alt='English' className={`flag__icon ${language === 'en' ? 'selected' : ''}`} onClick={() => setLanguage('en')} />
        </div>
    );
}

export default Flags;
