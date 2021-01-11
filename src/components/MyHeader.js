import React from 'react';
import HeaderChoice from '../components/HeaderChoice';

import "../styles/MyHeader.css";

const MyHeader = props => {
  return (
    <div className="MyHeader">
      <HeaderChoice
        location="#"
        word="About"
      />
      <HeaderChoice
        location="#"
        word="Contact"
      />
    </div>
  );
}

export default MyHeader;