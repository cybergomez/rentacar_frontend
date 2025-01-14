import React, { useState } from 'react'
import SearchPerson from './SearchPerson.jsx';
import TablePersons from './TablePersons.jsx';

const PersonsList = () => {

  const [person, setPerson] = useState([]);

  const handleDelete = (personId) => {
    const updatedPersons = person.filter((c) => c.id !== personId);
    setPerson(updatedPersons);
  };

  if (person.length < 0) {
    return <h2>No existen personas !!!</h2>
  } else {
    return (
      <div className='mt-[20px] grid gap-[20px] auto-rows-min text-center'>
        <SearchPerson onSearch={setPerson} />
        <TablePersons persons={person} onDelete={handleDelete} />
      </div>
    );
  }
};

export default PersonsList;