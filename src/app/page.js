"use client"
import { useEffect, useState } from 'react'
import Header from './components/header/header'
import Intro from './components/intro/intro'
import Cards from './components/cards/cards'
import Maps from './components/maps/maps'
import Navigator from './components/navigator/navigator'
import Characters from './components/characters/characters'
import Enemies from './components/enemies/enemies'

function Home(props) {
  const [displayCards, setDisplayCards] = useState(false);
  const [displayFlyingCards, setDisplayFlyingCards] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const cardsDiv = document.getElementById('cards');
    const cardsDivPosition = cardsDiv ? cardsDiv.getBoundingClientRect() : null;
    const flyingCardsDiv = document.getElementById('enemies');
    const flyingCardsDivPosition = flyingCardsDiv ? flyingCardsDiv.offsetTop : null;
    if (cardsDivPosition && scrollTop >= cardsDivPosition.top) {
      setDisplayCards(true);
    } else {
      setDisplayCards(false);
    }
    if (flyingCardsDivPosition && window.scrollY + window.innerHeight >= flyingCardsDivPosition) {
      setDisplayFlyingCards(true);
    } else {
      setDisplayFlyingCards(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <main>
      <Header />
      <Intro />
      <Cards displayCards={displayCards} />
      <Characters />
      <Maps />
      <Enemies displayFlyingCards={displayFlyingCards} />
    </main>
  )
}

export default Home;