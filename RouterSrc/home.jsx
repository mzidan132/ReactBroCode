// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of the application.</p>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile/johndoe">Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
