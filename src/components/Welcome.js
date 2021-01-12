import React from 'react';
import "../styles/Welcome.css";

const Welcome = ({ isMobile }) => {
  return( 
    <div className="Welcome" >
      <h1>Welcome to Bob Tate's Portfolio Site!</h1>
      <p>Please { isMobile ? "click on" : "hover over" } a project for more info and click { isMobile ? "the launch button" : ""} to launch the project in a new tab.</p>
    </div>
  )
}

export default Welcome;