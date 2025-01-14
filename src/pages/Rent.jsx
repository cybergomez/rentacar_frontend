import React from 'react';
import { Link } from 'react-router-dom';
import RentList from './Rent/RentList'

const Rent = () => {
  return (
    <div className='p-5 w-full'>
      <div className="grid grid-cols-[auto_max-content] [grid-template-areas:_'title_add'_'small_add']">
        <h1 className='[grid-area:_title]'>Reporte de Rentas</h1>
        <small className='[grid-area:_small]'>Encuentra aquí información sobre rentas realizadas</small>
        <Link to="/create-rent" className="[grid-area:_add]" >
          <button className='btn-success h-full'>Registrar Renta</button>
        </Link>
      </div>
      <RentList />
    </div>
  );
};

export default Rent;