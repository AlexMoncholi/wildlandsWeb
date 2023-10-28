function Arrow (props) {
    return (
        <div className={`character__arrow ${props.direction} ${!props.optionActive ? 'disabled' : ''}`} onClick={() => { props.onClick() }}>
            <img src={`characters/arrow_${props.direction}.png`} alt={''} />
        </div>
    );
  }
  
  export default Arrow ;
  