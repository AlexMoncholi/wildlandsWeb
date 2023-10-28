import { useState, useEffect } from "react";
import { useLanguage } from '@/app/utils/languageUtils';

function Cards(props) {
  const [cards, setCards] = useState({
    es: [
      '/cards/analyze_es.png',
      '/cards/hide_es.png',
      '/cards/focus_es.png',
      '/cards/dodge_es.png',
      '/cards/brutality_es.png',
    ]
  });
  const { t } = useLanguage();

  return (
    <div className='cards' id='cards'>
      <h1>{t('cards.title')}</h1>
      <p>{t('cards.text')}</p>
      <div className='cards__container'>
        {cards.es.map((card, index) => {
          return (<img src={card} className={`cards__container--image${index} ${props.displayCards ? '' : 'cardhidden'}`} alt='' key={index} />)
        })}
      </div>
    </div>
  );
}

export default Cards;
