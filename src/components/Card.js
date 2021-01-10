import React, { useState } from 'react';
import '../styles/Card.css';


const Card = props => {
  const [ hasFocus, setHasFocus ] = useState(false);

  return(
    <a href={ props.location }>
      <div 
        className="Card"
        onMouseEnter={ () => setHasFocus(true) }
        onMouseLeave={ () => setHasFocus(false) }
      >
        <p className={ hasFocus ? "focus" : "unfocus" }>
          { hasFocus ? props.description : props.word }
        </p>
      </div>
    </a>
  )
}

export default Card;