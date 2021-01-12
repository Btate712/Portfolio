import React from 'react';
import Card from '../components/Card';
import '../styles/Cards.css';
import portfolio from '../data/portfolio.js'

const Cards = props => {
  const mapProjects = () => {
    return portfolio.map(project => {
      return(
        <Card
          word={ project.title }
          description={ project.description }
          location={ project.location }
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