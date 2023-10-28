import { useLanguageContext } from '@/app/context/languageContext';

function Flags(props) {
    const { setLanguage } = useLanguageContext();

    return (
        <div className='flags' id='flags'>
           <img src={'/lang_es.png'} alt='Español' onClick={() => setLanguage('es')} />
           <img src={'/lang_en.png'} alt='English' onClick={() => setLanguage('en')} />
        </div>
    );
}

export default Flags;
