import React from 'react';
import HeaderChoice from '../components/HeaderChoice';

import "../styles/MyHeader.css";

const MyHeader = props => {
  return (
    <nav className="MyHeader">
      <HeaderChoice
        location="./about"
        word="About"
      />
      <HeaderChoice
        location="#"
        word="Contact"
      />
    </nav>
  );
}

export default MyHeader;