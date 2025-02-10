import React from 'react';
import Navbar from '../components/Navbar';
const About: React.FC = () => {
  
  return (
    <div>
      <Navbar />
      <h1>About</h1>
        <p>Welcome to the Sales App! This is a simple app to manage sales records.</p>
    </div>
  );
};

export default About;