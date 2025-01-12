import React from 'react';
import PersonsList from './Persons/PersonsList';
import { Link } from 'react-router-dom';

const Persons = () => {
  return (
 /*   <div>
      <h1>Persons Page</h1>
      <p>Here you can find information about persons.</p>
    </div>
*/
    <div className='p-5 w-full flex flex-col items-center gap-[20px] justify-start'>
    <h1>Persons</h1>
    <p>Here you can find information about persons.</p>
    <Link to="/create-person" className='btn'><a className="bg-slate-800 darK:bg-slate-200 text-slate-200 darK:text-slate-900 rounded-xl px-5 py-3">New Person</a></Link>
    <PersonsList />
    </div>
  );
};

export default Persons;