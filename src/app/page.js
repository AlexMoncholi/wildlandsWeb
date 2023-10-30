"use client"
import { useEffect, useState } from 'react';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Cards from './components/cards/cards';
import Maps from './components/maps/maps';
import Navigator from './components/navigator/navigator';
import Characters from './components/characters/characters';
import Enemies from './components/enemies/enemies';
import Ad from './components/ad/ad';

import { handleScroll } from './components/helpers/helpers';

function Home(props) {
  const [displayCards, setDisplayCards] = useState(false);
  const [displayFlyingCards, setDisplayFlyingCards] = useState(false);

  const onScroll = handleScroll(setDisplayCards, setDisplayFlyingCards);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
  
  return (
    <main>
      <Navigator />
      <Header />
      <Intro />
      <Cards displayCards={displayCards} />
      <Characters />
      <Maps />
      <Enemies displayFlyingCards={displayFlyingCards} />
      <Ad />
    </main>
  );
}

export default Home;
