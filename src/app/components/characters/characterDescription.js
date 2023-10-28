function Description (props) {
    return (
        <div className={`characters__description`}>
            <p className={`characters__description--name`}>{props.character.name}</p>
            <p className={`characters__description--text`}>{props.character.description.es}</p>
        </div>
    );
  }
  
  export default Description ;
  