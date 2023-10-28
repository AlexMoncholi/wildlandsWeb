function CharactersDetail (props) {
    return (
        <div className={`${props.character.class} ${props.selectedCharacter ? 'selected': ''}`}>
            <img src={props.character.image} alt={props.character.name} />
            <img src={props.character.shadow} alt={props.character.name} className="shadow" />
            <div className={`characters__altDescription`}>
                <p className={`characters__altDescription--name`}>{props.character.name}</p>
                <p className={`characters__altDescription--text`}>{props.character.description.es}</p>
            </div>
        </div>
    );
  }
  
  export default CharactersDetail ;
  