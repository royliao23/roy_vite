import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
interface Sale {
  property_address: string;
  sales_employee_name: string;
  user_email: string;
}

const Sales: React.FC = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [login, setLogin] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLogin(true);
      navigate('/sales');
    } else {
      setLogin(false);
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the JWT token from local storage
        const response = await axios.get('http://localhost:3000/sales', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSales(response.data.sales);
      } catch (err) {
        setError('Failed to fetch sales data.');
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>Sales Records</h1>
      <table>
        <thead>
          <tr>
            <th>Property Address</th>
            <th>Sales Employee Name</th>
            <th>User Email</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.property_address}</td>
              <td>{sale.sales_employee_name}</td>
              <td>{sale.user_email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sales;