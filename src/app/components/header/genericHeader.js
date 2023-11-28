import { useLanguageContext } from '@/app/context/languageContext';
import Flags from "../flags/flags";
import Fog from './fog';
import Link from 'next/link';

function GenericHeader() {
  const { language } = useLanguageContext();

  return (
    <div className='genericHeader' id='header'>
      <Fog />
      <div className='logo_amed' >
        <Link href="/">
          <img src={'/logo_amed.png'} alt="A mi estantería Digital" />
        </Link>
      </div>
      <Flags />
    </div>
  );
}

export default GenericHeader;
