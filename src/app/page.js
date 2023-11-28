"use client"
import { useEffect, useState } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
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
  const [isInSection, setIsInSection] = useState(true);

  const onScroll = handleScroll(setDisplayCards, setDisplayFlyingCards, isInSection);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, isInSection]);

  const handleSectionChange = (section) => {
    setIsInSection(section === 'home');
  };
  
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
      <Footer />
    </main>
  );
}

export default Home;
