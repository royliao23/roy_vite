import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const [login, setLogin] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div>
      <Navbar />
      <h1>About</h1>
        <p>Welcome to the Sales App! This is a simple app to manage sales records.</p>
    </div>
  );
};

export default About;