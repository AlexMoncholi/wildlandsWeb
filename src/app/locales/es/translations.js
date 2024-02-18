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
                31 CARTAS ENEMIGO UNICO
            </h1>
        </React.Fragment>],
        text: 'Durante tus viajes, encontrarás diferentes enemigos dependiendo de la localización en la que te encuentres. Además, hay enemigos contra los que sólo podrás combatir durante el transcurso de los capítulos, o durante las misiones secundarias.'
    },
    ad: {
        title: '¿Te animas a vivir el apocalipsis?',
        ok: '¡Vamos allá!',
        scan: 'Escanéame para ir al juego.',
    },
    menu: {
        intro: 'Intro',
        cards: 'Cartas',
        characters: 'Personajes',
        maps: 'Mapas',
        enemies: 'Enemigos',
        ad: 'Anuncio'
    },
    policies: {
        title: [<React.Fragment key={'welcomeText'}>POLÍTICA DE PRIVACIDAD</React.Fragment>],
        intro: [<React.Fragment key={'introText'}>
        <p>
            Bienvenido/a a "Historias de las Tierras Salvajes". Esta aplicación es proporcionada por A mi estantería - Digital. Tu privacidad es
            importante para nosotros, y nos comprometemos a protegerla. Esta política de privacidad describe cómo recopilamos, utilizamos y
            compartimos tu información cuando utilizas nuestra aplicación.
        </p>
        <h2>1. Información que recopilamos</h2>
        <p>
            <b>No recopilamos información personal identificable ni datos sensibles</b> a través de la aplicación "Historias de las Tierras
            Salvajes". No solicitamos ni almacenamos nombres, direcciones de correo electrónico, números de teléfono u otra información
            personal.
        </p>
        <h2>2. Uso de la información</h2>
        <p>
            Al no recopilar ninguna información <b>no se utiliza con fines de identificación personal ni con ningún otro propósito</b>. La
            aplicación está diseñada para funcionar sin recopilar datos del usuario.
        </p>
        <h2>3. Compartir Información con Terceros:</h2>
        <p>
            <b>No compartimos información con terceros</b>. La información generada o ingresada por el usuario se mantiene de manera privada
            y no se comparte con ninguna entidad externa.
        </p>
        <h2>4. Seguridad:</h2>
        <p>
            Tomamos medidas razonables para proteger la información que no recopilamos. Sin embargo, ten en cuenta que ninguna medida
            de seguridad en línea es completamente segura, y no podemos garantizar la seguridad absoluta de la información.
        </p>
        <h2>5. Cambios en la Política de Privacidad:</h2>
        <p>
            Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cualquier cambio significativo en la forma en
            que tratamos la información mediante una notificación dentro de la aplicación.
        </p>
        <h2>6. Contacto:</h2>
        <p>
            Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en monchoylasflores@gmail.com.
        </p>
        </React.Fragment>]
    },
    betatesting: {
        text: [<React.Fragment key={'introText'}>
        <h2>SE BUSCAN BETA TESTERS</h2>
        <p>
            Si tienes un <b>Móvil Android</b> con la versión 9 o superior (Actualizado después de Julio de 2018), <b>necesito tu ayuda</b>.
            Google ha cambiado sus políticas para los desarrolladores indie. Ahora <b>se necesitan un mínimo de 20 testers voluntarios</b> para
            certificar el buen funcionamiento y que su tienda no se llene de aplicaciones basurilla.
        </p>
        <p>
            El juego va a ser gratuito para la comunidad (Sin micropagos ni mierdas de esas), así que si me ayudas, ayudarás
            a un pequeño desarrollador a cumplir su sueño de publicar su primer juego solo para dejar su huella en el mundo.
        </p>
        <h2>SI AYUDAS A TESTEAR</h2>
        <p>
            Las pruebas tendrán lugar <b>durante dos semanas</b>, en las que <b>tendrás que ir jugando y comunicando fallos</b> que encuentres.
            El juego ya ha sido testeado a lo largo de su año de desarrollo, por lo que no deberías encontrar grandes fallos.
        </p>
        <p>
            Una vez terminado el proceso, <b>todos los que hayáis ayudado tendréis el crédito en</b> los agradecimientos del <b>libro de arte</b> del
            juego (Que también será gratis), en la <b>sección agradecimientos</b> del juego <b>y en lo más profundo de mi friki corazón</b>.
        </p>
        <h2>PERO, ¿CÓMO AYUDAR EN ESTA NOBLE TAREA?</h2>
        <p>
            Escríbeme un mensaje privado a mi cuenta de Instagram (<a href="https://www.instagram.com/a_mi_estanteria/">@a_mi_estanteria</a>) diciendo que te gustaría participar en la beta para tenerte en cuenta
            y, <b>cuando la lista de testers esté completa</b>, comenzará el proceso: Tu cuenta de correo de gmail se incluirá en la lista de
            testers del juego en la Google Play Store para que puedas descargarte el juego de forma legal (Que no se mostrará al resto
            del público hasta pasado vuestro testeo). Lo demás... ¡Será una aventura para todos!
        </p>
        <p>
            Como soy un paranoico de la seguridad, no os preocupéis, sólo pediré la cuenta de email cuando tenga la lista de testers completa.
        </p>
        <p>
            Si has llegado hasta aquí, participes o no, ¡Muchísimas gracias por dedicarme un ratito de tu tiempo!. ¡Nos vemos en las Tierras Salvajes!
        </p>
        </React.Fragment>]
    },
    footer: {
        privacy: 'Privacidad'
    }
};

export default translationsEs;