import React from 'react';
import CarsList from './Cars/CarsList';

const Cars = () => {
  return (
    <div>
      <h1>Cars Page</h1>
      <p>Here you can find information about cars.</p>      
      <CarsList />
    </div>
  );
};

export default Cars;