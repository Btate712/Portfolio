import React from 'react';
import Card from '../components/Card';
import '../styles/Cards.css';

const Cards = props => {
  return (
    <div className='Cards'>
      <Card 
        word="2048 Clone" 
        description="A clone of the game 2048 written in vanilla JS" 
        location="http://www.thetater.net/game2448.html"
      />
      <Card 
        word="Bubble Sort Visualizer" 
        description="A vanilla JS app written to visualize how a bubble sort works" 
        location="http://www.thetater.net/bubblesort/bubblesort.html"
      />
    </div>
  )
}

export default Cards;