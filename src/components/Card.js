import React from 'react';
import '../styles/Card.css';

const Card = props => {
  return(
    <h1 className="Card" >{props.word}</h1>
  )
}

export default Card;