import { useState, useEffect } from "react";

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

  return (
    <div className='cards' id='cards'>
      <h1>¡Construye tu mazo!</h1>
      <p>
        Consigue chapas en tus viajes, para poder mejorar
        tu mazo de habilidades, y patear los culos de
        los supervivientes que quieran quitarte tus preciadas
        y escasas posesiones.
      </p>
      <div className='cards__container'>
        {cards.es.map((card, index) => {
          return (<img src={card} className={`cards__container--image${index} ${props.displayCards ? '' : 'cardhidden'}`} alt='' key={index} />)
        })}
      </div>
    </div>
  );
}

export default Cards;
