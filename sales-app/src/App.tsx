import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Sales App</h1>
      <nav>
        <Link to="/sales">View Sales</Link>
      </nav>
    </div>
  );
};

export default App;