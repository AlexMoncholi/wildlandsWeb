export function handleScroll(setDisplayCards, setDisplayFlyingCards, isInSection) {
    return () => {
        if (isInSection) {
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
        }
    };
}

export function handleNavigatorScroll(initialPosition, setMoveNavigator, sections, setCurrentNavigationSection) {
    return () => {
        const navigatorDiv = document.getElementById('navigator');
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (navigatorDiv) {
            const { top } = navigatorDiv.getBoundingClientRect();

            if (initialPosition.current === 0) {
                initialPosition.current = top + scrollTop;
            }

            setMoveNavigator(scrollTop + window.innerHeight / 4 > initialPosition.current);
        }

        let currentSection = '';
        for (let i = 0; i < sections.length; i++) {
            let sectionLayer = document.getElementById(sections[i]).getBoundingClientRect().top;
            if (window.innerHeight / 2 > sectionLayer) {
                currentSection = sections[i]
            }
        }
        setCurrentNavigationSection(currentSection);
    };
}

export function setInitialSectionsPos(sections) {
    return () => {
        sections.map((element) => {
            const navigatorDiv = document.getElementById('navigator');
            if (navigatorDiv) {
                const { top } = navigatorDiv.getBoundingClientRect();
                element.pos = top;
            }
        });
    }
}
