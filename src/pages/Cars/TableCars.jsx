import React from "react";
import { Link } from "react-router-dom";
import DeleteCar from "./DeleteCar";

const TableCars = ({ cars }) => {

    if (cars.length < 0){
        return <h2>No existen carros !!!</h2>
    } else {
        return(
            <div className='grid auto-rows-min gap-2 text-center'>
                <table className='border-collapse border border-slate-400'>
                    <thead>
                        <tr>
                        <th className='px-4 py-3'>ID</th>
                        <th className='px-4 py-3'>Marca</th>
                        <th className='px-4 py-3'>Color</th>
                        <th className='px-4 py-3'>Nombre</th>
                        <th className='px-4 py-3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { cars.map((item, i) => {
                            return (

                            <tr>                           
                                <td className='px-4 py-3'>{item.id}</td>
                                <td className='px-4 py-3'>{item.brand}</td>
                                <td className='px-4 py-3'>{item.color}</td>
                                <td className='px-4 py-3'>{item.name}</td>                        
                                <td className='px-4 py-3'>
                                    
                                <Link to={`/edit-car/${item.id}`}>
                                    {/* <i className="fa fa-pencil" aria-hidden="true">Edit</i> */}
                                    <button clasName="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Edit</button>
                                </Link>
                                <Link>
                                {/* <i className="fa fa-trash-o" aria-hidden="true" onClick={() => deleteCar(item.id)}>Delete</i> */}
                                <DeleteCar carId={item.id}/>
                                </Link>
                                </td>
                            </tr>
                            );

                        })}                            
                    </tbody>
                </table>                    
            </div>                
        );    }
};

export default TableCars;