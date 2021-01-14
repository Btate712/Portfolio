import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/Contact.css";

const Contact = props => {
  return (
    <div className="Contact">
      <h1>Contact Information</h1>
      <p>
        Please enter your message into the fields below.
      </p>
      <label htmlFor="subject">
        Subject: <input type="text" name="subject"></input>
      </label>
      <br />
      <label htmlFor="message">
        Message: <br />
        <textarea name="message" cols="80" rows="20"/>
      </label>
      <br />
      <Link className="link" id="send">Send</Link>
      <Link className="link" id="home" to="/">Home</Link>
    </div>
  );
}

export default Contact;