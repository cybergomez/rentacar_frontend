import React from "react";
import { Link } from "react-router-dom";
import DeleteCar from "./DeleteCar";

const TableCars = ({ cars, onDelete }) => {

  const handleDelete = (carId) => {
    onDelete(carId);
  };

  if (cars.length === 0) {
    return <h2>No existen carros !!!</h2>
  } else {
    return (
      <div className='grid auto-rows-min gap-2 text-center'>
        <table className='border-collapse border border-slate-400'>
          <thead>
            <tr>
              <th className='px-4 py-3'>ID</th>
              <th className='px-4 py-3'>Nombre</th>
              <th className='px-4 py-3'>Marca</th>
              <th className='px-4 py-3'>Color</th>
              <th className='px-4 py-3'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((item) => {
              return (
                <tr>
                  <td className='px-4 py-3'>{item.id}</td>
                  <td className='px-4 py-3'>{item.name}</td>
                  <td className='px-4 py-3'>{item.brand}</td>
                  <td className='px-4 py-3'>{item.color}</td>
                  <td className='inline-flex gap-2'>
                    <Link to={`/edit-car/${item.id}`}>
                      <button className="btn-info">Editar</button>
                    </Link>
                    <DeleteCar carId={item.id} onDelete={handleDelete} />
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

export default TableCars;