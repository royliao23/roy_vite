import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
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
      <h1>Home</h1>
      
    </div>
  );
};

export default Home;