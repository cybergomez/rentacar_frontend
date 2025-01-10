import React from 'react';
import CarsList from './Cars/CarsList';
import { Link } from 'react-router-dom';

const Cars = () => {
  return (
    <div className='p-5 w-full flex flex-col items-center gap-[20px] justify-start'>
      <h1>Our Cars</h1>
      <p>Here you can find information about cars.</p>
      <Link to="/create-car" className='btn'><a className="bg-slate-800 darK:bg-slate-200 text-slate-200 darK:text-slate-900 rounded-xl px-5 py-3">New Car</a></Link>
      <CarsList />
    </div>
  );
};

export default Cars;