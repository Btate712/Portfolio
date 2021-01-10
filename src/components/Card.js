import React from 'react';
import '../styles/Card.css';

const Card = props => {
  return(
    <div className="Card">
      <p>{props.word}</p>
    </div>
  )
}

export default Card;