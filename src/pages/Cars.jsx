import React from 'react';
import CarsList from './Cars/CarsList';
import { Link } from 'react-router-dom';

const Cars = () => {
  return (
    <div>
      <h1>Cars Page</h1>
      <p>Here you can find information about cars.</p>      
      <Link to="/create-car" className='btn'><a>New Car</a></Link>
      <CarsList />
    </div>
  );
};

export default Cars;