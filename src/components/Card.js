import React, { useState } from 'react';
import '../styles/Card.css';


const Card = ({ isMobile, description, word, location }) => {
  const [ hasFocus, setHasFocus ] = useState(false);
  
  const mobileLink = () => {
    return (
      <>
        <br />
        <br />
        <a href={ location } target="_blank">Launch</a>
      </>
    )
  }

  const mobileVersion = () => {
    return (
      <div 
        className="Card"
        onClick={ () => hasFocus ? setHasFocus(false) : setHasFocus(true) }
      >
        <p className={ hasFocus ? "focus" : "unfocus" }>
          { hasFocus ? description : word }
          { hasFocus ? mobileLink() : "" }
        </p>
      </div>
    );
  }

  const nonMobileVersion = () => {
    return(
      <a href={ location } target="_blank">
        <div 
          className="Card"
          onMouseEnter={ () => setHasFocus(true) }
          onMouseLeave={ () => setHasFocus(false) }
        >
          <p className={ hasFocus ? "focus" : "unfocus" }>
            { hasFocus ? description : word }
          </p>
        </div>
      </a>
    )
  }

  return isMobile ? mobileVersion() : nonMobileVersion();
}

export default Card;