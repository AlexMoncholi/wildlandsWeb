import { useLanguageContext } from '@/app/context/languageContext';
import Flags from "../flags/flags";

function Header() {
  const { language } = useLanguageContext();

  return (
    <div className='presentation' id='header'>
        <div className='presentation__designer'>
          <span><img src={'/gears.png'} alt=''/></span>
          <p>Alejandro Moncholí</p>
        </div>
        <div className='logo_amed' >
          <img src={'/logo_amed.png'} alt="A mi estantería Digital" />
        </div>
        <img src={`/logo_${language}.png`} className={'logo'} alt="Historias de las tierras salvajes" />
        <div className='logo_store' >
          <img src={`/prox_google_${language}.png`} alt="A mi estantería Digital" />
        </div>
        <div className='gameInfo'>
          <img className='gameInfo__players' src={'/game_number_players.png'} alt="1 player" />
          <img className='gameInfo__time' src={'/game_time.png'} alt="30 minutes" />
          <img className='gameInfo__age' src={'/game_age.png'} alt="+16" />
          <img className='gameInfo__pegi' src={'/pegi16.png'} alt="PEGI +16" />
        </div>
        <div className='scroll'>
          <img className='scroll__icon' src={'/scroll_icon.png'} alt="Scroll down" />
        </div>
        <Flags />
    </div>
  );
}

export default Header;
