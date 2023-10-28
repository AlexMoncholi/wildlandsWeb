import { useLanguageContext } from '@/app/context/languageContext';

function Description (props) {
    const { language } = useLanguageContext();
    
    return (
        <div className={`characters__description`}>
            <p className={`characters__description--name`}>{props.character.name}</p>
            <p className={`characters__description--text`}>{props.character.description[language]}</p>
        </div>
    );
  }
  
  export default Description ;
  