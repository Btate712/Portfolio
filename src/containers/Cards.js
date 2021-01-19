import React, { useState } from 'react';
import Card from '../components/Card';
import '../styles/Cards.css';
import portfolio from '../data/portfolio.js'

const Cards = ({ isMobile }) => {
  const [mobileFocus, setMobileFocus] = useState(null);

  const handleMobileClick = cardId => {
    mobileFocus === cardId ? setMobileFocus(null) : setMobileFocus(cardId);
  }

  const mapProjects = () => {
    return portfolio.map((project, index) => {
      return(
        <Card
          id={ index }
          word={ project.title }
          description={ project.description }
          codeLocation={ project.codeLocation }
          location={ project.location }
          isMobile={ isMobile }
          focus={ mobileFocus === index }
          handleMobileClick={ handleMobileClick }
          videoLocation={ project.videoLocation }
        />
      );
    });
  }

  return (
    <div className="CardsWrapper">
      <div className='Cards'>
        { mapProjects() }
      </div>
    </div>
  )
}

export default Cards;