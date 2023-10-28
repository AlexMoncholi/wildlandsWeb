import { useLanguage } from '@/app/utils/languageUtils';
import enemiesList from "./enemiesListData";

function Enemies(props) {
    const { t } = useLanguage();

    return (
        <div className='enemies' id='enemies'>
            {t('enemies.title')}
            <p>{t('enemies.text')}</p>
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
