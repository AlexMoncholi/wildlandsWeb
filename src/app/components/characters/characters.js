import { useState } from "react";
import characterList from "./characterListData";
import CharactersDetail from "./characterDetail";
import Arrow from "./arrow";
import Description from "./characterDescription";
import { useLanguage } from '@/app/utils/languageUtils';

function Characters() {
    const [selectedCharacter, setSelectedCharacter] = useState(2);
    const { t } = useLanguage();

    const selectNextCharacter = () => {
        if (selectedCharacter + 1 < characterList.length) {
            setSelectedCharacter(selectedCharacter + 1);
        }
    };

    const selectPreviousCharacter = () => {
        if (selectedCharacter > 0) {
            setSelectedCharacter(selectedCharacter - 1);
        }
    };

    return (
        <div className='characters' id='characters'>
            <h1>{t('characters.title')}</h1>
            {characterList.map((character, index) => (
                <CharactersDetail character={character} selectedCharacter={index === selectedCharacter} key={index} />
            ))}
            <Arrow direction={'left'} onClick={selectPreviousCharacter} optionActive={selectedCharacter > 0} />
            <Arrow direction={'right'} onClick={selectNextCharacter} optionActive={selectedCharacter + 1 < characterList.length} />
            <Description character={characterList[selectedCharacter]} />
        </div>
    );
}

export default Characters;
