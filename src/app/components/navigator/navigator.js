import { useEffect, useState } from 'react'

function Navigator(props) {
    const [moveNavigator, setMoveNavigator] = useState(false);
    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const navigatorDiv = document.getElementById('navigator');
        const navigatorDivPosition = navigatorDiv ? navigatorDiv.getBoundingClientRect() : null;
    
        console.log('introDivPosition', scrollTop, navigatorDivPosition.top)
        if (navigatorDivPosition && scrollTop >= navigatorDivPosition.top) {
          setMoveNavigator(true);
        } else {
          setMoveNavigator(false);
        }
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  
    return (
      <div className={`navigator ${moveNavigator ? 'moveNavigator' : ''}`} id="navigator">
        <div className="navigator__circle"></div>
      </div>
    );
  }
  
  export default Navigator;
  