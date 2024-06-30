// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>Welcome to the About Page</h1>
      <p>This is the addiditional page of the application.</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile/johndoe">Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default About;
