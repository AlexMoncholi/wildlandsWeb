"use client"
import { useEffect, useState } from 'react';
import Header from '../components/header/header';
import PoliciesText from './policiesText';

import { handleScroll } from '../components/helpers/helpers';

function PoliciesPage(props) {
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
      <Header />
      <PoliciesText />
    </main>
  );
}

export default PoliciesPage;
