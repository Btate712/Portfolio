import React, { useState, useEffect } from 'react';
import '../styles/Card.css';


const Card = ({ isMobile, description, word, codeLocation, location, handleMobileClick, focus, id, videoLocation }) => {
  const [ hasFocus, setHasFocus ] = useState(false);
  
  const links = () => {
    return (
      <div className="links">
        <br />
        <br />
        { location &&
          <a href={ location } target="_blank">Launch</a>
        }
        { videoLocation && 
          <a href={ videoLocation } target="_blank">Video</a>
        }
        <a href={ codeLocation } target="_blank">Code</a>
      </div>
    )
  }

  const mobileClick = () => {
    handleMobileClick(id);
  }

  const mobileVersion = () => {
    return (
      <div 
        className="Card"
        onClick={ mobileClick }
      >
        <p className={ hasFocus ? "focus" : "unfocus" }>
          { hasFocus ? description : word }
          { hasFocus ? links() : "" }
        </p>
      </div>
    );
  }
  
  const nonMobileVersion = () => {
    return(
      <div 
        className="Card"
        onMouseEnter={ () => setHasFocus(true) }
        onMouseLeave={ () => setHasFocus(false) }
        >
        <p className={ hasFocus ? "focus" : "unfocus" }>
          { hasFocus ? description : word }
          { hasFocus ? links() : "" }
        </p>
      </div>
    );
  }

  useEffect(() => {
    setHasFocus(focus);
  }, [focus]);

  return isMobile ? mobileVersion() : nonMobileVersion();
}

export default Card;