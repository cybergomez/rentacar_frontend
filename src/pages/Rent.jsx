import React from 'react';
import { Link } from 'react-router-dom';
import RentList from './Rent/RentList'

const Rent = () => {
  return (
    <div className='p-5 w-full flex flex-col items-center gap-[20px] justify-start'>
      <h1>RentaCars Page</h1>
      <p>Here you can find information about Rentacars.</p>
        <Link to="/create-rent" className="bg-slate-800 darK:bg-slate-200 text-slate-200 darK:text-slate-900 rounded-xl px-5 py-3" >          
          New Rent
        </Link>
      <RentList />
    </div>
  );
};

export default Rent;