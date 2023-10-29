import React from "react";

const translationsEs = {
    home: {
        welcome: [<React.Fragment key={'welcomeText'}>INCLUSO EN UN APOCALIPSIS, <br />UN LOBO SEGUIRÁ SIENDO UN LOBO...</React.Fragment>],
        intro: [<React.Fragment key={'introText'}>
            <p>
                El mundo se ha ido al carajo... Otra vez. Esta vez no han sido los zombies,
                si no la guerra nuclear la que ha acabado con la mayor parte de la población,
                y dejado ciudades y zonas enteras inhabitables.
            </p>
            <p>
                Ponte en la piel de uno de los supervivientes, con su triste historia,
                y viaja a través del desierto, la playa, la montaña y la ciudad tóxica como tu ex,
                para descubrir el nuevo estilo de vida mientras luchas por ver un nuevo día.
            </p>
            <p>
                Historias de las Tierras Salvajes es un <b>juego de mesa digital en solitario</b>, que mezcla una
                mecánica <b>deckbuilding con</b> la <b>narrativa</b> a base de mover tu ficha por
                los diferentes tableros, combatiendo contra los enemigos y superando las
                misiones y combates <b>a lo largo de cuatro episodios, o</b> intenta sobrevivir cuanto puedas
                con el modo <b>Supervivencia</b>.
            </p>
        </React.Fragment>]
    },
    cards: {
        title: '¡Construye tu mazo!',
        text: 'Consigue chapas en tus viajes, para poder mejorar tu mazo de habilidades, y patear los culos de los supervivientes que quieran quitarte tus preciadas y escasas posesiones.'
    },
    characters: {
        title: 'CONOCE A LOS SUPERVIVIENTES'
    },
    maps: {
        title: 'Exóticas localizaciones',
        text: 'Explora los cuatro tableros para descubrir desde misiones secundarias a eventos y peleas.'
    },
    enemies: {
        title:[<React.Fragment key={'enemiesTitle'}>
            <h1>+70 CARTAS DE ENEMIGOS<br />
                17 CARTAS ENEMIGO UNICO
            </h1>
        </React.Fragment>],
        text: 'Durante tus viajes, encontrarás diferentes enemigos dependiendo de la localización en la que te encuentres. Además, hay enemigos contra los que sólo podrás combatir durante el transcurso de los capítulos, o durante las misiones secundarias.'
    },
    ad: {
        title: '¿Te animas a vivir el apocalipsis?',
        ok: '¡Vamos allá!',
        scan: 'O escanéame para ir a la store.',
    }
};

export default translationsEs;