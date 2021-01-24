import React from 'react';
import "../styles/Welcome.css";

const Welcome = ({ isMobile }) => {
  return( 
    <div className="Welcome" >
      <h1>Welcome to Bob Tate's Portfolio!</h1>
      <p>{ isMobile ? "Click on" : "Hover over" } a project for more info and click { isMobile ? "the launch button" : ""} to launch the project in a new tab.</p>
    </div>
  )
}

export default Welcome;