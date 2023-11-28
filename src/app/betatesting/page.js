"use client"
import GenericHeader from '../components/header/genericHeader';
import Footer from '../components/footer/footer';
import BetaTestingContent from './betaTesting';

function BetaTesting(props) {
  
  return (
    <main>
      <GenericHeader />
      <BetaTestingContent />
      <Footer />
    </main>
  );
}

export default BetaTesting;
