import enemiesList from "./enemiesListData";

function Enemies(props) {
    return (
        <div className='enemies' id='enemies'>
            <h1>+70 CARTAS DE ENEMIGOS<br />
                17 CARTAS ENEMIGO UNICO
            </h1>
            <p>Durante tus viajes, encontrarás diferentes enemigos dependiendo de la localización
                en la que te encuentres. Además, hay enemigos contra los que sólo podrás combatir
                durante el transcurso de los capítulos, o durante las misiones secundarias.</p>
            <div className={`enemies__map ${props.displayFlyingCards ? 'animate' : ''}`}>
                <img src={'/enemies/enemies_sauverge.png'} alt="" />
                { enemiesList.map((enemy, index) => (
                    <div className={`enemies__map--card ${enemy.class}`} key={`enemies-${index}`}>
                        <img src={enemy.image} alt={enemy.name} />
                        <img src={'/enemies/card_shadow.png'} className={`enemies__map--cardShadow ${enemy.name}`} alt='' />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Enemies;
