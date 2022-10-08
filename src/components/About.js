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
      and I'm excited to be building a career in software development.
    </p>
    <p>
      I'm in my second year of working professionally as a Software Engineer. I've 
      been at my current job working for a fantastic company called Relativity since
      January of 2022. In my current role, I maintain and build on a code base that
      uses C# on the back end and AngularJS on the front end. In my previous job, I 
      worked with C# on the back end and Blazor on the front end.
    </p>
    <p>
      I'm a graduate of the Flatiron School Full Stack Software Engineering program
      and I'm currently finishing my Computer Science Bachelor's degree at 
      National Louis University. I'm also a certified AWS developer.
    </p>
    <p>
      While enrolled with Flatiron school, I built apps using vanilla Javascript and 
      the React framework on the frontend and Ruby on Rails on the backend. I'm currently 
      learning how to use NodeJS in my spare time.
    </p>
    <p>
      I'm currently very happy in my role as a Software Engineer at Relativity, but I'm
      always looking for opportunities to learn more and to work with different technologies. 
      I'm open to opportunities to contribute to open source codebases in my spare time.
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
