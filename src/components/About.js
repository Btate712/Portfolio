import React from 'react';
import face from "../images/face-photo.jpg";
import { Link } from 'react-router-dom';

import "../styles/About.css";

const About = ({ isMobile }) => {
  return (
  <div className="About">
    <img src={ face } width="300px" alt="headshot"/>
    <h1>About Me</h1>
    <p>
      I'm a US Navy veteran with a background in nuclear operations and training
      and I'm excited about starting a new career in software development.
    </p>
    <p>
      I'm a graduate of the Flatiron School Full Stack Software Engineering program
      and I'm currently enrolled in the Computer Science Bachelor's program at 
      National Louis University. I'm also a certified AWS developer.
    </p>
    <p>
      I've built apps using vanilla Javascript and the React framework on the 
      frontend and Ruby on Rails on the backend. I'm currently learning how
      to use NodeJS in my spare time.
    </p>
    <p>
      I'm looking for an entry level software developer role in the Chicago area
      or remote. I'd love to know any information you can share with me about how
      I can find such an opportunity or what I can do to make myself the best 
      possible candidate for that role when I find it.
    </p>
    <p>
      Please feel free to contact me at <a href = "mailto: btate712@gamil.com">
        btate712@gmail.com</a> or using the social media links below
        with any questions you may have!
    </p>
    <p>
      Bob Tate
    </p>
    <Link className="link" to="/">Home</Link>
  </div>
  );
}

export default About;
