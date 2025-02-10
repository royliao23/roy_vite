import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the JWT token
    navigate('/login'); // Redirect to the login page
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/sales" style={styles.link}>Sales</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  },
  button: {
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default Navbar;