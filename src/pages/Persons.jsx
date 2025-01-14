import React from 'react';
import PersonsList from './Persons/PersonsList';
import { Link } from 'react-router-dom';

const Persons = () => {
  return (
    <div className='p-5 w-full'>
      <div className="grid grid-cols-[auto_max-content] [grid-template-areas:_'title_add'_'small_add']">
        <h1 className='[grid-area:_title]'>Personas</h1>
        <small className='[grid-area:_small]'>Encuentra aquí información sobre personas / usarios</small>
        <Link to="/create-person" className='[grid-area:_add]'><button className='btn-success h-full'>Nueva persona</button></Link>
      </div>
      <PersonsList />
    </div>
  );
};

export default Persons;