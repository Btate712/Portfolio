import React, { useState } from 'react';
import '../styles/Card.css';


const Card = props => {
  const [ hasFocus, setHasFocus ] = useState(false);

  return(
    <div 
      className="Card"
      onMouseEnter={ () => setHasFocus(true) }
      onMouseLeave={ () => setHasFocus(false) }
    >
      <p className={ hasFocus ? "focus" : "unfocus" }>{props.word}</p>
    </div>
  )
}

export default Card;