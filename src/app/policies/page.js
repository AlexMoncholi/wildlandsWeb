"use client"
import { useEffect, useState } from 'react';
import GenericHeader from '../components/header/genericHeader';
import Footer from '../components/footer/footer';
import PoliciesText from './policiesText';

import { handleScroll } from '../components/helpers/helpers';

function PoliciesPage(props) {
  
  return (
    <main>
      <GenericHeader />
      <PoliciesText />
      <Footer />
    </main>
  );
}

export default PoliciesPage;
