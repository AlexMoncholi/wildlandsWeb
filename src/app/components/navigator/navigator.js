import { useLayoutEffect, useState, useRef } from 'react';
import { handleNavigatorScroll } from '../helpers/helpers';
import { useLanguage } from '@/app/utils/languageUtils';

function Navigator(props) {
  const [moveNavigator, setMoveNavigator] = useState(false);
  const initialPosition = useRef(0);
  const [currentNavigationSection, setCurrentNavigationSection] = useState('');
  let sections = ['intro', 'cards', 'characters', 'maps', 'enemies', 'ad'];
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const headerElement = document.getElementById('header');

    if (headerElement) {
      const topHeader = headerElement.getBoundingClientRect().top;
      const scrollHandler = handleNavigatorScroll(initialPosition, setMoveNavigator, sections, setCurrentNavigationSection);
      window.addEventListener('scroll', scrollHandler);

      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, []);

  return (
    <div className={`navigator ${moveNavigator ? 'moveNavigator' : ''} ${currentNavigationSection === 'characters' ? 'slideRight' : ''}`} id="navigator">
      { sections.map((section, index) => (
        <div id={`bubble-${section}`}
          data-label={t(`menu.${[section]}`)}
          className={`navigator__circle ${(currentNavigationSection === '' && index === 0) || section === currentNavigationSection ? 'selected' : ''}`}
          key={`bubble-${index}`}
          onClick={() => { document.getElementById(section).scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }); }}>
            <img src={`/menu/${section}.png`} alt={section} />
        </div>
      ))}
    </div>
  );
}

export default Navigator;
