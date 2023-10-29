import React from "react";

const translationsEn = {
    home: {
        welcome: [<React.Fragment key={'welcomeText'}>EVEN IN THE APOCALYPSE, <br />A WOLF REMAINS A WOLF...</React.Fragment>],
        intro: [<React.Fragment key={'introText'}>
        <p>
            The world has gone to hell... Again. This time, it wasn't the zombies, but nuclear war
            that has decimated most of the population, leaving entire cities and areas uninhabitable.
        </p>
        <p>
            Put yourself in the shoes of one of the survivors, with their tragic story, and journey through
            the desert, the beach, the mountains and the city, toxic like your ex, to discover a
            new way of life while fighting to see a new day.
        </p>
        <p>
            Tales from the Wildlands is a <b>solo digital board game</b>, that blends <b>deckbuilding
            mechanics</b> with <b>narrative</b> by moving your
            piece across different boards, battling enemies, and overcoming missions
            and combats <b>throughout four episodes, or</b> try to survive as much as you can in
            the <b>Survivor mode</b>.
        </p>
        </React.Fragment>]
    },
    cards: {
        title: 'Build your deck!',
        text: 'Collect caps on your travels to upgrade your skill deck and kick the butts of survivors who want to take away your precious and scarce possessions.'
    },
    characters: {
        title: 'MEET THE SURVIVORS'
    },
    maps: {
        title: 'Exotic locations',
        text: 'Explore the four boards to discover everything from side quests to events and battles.'
    },
    enemies: {
        title:[<React.Fragment key={'enemiesTitle'}>
            <h1>+70 ENEMY CARDS<br />
                17 UNIQUE ENEMY CARDS
            </h1>
        </React.Fragment>],
        text: 'During your travels, you\'ll encounter various enemies depending on the location you find yourself in. Additionally, there are enemies that you can only combat during the course of the chapters or within the side missions.'
    },
    ad: {
        title: 'Are you ready to experience the apocalypse?',
        ok: 'Let\'s go!',
        scan: 'Or scan me to go to the store.',
    }
  };
  
  export default translationsEn;