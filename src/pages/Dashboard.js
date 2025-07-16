import React from 'react';
import DetailsTable from '../Components/DetailsTable';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <>
      <div className='container mt-3'>
        <div className='d-flex justify-content-between align-items-center'>
          <h3>Dashboard</h3>
          <button onClick={handleLogout} className='btn btn-danger'>
            Logout
          </button>
        </div>
        <hr />
        <DetailsTable />
      </div>
    </>
  );
};

export default Dashboard;
