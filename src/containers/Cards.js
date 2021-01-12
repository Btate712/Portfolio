import React from 'react';
import Card from '../components/Card';
import '../styles/Cards.css';
import portfolio from '../data/portfolio.js'

const Cards = ({ isMobile }) => {
  const mapProjects = () => {
    return portfolio.map(project => {
      return(
        <Card
          word={ project.title }
          description={ project.description }
          location={ project.location }
          isMobile={ isMobile }
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