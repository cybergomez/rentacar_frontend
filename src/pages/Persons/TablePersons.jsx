import React from "react";
import { Link } from "react-router-dom";
import DeletePerson from "./DeletePerson.jsx";

const TablePersons = ({ persons, onDelete }) => {

  const handleDelete = (personId) => {
    onDelete(personId);
  };

  if (persons.length < 0) {
    return <h2>No existen personas !!!</h2>
  } else {
    return (
      <div className='grid auto-rows-min gap-2 text-center'>
        <table className='border-collapse border border-slate-400'>
          <thead>
            <tr>
              <th className='px-4 py-3'>ID</th>
              <th className='px-4 py-3'>name</th>
              <th className='px-4 py-3'>address</th>
              <th className='px-4 py-3'>phone</th>
              <th className='px-4 py-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((item, i) => {
              return (

                <tr>
                  <td className='px-4 py-3'>{item.id}</td>
                  <td className='px-4 py-3'>{item.name}</td>
                  <td className='px-4 py-3'>{item.address}</td>
                  <td className='px-4 py-3'>{item.phone}</td>
                  <td className='inline-flex gap-2'>
                    <Link to={`/edit-person/${item.id}`}>
                      <button className="btn-info">Editar</button>
                    </Link>
                    <DeletePerson personId={item.id} onDelete={handleDelete} />
                  </td>
                </tr>
              );

            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default TablePersons;