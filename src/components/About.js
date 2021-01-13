import React from 'react';
import face from "../images/face-photo.jpg";

import "../styles/About.css";

const About = ({ isMobile }) => {
  return (
  <div className="About">
    <h1>About Me</h1>
    <img src={ face } width="200px" />
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
      possible candidate for the role when I find it.
    </p>
    <p>
      Bob Tate
    </p>
  </div>
  );
}

export default About;
