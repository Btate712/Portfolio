import React from 'react';

const HeaderChoice = ({location, word}) => {
  return( 
    <a href={ location }>
      <div>{ word }</div>
    </a>
  );
} 

export default HeaderChoice;