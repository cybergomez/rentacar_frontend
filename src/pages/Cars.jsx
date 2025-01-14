import React from 'react';
import CarsList from './Cars/CarsList';
import { Link } from 'react-router-dom';

const Cars = () => {
  return (
    <div className='p-5 w-full'>
      <div className="grid grid-cols-[auto_max-content] [grid-template-areas:_'title_add'_'small_add']">
        <h1 className='[grid-area:_title]'>Nuestros Vehículos</h1>
        <small className='[grid-area:_small]'>Encuentra aquí información sobre nuestros vehículos</small>
        <Link to="/create-car" className='[grid-area:_add]'><button className='btn-success h-full'>Registar auto</button></Link>
      </div>
      <CarsList />
    </div>
  );
};

export default Cars;